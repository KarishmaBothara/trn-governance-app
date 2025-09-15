
import { FutureverseAuthProvider } from "@futureverse/auth-react";
import {
  type ThemeConfig,
  AuthUiProvider,
  DefaultTheme,
} from "@futureverse/auth-ui";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";

import { authClient, queryClient, wagmiConfig } from "./config";
import { TrnApiProvider } from "@futureverse/transact-react";
// import {WalletProvider} from "@/context/WalletContext";
// import { AssetRegisterProvider } from "./AssetRegisterProvider";

// This is a demo application
const customThemeConfig: ThemeConfig = {
  ...DefaultTheme,
  showCloseButton: true,
  defaultAuthOption: "web3",
  images: {
    // logo: '/images/logo.svg',
    background:
      "https://t4.ftcdn.net/jpg/02/10/45/95/360_F_210459536_XmLDEcKq2DpeNLVmheuWeu9NM9aGKnih.jpg",
    // 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
  titleFont: {
    fontName: "Doto",
    fontUrl:
      "https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Sixtyfour+Convergence&display=swap",
  },
};

export function QueryProvider({ children }: React.PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <TrnApiProvider customProviderUrl="wss://porcini.rootnet.app/ws">
        <AuthUiProvider
          wagmiConfig={wagmiConfig}
          themeConfig={customThemeConfig}
          authClient={authClient}
          legalLinks={{
            privacyPolicyUrl: "https://futureverse.com/legal/privacy-policy",
            termsOfServiceUrl: "https://futureverse.com/legal/terms-of-use",
          }}
        >
          <FutureverseAuthProvider authClient={authClient}>{children}
            {/*<WalletProvider key="wallet-provider"></WalletProvider>*/}
             {/*<AssetRegisterProvider>{children}</AssetRegisterProvider>*/}
          </FutureverseAuthProvider>
        </AuthUiProvider>
      </TrnApiProvider>
    </QueryClientProvider>
  );
}
