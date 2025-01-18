declare const window: any;
import { ethers, BrowserProvider } from "ethers";
import presaleAbi from "../abi/presale.json"
import tokenAbi from "../abi/token.json"

const presaleAddress = '0x45C11C474dfE647E6c9B2c759a6355BE7DB6AfF0';

// Initialize provider and signer lazily (to avoid immediate execution)
let provider: BrowserProvider | null = null;
let signer: ethers.JsonRpcSigner | null = null;

// Initialize the provider and signer (called only when needed)
async function initializeProviderAndSigner() {
  if (!provider || !signer) {
    provider = new BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
  }
}

async function getPresaleContract() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    await initializeProviderAndSigner();
    return new ethers.Contract(presaleAddress, presaleAbi, signer!);
  }

  export async function purchaseTokens(amount:string) {

    console.log('Deposit funded!');
    try{
        const contract = await getPresaleContract();
        const tx = await contract.purchaseTokens(parseFloat(amount), { gasLimit: 400000 });
        console.log('Deposit funded!',tx);
      }catch(e){
        console.log(e)
      }

}