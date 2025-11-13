//
// import { useQuery } from "@tanstack/react-query";
//
// export function useProposalInfoFromId(id) {
//
//     return useQuery({
//         queryKey: ["trnProposalId"],
//         queryFn: async (): Promise<any | undefined> => {
//             const response = await fetch(`/api/proposals?indexes=[${id}]`, {
//                 method: "GET"
//             });
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//
//             const data = await response.json();
//             if (!data) return [];
//             console.log("***************");
//             console.log("Data:", data);
//             const { proposalDBInfo } = data;
//             return proposalDBInfo[0];
//         },
//         // enabled: !!trnApi?.isReady,
//         refetchInterval: 60000,
//     });
// }
