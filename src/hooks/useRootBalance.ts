import { useTrnApi } from '@futureverse/transact-react';

// import { useCall } from './useCall';
import { useAuth } from "@futureverse/auth-react";
import { useQuery } from "@tanstack/react-query";
import {BigNumber} from "bignumber.js";



export function useRootBalanceInfo() {
    const { trnApi } = useTrnApi();
    const { userSession } = useAuth();

    const futurepass = userSession?.futurepass;

    return useQuery({
        queryKey: ["trnRootBal"],
        queryFn: async (): Promise<BigNumber | undefined> => {
            if (!trnApi?.isReady || !userSession || !futurepass) return undefined;

            const { data: rootData } = (await trnApi.query.system.account(futurepass)) as any;

            const rootBal = (rootData.free.add(rootData.reserved)).sub(rootData.frozen);
            const rootBalance = new BigNumber(rootBal.toString());

            return rootBalance;
        },
        enabled: !!userSession && !!futurepass && !!trnApi?.isReady,
        refetchInterval: 60000,
    });
}
