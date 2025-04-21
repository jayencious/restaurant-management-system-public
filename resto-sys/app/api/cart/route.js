import sql from "../../data/db";
import { auth } from "../../auth";

export const dynamic = 'force-dynamic';

export async function GET() {
    const session = await auth();

    if (!session?.user?.id) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const [cart] = await sql`
            SELECT cart_id FROM cart
            WHERE user_id = ${session.user.id}
        `;

        if (!cart) return Response.json([]);

        const items = cart ? await sql`
            SELECT ci.cart_item_id, ci.item_id, fi.item_name,
                   ci.quantity, ci.added_price
            FROM cart_items ci
            JOIN food_items fi ON ci.item_id = fi.item_id
            WHERE ci.cart_id = ${cart.cart_id}
        ` : [];

        console.log(Response.json(items));

        return Response.json(items);
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(req) {
    const session = await auth();
    if (!session?.user?.id) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { itemId, newQuantity } = await req.json();

    try {
        await sql`
            UPDATE cart_items
            SET quantity = ${newQuantity}
            WHERE cart_item_id = ${itemId}
            RETURNING *
        `;

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req) {
    const session = await auth();
    if (!session?.user?.id) {
        return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const itemId = searchParams.get('itemId');

    try {
        await sql`
            DELETE FROM cart_items
            WHERE cart_item_id = ${itemId}
        `;

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}