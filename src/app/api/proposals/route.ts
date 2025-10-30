
import { getPrismaClient } from "@/lib/getPrismaClient";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, Proposal, ProposalType } from "../../../../generated/prisma";
export async function POST(
    request: NextRequest
) {
    try {
        const { idx, extrinsicId, title, summary, description, preimage, deposit, link, proposer, proposalType, status,
            threshold, method, section, hash, args, ayePercentage, nayPercentage, totalVotes
        } = await request.json();
        const prisma: PrismaClient = await getPrismaClient();
        const proposal = await prisma.proposal.create({
            data: {
                idx: idx,
                extrinsicId,
                title,
                link,
                description,
                summary,
                preimage,
                successful: true,
                deposit,
                proposer,
                proposalType,
                status,
                threshold,
                method,
                section,
                hash,
                args,
                ayePercentage,
                nayPercentage,
                totalVotes,
                updatedAt: new Date(),
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


// GET - Fetch proposals with filtering options
export async function GET(request: NextRequest) {
    try {
        const {searchParams} = new URL(request.url)
        const indexes = searchParams.get('indexes');
        console.log("Indexes:",indexes);
        const prisma: PrismaClient = await getPrismaClient();
        let proposalDBInfo: Proposal[];
        if (!indexes) {
            proposalDBInfo = await prisma.proposal.findMany({
                where: {
                    proposalType: ProposalType.Democracy
                }
            });
        } else {
            console.log("Inside else...");
            const hashes = JSON.parse(indexes);//indexes.map(i => parseInt(i));
            console.log('hashes::',hashes);
            proposalDBInfo = await prisma.proposal.findMany({
                where: {
                    hash: {
                        in: hashes
                    },
                    proposalType: ProposalType.Democracy
                },
                orderBy: {
                    createdAt: 'desc',
                }
            });
            console.log('proposalDBInfo::',proposalDBInfo);
        }
        return NextResponse.json({ success: true, proposalDBInfo }, { status: 201 })


    } catch (error) {
        console.error('Error fetching proposals:', error)
        return NextResponse.json(
            {success: false, error: error},
            {status: 500}
        )
    }
}
