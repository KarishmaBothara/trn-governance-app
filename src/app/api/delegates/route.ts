
import { getPrismaClient } from "@/lib/getPrismaClient";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";
export async function POST(
    request: NextRequest
) {
    try {

        const { name, address, description, totalDelegators, participation, votingHistory, discord, twitter, votingPower } = await request.json();
        const prisma: PrismaClient = await getPrismaClient();
        const proposal = await prisma.delegate.create({
            data: {
                name, address, description, totalDelegators, participation, votingHistory, discord, twitter, votingPower
            }
        });

        return NextResponse.json({ success: true, proposal }, { status: 201 });

    } catch (error: any) {
        console.error('Error creating delegate:', error)
        return NextResponse.json(
            {
                success: false,
                error: error
            },
            { status: 500 }
        )
    }
}


// GET - Fetch proposals with filtering options
export async function GET(request: NextRequest) {
    try {
       const prisma: PrismaClient = await getPrismaClient();
        const delegateInfo = await prisma.delegate.findMany();
        return NextResponse.json({ success: true, delegateInfo }, { status: 201 })


    } catch (error) {
        console.error('Error fetching council members:', error)
        return NextResponse.json(
            {success: false, error: error},
            {status: 500}
        )
    }
}
