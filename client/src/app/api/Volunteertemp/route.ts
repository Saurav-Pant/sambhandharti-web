import { NextResponse } from 'next/server';
// import prisma from "@/lib/prisma";

// export async function POST(req: Request) {
//     try {
//         const body = await req.json();
//         const { name, email, phone, college_work,duration,address } = body;

//         if (!name || !email || !phone || !address || !college_work || !duration) {
//             return NextResponse.json(
//                 { error: "All the details are required" },
//                 { status: 400 }
//             );
//         }

//         const contactMessage = await prisma.contactMessage.create({
//             data: {
//                 name,
//                 email,
//                 phone,
//                 college_work,
//                 duration,
//                 address,
//             },
//         });

//         return NextResponse.json(
//             { message: "Details submitted successfully", contactMessage },
//             { status: 200 }
//         );
//     } catch (error) {
//         console.error("Error processing donation:", error);
//         return NextResponse.json(
//             { error: "Internal server error" },
//             { status: 500 }
//         );
//     } finally {
//         await prisma.$disconnect();
//     }
// }

export async function GET() {
    return NextResponse.json({ message: "Hello from VolunteerTemp API" });
}
