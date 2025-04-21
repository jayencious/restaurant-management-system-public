import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/authOptions";

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.id) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
        });
    }

    return new Response(JSON.stringify({ user_id: session.user.id }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}