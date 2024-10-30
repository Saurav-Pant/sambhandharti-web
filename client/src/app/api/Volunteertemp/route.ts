import { NextResponse } from 'next/server';
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, college, RegistrationDuration, Address } = body;

        if (!name || !email || !phone || !college || !RegistrationDuration) {
            return NextResponse.json(
                { error: "Required fields are missing" },
                { status: 400 }
            );
        }

        const contactMessage = await prisma.findVolunteer.create({
            data: {
                name,
                email,
                phone,
                college,
                RegistrationDuration: parseInt(RegistrationDuration),
                Address: Address || "",
            },
        });

        return NextResponse.json(
            { message: "Details submitted successfully", contactMessage },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing volunteer registration:", error);
        return NextResponse.json(
            { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}

export async function GET() {
    try {
        const volunteers = await prisma.findVolunteer.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        return NextResponse.json(volunteers);
    } catch (error) {
        console.error("Error fetching volunteers:", error);
        return NextResponse.json(
            { error: "Internal server error", details: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}
