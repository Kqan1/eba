import { db } from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcryptjs-react";
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                username: {
                    label: "username",
                    type: "text",
                    placeholder: "username",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials.password) {
                    return null;
                }

                const dbUser = await db.user.findUnique({
                    where: {
                        username: credentials.username,
                    },
                });

                if (!dbUser) {
                    return null;
                }

                const isPasswordValid = await compare(
                    credentials.password,
                    dbUser.password
                );

                if (!isPasswordValid) {
                    return null;
                }

                return {
                    id: `${dbUser.id}`,
                    email: dbUser.email,
                    emailVerified: dbUser.emailVerified,
                    password: dbUser.password,
                    username: dbUser.username,
                    bio: dbUser.bio,
                    role: `${dbUser.role}`,
                    pp: `${dbUser.pp}`,
                    banner: dbUser.banner,
                    xp: dbUser.xp,
                    level: dbUser.level,
                    createdAt: dbUser.createdAt,
                    updatedAt: dbUser.updatedAt
                };
            },
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    emailVerified: token.emailVerified,
                    password: token.password,
                    username: token.username,
                    bio: token.bio,
                    role: token.role,
                    pp: token.pp,
                    banner: token.banner,
                    xp: token.xp,
                    level: token.level,
                    createdAt: token.createdAt,
                    updatedAt: token.updatedAt
                },
            };
        },
        jwt: ({ token, user }) => {
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    username: u.username,
                    emailVerified: u.emailVerified,
                    bio: u.bio,
                    password: u.password,
                    role: u.role,
                    pp: u.pp,
                    banner: u.banner,
                    xp: u.xp,
                    level: u.level,
                    createdAt: u.createdAt,
                    updatedAt: u.updatedAt
                };
            }
            return token;
        },
    }
};