import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";

export const auth = () => getServerSession(authOptions);