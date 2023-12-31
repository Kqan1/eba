import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, username, password } = body;

        // check if email is existing
        const existingUserByEmail = await db.user.findUnique({
            where: { email: email }
        });
        if ( existingUserByEmail ) {
            return NextResponse.json({ 
                message: "This email is already exists",
                status: "error"
            }, { status: 409 })
        };

        // check if username is existing
        const existingUserByUserame = await db.user.findUnique({
            where: { username: username }
        });
        if ( existingUserByUserame ) {
            return NextResponse.json({ 
                message: "This username is already exists",
                status: "error"
            }, { status: 409 })
        };

        // hash password
        const hashedpassword = await hash(password, 12);

        // Create new user
        await db.user.create({
            data: {
                email: email,
                username: username,
                password: hashedpassword
            }
        });

        // Response
        return NextResponse.json({ 
            message: "success",
            status: "success"
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ 
            message: "unexpected error",
            status: "error"
        }, { status: 500 });
    };
};