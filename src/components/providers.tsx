"use client";
import * as React from "react";
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { createConfig, WagmiProvider, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { createClient } from "viem";

const wagmiConfig = createConfig({
  chains: [sepolia],
  connectors: [injected()],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <RainbowKitProvider chains={[sepolia]} theme={darkTheme()}>
        {children}
      </RainbowKitProvider>
    </WagmiProvider>
  );
}
