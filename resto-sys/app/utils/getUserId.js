"use server";

import { getServerSession } from "next-auth";
import { authOptions } from '../api/auth/[...nextauth]/route';

async function getUserIdFromSession() {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        throw new Error("User not authenticated");
    }

    return session.user.id;
}

export default getUserIdFromSession;