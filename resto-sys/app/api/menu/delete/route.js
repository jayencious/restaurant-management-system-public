import { NextResponse } from "next/server";
import { auth } from "../../../auth";
import sql from "../../../data/db";

export async function POST(req) {
    const session = await auth();
    if (!session || session.user.role !== "admin") {
        return NextResponse.json({ error: "Access denied"}, { status: 403 });
    }

    const { item_id } = await req.json();
    if (!item_id) {
        return NextResponse.json({ error: "Missing item_id" }, { status: 400 });
    }

    try {
        await sql`
            DELETE FROM food_items
            WHERE item_id = ${parseInt(item_id)}
        `;
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        console.error("Delete item error:", err);
        return NextResponse.json({ error: "Database error:" }, { status: 500 });
    }
}