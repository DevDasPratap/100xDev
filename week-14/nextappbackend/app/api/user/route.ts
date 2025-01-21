import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server"

const client = new PrismaClient()
// export function GET() {
//     return Response.json({
//         email:'pratap@gmail.com',
//         name: 'Pratap Das'
//     })
// }


export async function GET() {
    const user = await client.user.findFirst({});
    return Response.json({ name: user?.username, email: user?.username })
}

// export async function POST(req: NextRequest) {
//     const body = await req.json()
//     console.log('Body', body)
//     return Response.json({
//         message:'You are login'
//     })
// }

// export async function POST(req: NextRequest) {
//     const body = await req.json();
//     console.log('Body', body);
//     return new Response(JSON.stringify({ message: 'You are logged in' }), {
//         status: 200,
//         headers: { 'Content-Type': 'application/json' }
//     });
// }



export async function POST(req: NextRequest) {
    const body = await req.json();
    // should add zod validation here
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password
        }
    });

    console.log(user.id);

    return NextResponse.json({ message: "Signed up" });
}