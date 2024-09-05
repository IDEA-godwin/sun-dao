import {
  lisk, liskSepolia
} from 'wagmi/chains';
import {
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';

export const config = getDefaultConfig({
  appName: 'Sun Dao App',
  projectId: "d9e1d6f6b250eda2e49797be82caf01d",
  chains: [lisk, liskSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});