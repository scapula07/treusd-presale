import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
  baseSepolia
  
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { ToastContainer, toast } from 'react-toastify';


const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: 'treusd',
  projectId: '83f8ff3dec9279cb682ad33cee57ad79',
  chains: [mainnet, polygon, optimism, arbitrum, base,sepolia,baseSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export default function App({ Component, pageProps }: AppProps) {
  return(
   <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
            <Component {...pageProps} />
            <ToastContainer />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
