import { http, createConfig } from "wagmi";
import { mantleTestnet } from "wagmi/chains";

export const config = createConfig({
  chains: [mantleTestnet],
  transports: {
    [mantleTestnet.id]: http(),
  },
});
