
import { getPrismaClient } from "@/lib/getPrismaClient";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";
export async function POST(
    request: NextRequest
) {
    try {

        const { name, address, backing,  description, discord, twitter } = await request.json();
        const prisma: PrismaClient = await getPrismaClient();
        const proposal = await prisma.council.create({
            data: {
                name, address, backing,  description, discord, twitter, verified: false, votes: "0", hasDiscord: !!discord, hasTwitter: !!twitter
            }
        });

        return NextResponse.json({ success: true, proposal }, { status: 201 });

    } catch (error: any) {
        console.error('Error creating proposal:', error)
        return NextResponse.json(
            {
                success: false,
                error: error
            },
            { status: 500 }
        )
    }
}


// GET - Fetch delegates
export async function GET(request: NextRequest) {
    try {
       const prisma: PrismaClient = await getPrismaClient();
        const councilInfo = await prisma.council.findMany();
        return NextResponse.json({ success: true, councilInfo }, { status: 201 })


    } catch (error) {
        console.error('Error fetching council members:', error)
        return NextResponse.json(
            {success: false, error: error},
            {status: 500}
        )
    }
}
