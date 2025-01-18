import React,{useState} from 'react'
import { purchaseTokens } from '@/lib/presale'
import { toast } from 'react-toastify';

export default function Swap() {
    const [amount,setAmount]=useState("")
    const [isLoading, setLoading] = useState<boolean>(false);

    const swap=async()=>{
      console.log("go")
          setLoading(true)
       try{
          
            await purchaseTokens(amount)
            //  toast.success("Swap successfull!")
            setLoading(false)
       }catch(e){
           setLoading(false)
       }
    }

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
                       className="w-full py-2 px-4  border-[#4B0082] border bg-[#121232] "
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
