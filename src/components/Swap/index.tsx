import React,{useState} from 'react'
import { purchaseTokens,calTokenAmount } from '@/lib/presale'
import { toast } from 'react-toastify';
const explorerBaseUrl = "https://sepolia.basescan.org/tx/";


export default function Swap() {
    const [amount,setAmount]=useState("")
    const [treusd,setTreUsd]=useState("")
    const [isLoading, setLoading] = useState<boolean>(false);

    const swap=async()=>{
         setLoading(true)
       try{   
           const response= await purchaseTokens(amount)
           setLoading(false)
           const fullUrl = `${explorerBaseUrl}${response}`;
           toast.success(`Transaction successfull,${fullUrl}`)  
       }catch(e:any){
           setLoading(false)
           toast.error(e.message)
       }
    }

    const handleTREUSDChange = async (value: string) => {
      setTreUsd(value);
  
      if (value) {
        try {
          const usdcAmount = await calTokenAmount(value);
          setAmount(usdcAmount);
        } catch (e: any) {
          console.error(e.message);
        }
      } else {
        setAmount("");
      }
    };
  

  return (
    <div className='w-[25%] border-[2px]  flex flex-col items-center py-8 rounded-lg border-[#4B0082] bg-[#0A0A23E6] space-y-4 '>
          <h5 className='font-extrabold text-3xl text-center w-[90%] leading-[1.2] '>Swap USDC for TREUSD</h5>

          <div className='flex flex-col items-center w-full space-y-4 px-4'>
               <div className='flex flex-col items-center space-y-2 w-full'> 
                     <h5>USDC Amount</h5>
                     <input
                      placeholder='Enter USDC amount' 
                      type={"number"}
                      className="w-full py-2 px-4  border-[#4B0082] border bg-[#121232]"
                      value={amount}
                      onChange={(e)=>setAmount(e.target.value)}
                      />
                 
               </div>
               <div className='flex flex-col items-center space-y-2 w-full'> 
                     <h5>TREUSD Amount</h5>
                     <input 
                        placeholder='TREUSD will auto-calculate' 
                        type={"number"}
                        className="w-full py-2 px-4  border-[#4B0082] border bg-[#121232]"
                        value={treusd}
                        onChange={(e) => handleTREUSDChange(e.target.value)}
                     />      
               </div>

                 <button 
                     className={`bg-[#4B0082] py-2 px-4 rounded-lg font-semibold text-lg transition duration-300 ease-in-out ${
                      isLoading ? 'animate-pulse opacity-75 cursor-not-allowed' : ''
                    }`}
                  onClick={()=>swap()}>
                  Swap
              </button>

          </div>
    </div>
  )
}
