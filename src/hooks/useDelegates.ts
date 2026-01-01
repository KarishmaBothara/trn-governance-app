
import { useQuery } from "@tanstack/react-query";

export function useDelegates() {

    return useQuery({
        queryKey: ["trnDelegates"],
        queryFn: async (): Promise<any | undefined> => {
            const response = await fetch(`/api/delegates`, {
                method: "GET"
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (!data) return [];
            const { delegateInfo } = data;
            return delegateInfo
        },
        // enabled: !!trnApi?.isReady,
        refetchInterval: 60000,
    });
}
