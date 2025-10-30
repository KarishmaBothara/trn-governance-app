
import { useQuery } from "@tanstack/react-query";

export function useVotes(pId) {

    return useQuery({
        queryKey: ["trnVotes"],
        queryFn: async (): Promise<any | undefined> => {
            const response = await fetch(`/api/votes?pId=${pId}`, {
                method: "GET"
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (!data) return [];
            console.log("***************");
            console.log("Data:", data);
            const { voteInfo } = data;
            return voteInfo
        },
        // enabled: !!trnApi?.isReady,
        refetchInterval: 60000,
    });
}
