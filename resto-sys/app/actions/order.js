"use server";

import sql from "../data/db";
import { auth } from "../auth";
import { revalidatePath } from "next/cache";

async function createOrder({
    formData,
    cartItems,
    paymentId
}) {
    const session = await auth();
    if (!session?.user?.id) throw new Error('User not logged in');

    const { name, phone, address } = formData;
    const totalPice = cartItems.reduce((sum, item) => sum + item.added_price * item.quantity, 0);

    try {
        await sql`BEGIN`;

        const [order] = await sql`
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

        for (const item of cartItems) {
            await sql`
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
        }

        const [cart] = await sql`
            SELECT cart_id FROM cart
            WHERE user_id = ${session.user.id}
        `;

        if (!cart?.cart_id) {
            console.warn('No cart found for user:', session.user.id);
        } else {
            const deleteResult = await sql`
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

        await sql`COMMIT`;

        revalidatePath('/userLogin/orderCart');
        revalidatePath('/userLogin/menu');
        return { success: true, orderId: order.order_id };
    } catch (err) {
        await sql`ROLLBACK`;
        console.error('Error creating order:', {
            message: err.message,
            userId: session?.user?.id,
            paymentId,
        });
        throw new Error('Failed to create order:');
    }
}

export default createOrder;