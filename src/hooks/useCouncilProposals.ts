import { useTrnApi } from '@futureverse/transact-react';

import { useQuery } from "@tanstack/react-query";
import {DeriveCollectiveProposal} from "@polkadot/api-derive/types";
import {ProposalType} from "../../generated/prisma";
import {hexToNumber} from "@polkadot/util";
import {useVotingStatus} from "@/hooks/useVotingStatus";
import {useBestNumber} from "@/hooks/useBestNumber";

export function useCouncilProposals() {
    const { trnApi } = useTrnApi();
    console.log("trnApi status:", {
        exists: !!trnApi,
        isReady: trnApi?.isReady,
        enabled: !!trnApi?.isReady
    });

    return useQuery({
        queryKey: ["trnMotion"],
        queryFn: async (): Promise<any | undefined> => {
            if (!trnApi?.isReady) return [];
            console.log("Inside use useQuery info....");

            const councilMotions: DeriveCollectiveProposal[] = await trnApi.derive.council.proposals();
            console.log("councilMotions::", councilMotions);
            const councilMembers = await trnApi.query.council.members();
            if (!councilMotions || councilMotions.length === 0) return [];
            const councilMembersLen = councilMembers.length;
            // const idxs = councilMotions.map(cm => hexToNumber(cm.proposal.callIndex.toHex()));
            // console.log('idxs::',idxs);

            const response = await fetch(`/api/councilProposals`, {
                method: "GET"
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const bestBlock = await trnApi.derive.chain.bestNumber();
            console.log("bestBlock::", bestBlock);
            const data = await response.json();
            if (!data) return [];
            const { proposalDBInfo } = data;
            return councilMotions.map(cm => {
                // const idx = hexToNumber(cm.proposal.callIndex.toHex());
                const dbDetails = proposalDBInfo.find(proposal => (proposal.preimage.toLowerCase() === cm.hash.toString().toLowerCase()) ||
                    (proposal.hash.toLowerCase() === cm.hash.toString().toLowerCase()));
                const voteDetails = cm.votes.toJSON();


                const end = voteDetails?.end;
                const ayeVotes = voteDetails?.ayes.length || 0;
                const nayVotes = voteDetails?.nays.length || 0;
                const totalVotes = ayeVotes + nayVotes;
                const ayePercentage = Math.round((ayeVotes / totalVotes) * 100) || 0;
                const nayPercentage = 100 - ayePercentage;
                const proposalDetails = { ayePercentage, nayPercentage, end, totalVotes };
                // cm.ayePercentage = ayePercentage;
                // cm.nayPercentage = nayPercentage;
                // cm.hasFailed = hasFailed;
                return { ...cm, ...dbDetails, ...proposalDetails }
            });
        },
        enabled: !!trnApi?.isReady,
        refetchInterval: 60000,
    });
}


