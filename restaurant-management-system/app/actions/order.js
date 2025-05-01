"use server";

import sql from "../data/db";
import { auth } from "../auth";
import { revalidatePath } from "next/cache";

async function createOrder({
    formData,
    cartItems,
    paymentId,
}) {
    const session = await auth();
    if (!session?.user?.id) throw new Error('User not logged in');

    if (!cartItems || cartItems.length === 0) {
        throw new Error('No cart items provided');
    }

    const { name, phone, address } = formData;
    const totalPice = cartItems.reduce((sum, item) => sum + item.added_price * item.quantity, 0);

    try {
        const result = await sql.begin(async (transaction) => {
            const orderResult = await transaction`
                INSERT INTO orders (
                    user_id,
                    total_price,
                    delivery_address,
                    name,
                    phone,
                    status,
                    payment_id
                )
                VALUES (
                    ${session.user.id},
                    ${totalPice},
                    ${address},
                    ${name},
                    ${phone},
                    'pending',
                    ${paymentId}
                )
                RETURNING order_id
            `;
            if (!orderResult || !orderResult[0]?.order_id) {
                throw new Error('Failed to insert order: No order_id returned');
            }

            const order = orderResult[0];

            for (const item of cartItems) {
                console.log('Inserting order items:', { itemId: item.item_id, quantity: item.quantity, price: item.added_price });
                const itemResult = await transaction`
                    INSERT INTO order_items (
                        order_id,
                        item_id,
                        quantity,
                        price
                    )
                    VALUES (
                        ${order.order_id},
                        ${item.item_id},
                        ${item.quantity},
                        ${item.added_price}
                    )
                `;
                if (!itemResult) {
                    throw new Error(`Failed to insert order item: ${item.item_id}`);
                }
            }

            const cartResult = await transaction`
                SELECT cart_id FROM cart
                WHERE user_id = ${session.user.id}
            `;
            
            if (!cartResult || !cartResult[0]?.cart_id) {
                console.warn('No cart found for user:', session.user.id);
            } else {
                const cart = cartResult[0];
                console.log('Cleaning cart:', { cartId: cart.cart_id });
                const deleteResult = await transaction`
                    DELETE FROM cart_items
                    WHERE cart_id = ${cart.cart_id}
                    RETURNING cart_item_id;
                `;
                console.log('Cart cleaned:', {
                    userId: session.user.id,
                    cartId: cart.cart_id,
                    deletedItems: deleteResult.length,
                });
            }

            return order;
        });

        revalidatePath('/userLogin/orderCart');
        revalidatePath('/userLogin/menu');
        return { success: true, orderId: order.order_id };
    } catch (err) {
        console.error('Error creating order:', {
            message: err.message,
            userId: session?.user?.id,
            paymentId,
        });        
        throw new Error(`Failed to create order: ${err.message}`);
    }
}

export default createOrder;