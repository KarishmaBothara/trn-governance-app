import { useTrnApi } from '@futureverse/transact-react';

import { useQuery } from "@tanstack/react-query";
import { BlockNumber } from "@polkadot/types/interfaces";
import {BN_ONE} from "@polkadot/util";

export function useBestNumber() {
    const { trnApi } = useTrnApi();

    return useQuery({
        queryKey: ["bestNumber"],
        queryFn: async (): Promise<BlockNumber | undefined> => {
            console.log("trnApi?.isReady");
            if (!trnApi?.isReady) return BN_ONE;
            console.log("Inside use useQuery info....");

            const bestBlock: BlockNumber = await trnApi.derive.chain.bestNumber();
            console.log("bestBlock::", bestBlock);
            if (!bestBlock) return 0;
            return bestBlock;
        },
        enabled: !!trnApi?.isReady,
        refetchInterval: 60000,
    });
}


