import { NextResponse } from "next/server";
import { auth } from "../../../auth";
import sql from "../../../data/db";

export async function POST(req) {
    const session = await auth();
    if (!session || session.user.role !== "admin") {
        return NextResponse.json({ error: "Access denied" }, { status: 403 });
    }

    const { item_name, description, price, category_id } = await req.json();
    if (!item_name || !description || !price || !category_id) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    try {
        await sql`
            INSERT INTO food_items (item_name, description, price, category_id, create_date)
            VALUES (${item_name}, ${description}, ${parseFloat(price)}, ${parseInt(category_id)}, CURRENT_DATE)
        `;
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        console.error("Add items error:", err);
        return NextResponse.json({ error: "Database error" }, {status: 500 });
    }
}