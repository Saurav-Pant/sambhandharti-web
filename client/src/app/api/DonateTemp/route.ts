import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, message } = body;

        if (!name || !email || !phone) {
            return NextResponse.json(
                { error: "Name, email, and phone are required" },
                { status: 400 }
            );
        }

        const contactMessage = await prisma.contactMessage.create({
            data: {
                name,
                email,
                phone,
                message: message || '',
            },
        });

        return NextResponse.json(
            { message: "Donation received successfully", contactMessage },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing donation:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}


export async function GET(req: NextRequest) {
    try {
        const contactMessages = await prisma.contactMessage.findMany();
        console.log(contactMessages);
        return NextResponse.json(contactMessages);
    } catch (error) {
        console.error("Error fetching contact messages:", error);
        return NextResponse.json(
            { error: "An error occurred while fetching contact messages." },
            { status: 500 }
        );
    }
}
