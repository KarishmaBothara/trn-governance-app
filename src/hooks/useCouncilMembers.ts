import { useTrnApi } from '@futureverse/transact-react';

import { useQuery } from "@tanstack/react-query";
import {hexToNumber} from "@polkadot/util";

export function useCouncilMembers() {
    const { trnApi } = useTrnApi();

    return useQuery({
        queryKey: ["trnCouncil"],
        queryFn: async (): Promise<any | undefined> => {
            if (!trnApi?.isReady) return undefined;

            const councilData = (await trnApi.derive.elections.info()) as any;
            const members = councilData.members;

            const response = await fetch(`/api/councils`, {
                method: "GET"
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (!data) return [];
            const { councilInfo } = data;
            return members.map(([member, balanceHex]) => {
                const balance = hexToNumber(balanceHex);
                const dbDetails = councilInfo.find(c => c.address.toLowerCase() === member.toString().toLowerCase());
                const obj = { ...{ balance: balance }, ...dbDetails };
                console.log("Obj::", obj);
                return obj;
            });
        },
        enabled: !!trnApi?.isReady,
        refetchInterval: 60000,
    });
}
