import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

// set up chains & provider
const { chains, provider } = configureChains(
  [chain.mainnet],
  [publicProvider()]
);

// set up default wallets: rainbow, coinbase, mm, wc
const { connectors } = getDefaultWallets({
  appName: "RainbowKit Template",
  chains,
});

const wagmiClient = createClient({
  connectors,
  provider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
