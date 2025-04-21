"use server";

import sql from "../data/db";
import { auth } from "../auth";
import { revalidatePath } from "next/cache";

export async function addToCart({
    itemId,
    price
}) {
    const session = await auth();
    if(!session?.user?.id) throw new Error('User not logged in');

    const numericItemId = Number(itemId);
    const numericPrice = Number(price);

    if (!numericItemId || isNaN(numericItemId)) {
        throw new Error(`Invalid item id: ${itemId}`);
    }

    if (!numericPrice || isNaN(numericPrice)) {
        throw new Error(`Invalid price: ${price}`);
    }

    try {
        let [cart] = await sql`
            SELECT cart_id FROM cart
            WHERE user_id = ${session.user.id}
            LIMIT 1;
        `;
        
        if (!cart) {
            [cart] = await sql`
                INSERT INTO cart (user_id)
                VALUES (${session.user.id})
                RETURNING cart_id
            `;
        }

        const [itemExists] = await sql`
            SELECT item_id FROM food_items
            WHERE item_id = ${itemId}
            LIMIT 1;
        `;

        console.log('Item exists check:', { numericItemId, numericPrice });

        if (!itemExists) throw new Error('Item does not exist in database');

        const [existingItem] = await sql`
            SELECT cart_item_id, quantity FROM cart_items
            WHERE cart_id = ${cart.cart_id} AND item_id = ${itemId}
            LIMIT 1;
        `;
        
        if (existingItem) {
            await sql`
                UPDATE cart_items
                SET
                    quantity = ${existingItem.quantity + 1},
                    updated_at = CURRENT_TIMESTAMP
                WHERE cart_item_id = ${existingItem.cart_item_id}
            `;
        } else {
            await sql`
                INSERT INTO cart_items (
                    cart_id,
                    item_id,
                    quantity,
                    added_price
                )
                VALUES (
                    ${cart.cart_id},
                    ${itemId},
                    1,
                    ${price}
                )
            `;
        }
        revalidatePath('/userLogin/menu');
        revalidatePath('/userLogin/orderCart');
        return { success: true };
    } catch (err) {
        console.error('Error in addToCart:', err);
        throw err;
    }
}

export async function updateCartItemQuantity({
    cartItemId,
    newQuantity
}) {
    const session = await auth();
    if(!session?.user?.id) throw new Error('User not logged in');

    const numericCartItemId = Number(cartItemId);
    const numericNewQuantity = Number(newQuantity);

    if (isNaN(numericCartItemId)) {
        throw new Error(`Invalid cart item ID: ${cartItemId}`);
    }

    if (isNaN(numericNewQuantity)) {
        throw new Error(`Invalid quantity: ${newQuantity}`);
    }

    try {
        if (newQuantity <= 0) {
            await sql`
                DELETE FROM cart_items
                WHERE cart_item_id = ${numericCartItemId}
            `;
        } else {
            await sql`
                UPDATE cart_items
                SET quantity = ${numericNewQuantity}
                WHERE cart_item_id = ${numericCartItemId}
            `;
        }
        
        revalidatePath('/userLogin/menu');
        revalidatePath('/userLogin/orderCart');
        return { success: true };
    } catch (err) {
        console.error('Error in updateCartItemQuantity:', err);
        throw err;
    }
}

export async function getCartItems() {
    const session = await auth();
    if (!session?.user?.id) return [];

    const [cart] = await sql`
        SELECT cart_id FROM cart
        WHERE user_id = ${session.user.id}
    `;

    if (!cart) return [];

    return await sql`
            SELECT ci.cart_item_id, ci.item_id, fi.item_name, fi.price, ci.quantity, ci.added_price, fi.description
            FROM cart_items ci
            JOIN food_items fi
            ON ci.item_id = fi.item_id
            WHERE ci.cart_id = ${cart.cart_id}
            ORDER BY ci.cart_item_id DESC
        `;
}

export async function removeFromCart({
    cartItemId
}) {
    const session = await auth();
    if (!session?.user?.id) throw new Error('User not authenticated');

    const numericCartItemId = Number(cartItemId);
    if (isNaN(numericCartItemId)) {
        throw new Error('Invalid cart item ID:', cartItemId)
    }

    try {
        const res = await sql`
            DELETE FROM cart_items
            WHERE cart_item_id = ${numericCartItemId}
            RETURNING cart_item_id;
        `;

        if (res?.length === 0) {
            throw new Error('Cart item not found');
        }

        revalidatePath('/userLogin/menu');
        revalidatePath('/userLogin/orderCart');
        return { success: true, message: 'Item removed from cart' };
    } catch (err) {
        console.error('Error in removeFromCart:', err);
        throw new Error(err.message || 'An unexpected error occurred while trying to remove the item from the cart.')
    }
}