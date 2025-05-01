import { NextResponse } from "next/server";
import { auth } from "../../../auth";
import sql from "../../../data/db";

export async function POST (req) {
    const session = await auth();
    if (!session || session.user.role !== "admin") {
        return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    const { item_id, item_name, description, price, category_id } = await req.json();
    if (!item_id || !item_name || !description || !price || !category_id) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    try {
        await sql`
            UPDATE food_items
            SET item_name = ${item_name},
                description = ${description},
                price = ${parseFloat(price)},
                category_id = ${parseInt(category_id)}
            WHERE item_id = ${parseInt(item_id)}
        `;
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        console.error("Update item error:", err);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
}