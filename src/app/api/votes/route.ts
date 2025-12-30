
import { getPrismaClient } from "@/lib/getPrismaClient";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";
export async function POST(
    request: NextRequest
) {
    try {

        const { voter, refIndex, isAye, amount, pId } = await request.json();
        const prisma: PrismaClient = await getPrismaClient();
        const proposal = await prisma.votes.create({
            data: {
                voter, refIdx: refIndex, voteAye: isAye, amount, pId
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
        const {searchParams} = new URL(request.url)
        const pId: string = searchParams.get('pId') as string;
        const voteData = await prisma.votes.findMany({
            where: { pId: parseInt(pId) }
        });
        return NextResponse.json({ success: true, voteData }, { status: 201 })


    } catch (error) {
        console.error('Error fetching council members:', error)
        return NextResponse.json(
            {success: false, error: error},
            {status: 500}
        )
    }
}
