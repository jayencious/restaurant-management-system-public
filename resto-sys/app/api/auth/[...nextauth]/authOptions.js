import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import sql from "../../../data/db";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            id: 'credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials;

                const [user] = await sql`
                    SELECT * FROM users
                    WHERE email = ${email}
                `;

                if (!user || !user?.password) return null;

                const isCorrectPassword = await bcrypt.compare(password, user?.password);
                if (!isCorrectPassword) return null;

                return {
                    id: user.user_id,
                    email: user.email,
                    name: `${user.first_name} ${user.last_name}`,
                };
            },
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            if (token?.id)
                session.user.id = token.id;
            return session;
        },
        async jwt({ token, user }) {
            if (user)
                token.id = user.id;
            return token;
        },
    },
};