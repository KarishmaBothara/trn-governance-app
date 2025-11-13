import { useTrnApi } from '@futureverse/transact-react';

import { useQuery } from "@tanstack/react-query";
import { DeriveProposal } from "@polkadot/api-derive/democracy/types";
import {ProposalType} from "../../generated/prisma";

export function useProposalInfo() {
    const { trnApi } = useTrnApi();

    return useQuery({
        queryKey: ["trnProposal"],
        queryFn: async (): Promise<any | undefined> => {
            if (!trnApi?.isReady) return [];

            const proposals: DeriveProposal[] = await trnApi.derive.democracy.proposals();

            const response = await fetch(`/api/proposals`, {
                method: "GET"
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (!data) return [];
            const { proposalDBInfo } = data;
            return proposalDBInfo.map(p => {
                const proposalId = p.idx;
                const proposalOnChain = proposals.find(proposal => proposal.index.toNumber() === proposalId);
                if (proposalOnChain) {
                    p.status = 'queued'
                    return { ...p, ...proposalOnChain }
                } else {
                    if (p.status === "Processing") p.status = 'rejected';
                    return p;
                }
            });
        },
        enabled: !!trnApi?.isReady,
        refetchInterval: 60000,
    });
}
