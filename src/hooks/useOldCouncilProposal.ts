
import { useQuery } from "@tanstack/react-query";
import {ProposalStatus} from "../../generated/prisma";

export function useOldCouncilProposal() {

    return useQuery({
        queryKey: ["trnOldCouncilProposals"],
        queryFn: async (): Promise<any | undefined> => {
            const response = await fetch(`/api/councilProposals`, {
                method: "GET"
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (!data) return [];
            console.log("***************");
            console.log("Data:", data);
            const { proposalDBInfo } = data;
            return proposalDBInfo.filter((p: any) => p.status !== ProposalStatus.Processing);
        },
        // enabled: !!trnApi?.isReady,
        refetchInterval: 60000,
    });
}
