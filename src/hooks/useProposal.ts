import { useTrnApi } from '@futureverse/transact-react';

import { useQuery } from "@tanstack/react-query";
import { DeriveProposal } from "@polkadot/api-derive/democracy/types";
import {ProposalType} from "../../generated/prisma";

export function useProposalInfo() {
    const { trnApi } = useTrnApi();
    console.log("trnApi status:", {
        exists: !!trnApi,
        isReady: trnApi?.isReady,
        enabled: !!trnApi?.isReady
    });

    return useQuery({
        queryKey: ["trnProposal"],
        queryFn: async (): Promise<any | undefined> => {
            if (!trnApi?.isReady) return [];
            console.log("Inside use useQuery info....");

            const proposals: DeriveProposal[] = await trnApi.derive.democracy.proposals();
            console.log("Proposals::", proposals);
            // if (!proposals || proposals.length === 0) return [];
            // const idxs = proposals.map(p => p.index.toNumber());
            // console.log('idxs::',idxs);

            // const response = await fetch(`/api/proposals?indexes=${JSON.stringify(idxs)}`, {
            //     method: "GET"
            // });
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
            // return proposals.map(p => {
            //     const idx = p.index.toNumber();
            //     const dbDetails = proposalDBInfo.find(proposal => proposal.idx === idx);
            //     return { ...dbDetails, ...p }
            // });
        },
        enabled: !!trnApi?.isReady,
        refetchInterval: 60000,
    });
}
