import { useFutureverseSigner } from "@futureverse/auth-ui";
import { useConnectors } from "wagmi";

export function useSigner() {
  const connectors = useConnectors();
  const metamaskConnector = connectors.find((c) => c.name === "MetaMask");

  const result = useFutureverseSigner({ connector: metamaskConnector });
  console.log("Result::", result);

  return result;
}
