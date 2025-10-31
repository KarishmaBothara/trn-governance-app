
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
            const { voteData } = data;
            return voteData
        },
        refetchInterval: 60000,
    });
}
