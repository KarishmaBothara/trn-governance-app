import { useTrnApi } from '@futureverse/transact-react';

import { useQuery } from "@tanstack/react-query";
import {DeriveCollectiveProposal} from "@polkadot/api-derive/types";
// import {ProposalType} from "../../generated/prisma";
// import {hexToNumber} from "@polkadot/util";
// import {useVotingStatus} from "@/hooks/useVotingStatus";
// import {useBestNumber} from "@/hooks/useBestNumber";

export function useCouncilProposals() {
    const { trnApi } = useTrnApi();

    return useQuery({
        queryKey: ["trnMotion"],
        queryFn: async (): Promise<any | undefined> => {
            if (!trnApi?.isReady) return [];

            const councilMotions: DeriveCollectiveProposal[] = await trnApi.derive.council.proposals();
            // const councilMembers = await trnApi.query.council.members();
            if (!councilMotions || councilMotions.length === 0) return [];
            // const councilMembersLen = councilMembers.length;

            const response = await fetch(`/api/councilProposals`, {
                method: "GET"
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // const bestBlock = await trnApi.derive.chain.bestNumber();
            const data = await response.json();
            if (!data) return [];
            const { proposalDBInfo } = data;
            return councilMotions.map((cm: any) => {
                // const idx = hexToNumber(cm.proposal.callIndex.toHex());
                const dbDetails = proposalDBInfo.find((proposal: any) => (proposal.preimage.toLowerCase() === cm.hash.toString().toLowerCase()) ||
                    (proposal.hash.toLowerCase() === cm.hash.toString().toLowerCase()));
                const voteDetails = cm.votes.toJSON();


                const end = voteDetails?.end;
                const ayeVotes = voteDetails?.ayes.length || 0;
                const nayVotes = voteDetails?.nays.length || 0;
                const totalVotes = ayeVotes + nayVotes;
                const ayePercentage = Math.round((ayeVotes / totalVotes) * 100) || 0;
                const nayPercentage = 100 - ayePercentage;
                const proposalDetails = { ayePercentage, nayPercentage, end, totalVotes };
                return { ...cm, ...dbDetails, ...proposalDetails }
            });
        },
        enabled: !!trnApi?.isReady,
        refetchInterval: 60000,
    });
}


