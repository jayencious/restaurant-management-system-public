import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import sql from "../../../data/db";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            id: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
                role: { label: "Role", type: "text" },
            },
            async authorize(credentials) {
                const { email, password, role = "user" } = credentials || {};

                if (!email || !password) {
                    return null;
                }

                let user = null;
                try {
                    if (role === "admin") {
                        [user] = await sql`
                            SELECT admin_id AS id,
                                first_name,
                                last_name,
                                email,
                                password
                            FROM admin
                            WHERE email = ${email}
                        `;
                    } else {
                        [user] = await sql`
                            SELECT user_id AS id,
                                first_name,
                                last_name,
                                email,
                                password
                            FROM users
                            WHERE email = ${email}
                        `;
                    }

                    if (!user || !user.password) {
                        return null;
                    }

                    const isCorrectPassword = await bcrypt.compare(password, user.password);
                    if (!isCorrectPassword) {
                        return null;
                    }

                    const authUser = {
                        id: user.id,
                        email: user.email,
                        name: `${user.first_name} ${user.last_name}`.trim(),
                        role: role,
                    };
                    return authUser;
                } catch (err) {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.role = token.role || "user";
            }
            return session;
        },
    },
};