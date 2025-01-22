import Swap from "@/components/Swap";
import Tokenomics from "@/components/Tokenomics";
import DAO from "@/components/DAO";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <div className="w-full flex flex-col text-white py-10 px-4">
          <ConnectButton  />
         <div className="w-full flex justify-center py-10">
              <Swap />
         </div>
         <div className="w-full flex flex-col items-center py-10 space-y-10">
             <Tokenomics />  
             <DAO/>
         </div>
    </div>
  );
}
