import NextAuth, { NextAuthOptions, User } from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

interface UserWithPassword extends User {
    password: string;
}

export const authOptions: NextAuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password)
                    return null;

                const user = await
            }
        })
    ],
    pages: {
        signIn: '/',
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, account })  {
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token })  {
            session.accessToken = token.accessToken;
            return session;
        },
    },
};

export default NextAuth(authOptions);