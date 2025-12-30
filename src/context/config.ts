// import { AuthFlowType } from "@futureverse/auth-core";
import { FutureverseAuthClient } from "@futureverse/auth-react/auth";
import { porcini } from "@futureverse/auth-ui/wagmi";
import { createWagmiConfig } from "@futureverse/wagmi-connectors";
import { QueryClient } from "@tanstack/react-query";
import { mainnet, root, rootPorcini, sepolia } from "viem/chains";
import { cookieStorage, createStorage } from "wagmi";

const clientId = 'RjPFUvXxJ3cTnNJJwJ2YX'; //import.meta.env.VITE_CLIENT_ID;
// const walletConnectProjectId =
  // import.meta.env.VITE_WALLET_CONNECTOR_PROJECT_ID ||
  // "8b9b9cf8501efbce91cd5a15157c01c4";
// const xamanAPIKey = "5376fa18-f6d8-45d6-98df-cfdbc6b3b62b";
  // import.meta.env.VITE_XAMAN_API_KEY || "5376fa18-f6d8-45d6-98df-cfdbc6b3b62b";
const redirectUri = 'http://localhost:3000/';//import.meta.env.VITE_REDIRECT_URI;
const signinFlow = 'redirect';
  //   import.meta.env.VITE_SIGN_IN_FLOW as
  // | AuthFlowType
  // | undefined;

const authorizationURL = "https://login.passonline.cloud";
const signerURL = "https://signer.passonline.cloud";
const chainId = porcini.id;

export const ROOT_DECIMAL = 6;

export const authClient = new FutureverseAuthClient({
  authorizationURL,
  signerURL,
  clientId: clientId || "RjPFUvXxJ3cTnNJJwJ2YX",
  redirectUri: redirectUri || "http://localhost:3000",
  signInFlow: signinFlow || "redirect",
  postLogoutRedirectUri: "http://localhost:3000",
  hostWeb3SigningDomain: "localhost:3000",
  chainId,
});

export const queryClient = new QueryClient();

export const wagmiConfig = createWagmiConfig({
  authClient,
  ssr: true,
  chains: [mainnet, sepolia, root, rootPorcini],
  storage: createStorage({
    storage: cookieStorage,
  }),
  metamaskDappMetadata: {
    name: "Governance App",
    url: "http://localhost:3000",
  },
});
