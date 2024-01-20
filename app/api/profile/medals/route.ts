import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const req: { id: string; } = await request.json();

    if ( !!req.id ) {
        const res = await db.medals.findMany({
            where: {
                userId: req.id
            }
        });
    const count = res.length;

        return NextResponse.json({res, count}, { status: 200, statusText: "OK" });
    } else if ( !req.id ) {
        return NextResponse.json({ text: "need to pass id!"}, { status: 403, statusText: "need to pass id!" });
    } else {
        return NextResponse.json({ text: "unexpected error"}, { status: 500, statusText: "unexpected error" });
    };
};