import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import sql from '../../../data/db';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            id: 'credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const { email, password } = credentials;

                const user = await sql`
                    SELECT * FROM users
                    WHERE email = ${email}
                `;
                const correctPassword = user && bcrypt.compareSync(password, user.password);

                if (correctPassword) {
                    return user;
                } 
                
                return null;
            },
        }),
    ],
});

export { handler as GET, handler as POST };