import { useTrnApi } from '@futureverse/transact-react';

// import { useAuth } from "@futureverse/auth-react";
import { useQuery } from "@tanstack/react-query";
import {DeriveProposal} from "@polkadot/api-derive/democracy/types";
// import { BigNumber } from "bignumber.js";

export function useProposal() {
    const { trnApi } = useTrnApi();
    // const { userSession } = useAuth();

    // const futurepass = userSession?.futurepass;

    return useQuery({
        queryKey: ["trnProposal"],
        queryFn: async (): Promise<DeriveProposal[] | undefined> => {
            if (!trnApi?.isReady) return undefined;

            const proposalData: DeriveProposal[] = await trnApi.derive.democracy.proposals();

            return proposalData;
        },
        enabled: !!trnApi?.isReady,
        refetchInterval: 60000,
    });
}
