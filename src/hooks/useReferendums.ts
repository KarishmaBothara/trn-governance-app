import { useTrnApi } from '@futureverse/transact-react';

import { useQuery } from "@tanstack/react-query";
import { DeriveReferendumExt } from "@polkadot/api-derive/types";
import { ProposalType } from "../../generated/prisma";

export function useReferendumInfo() {
    const { trnApi } = useTrnApi();
    console.log("trnApi status:", {
        exists: !!trnApi,
        isReady: trnApi?.isReady,
        enabled: !!trnApi?.isReady
    });

    return useQuery({
        queryKey: ["trnReferendum"],
        queryFn: async (): Promise<any | undefined> => {
            if (!trnApi?.isReady) return [];
            console.log("Inside use useQuery info....");

            const referendums: DeriveReferendumExt[] = await trnApi.derive.democracy.referendums();
            console.log("Referendums::", referendums);
            if (!referendums || referendums.length === 0) return [];
            const hashes = referendums.map(r => r.status.proposal.toJSON().lookup.hash.toString());
            console.log('hashes::',hashes);

            const response = await fetch(`/api/proposals?indexes=${JSON.stringify(hashes)}`, {
                method: "GET"
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (!data) return [];
            const { proposalDBInfo } = data;
            return referendums.map(p => {
                const hash = p.status.proposal.toJSON().lookup.hash.toString();
                const refIdx = p.index.toNumber();
                p.refIdx = refIdx;
                const dbDetails = proposalDBInfo.find(proposal => proposal.hash === hash);
                return { ...dbDetails, ...p }
            });
        },
        enabled: !!trnApi?.isReady,
        refetchInterval: 60000,
    });
}


