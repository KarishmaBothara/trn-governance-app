
import { getPrismaClient } from "@/lib/getPrismaClient";
import { NextRequest, NextResponse } from "next/server";
import {PrismaClient, Proposal, ProposalType} from "../../../../generated/prisma";

export async function POST(
    request: NextRequest
) {
    try {
        const reqObj = await request.json();
        const data = reqObj.action === "updateVote" ?
            { ayePercentage: reqObj.ayePercentage, nayPercentage: reqObj.nayPercentage,
                totalVotes: reqObj.totalVotes } : { status: reqObj.status };
        const prisma: PrismaClient = await getPrismaClient();
        const proposal = await prisma.proposal.update({
            where: {
                id: reqObj.id,
                proposalType: reqObj.proposalType
            },
            data: data
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

// GET - Fetch proposals with filtering options
export async function GET(_request: NextRequest) {
    try {
        const prisma: PrismaClient = await getPrismaClient();
        const proposalDBInfo: Proposal[] = await prisma.proposal.findMany({
            where: {
                proposalType: { in: [ProposalType.CouncilMotion, ProposalType.CouncilExternalMotion] }
            }
        });
        return NextResponse.json({ success: true, proposalDBInfo }, { status: 201 })


    } catch (error) {
        console.error('Error fetching proposals:', error)
        return NextResponse.json(
            {success: false, error: error},
            {status: 500}
        )
    }
}

