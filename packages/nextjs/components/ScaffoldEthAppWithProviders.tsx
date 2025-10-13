"use client";

import { useEffect, useState } from "react";
import { BlockieAvatar } from "../components/scaffold-eth";
import { ProgressBar } from "../components/scaffold-eth/ProgressBar";
import { wagmiConfig } from "../services/web3/wagmiConfig";
import { appChains } from "../services/web3/wagmiConnectors";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import { useTheme } from "next-themes";
import { ThirdwebProvider } from "thirdweb/react";
import { WagmiConfig } from "wagmi";

export const ScaffoldEthAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThirdwebProvider>
      <WagmiConfig config={wagmiConfig}>
        <ProgressBar />
        <RainbowKitProvider
          chains={appChains.chains}
          avatar={BlockieAvatar}
          theme={mounted ? (isDarkMode ? darkTheme() : lightTheme()) : lightTheme()}
        >
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
    </ThirdwebProvider>
  );
};
