// ============================================
// Keep your thirdweb version too if needed
import { defineChain as defineThirdwebChain } from "thirdweb";
import { defineChain } from "viem";
import * as chains from "viem/chains";

// Export the standard liskSepolia for scaffold-eth
export const liskSepolia = defineChain({
  id: 4202,
  name: "Lisk Sepolia Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Sepolia Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.sepolia-api.lisk.com"],
    },
    public: {
      http: [],
      webSocket: undefined,
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://sepolia-blockscout.lisk.com",
    },
  },
  testnet: true,
  network: "",
});

export const liskSepoliaThirdweb = defineThirdwebChain({
  id: 4202,
  name: "Lisk Sepolia",
  nativeCurrency: {
    name: "Sepolia Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpc: "https://rpc.sepolia-api.lisk.com",
  blockExplorers: [
    {
      name: "Blockscout",
      url: "https://sepolia-blockscout.lisk.com",
    },
  ],
  testnet: true,
});

// Re-export all viem chains for convenience
export { chains };
