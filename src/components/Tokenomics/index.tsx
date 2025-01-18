import React from 'react'

export default function Tokenomics() {
  return (
       <div className='w-[75%] border-[2px]  px-8 flex flex-col items-center py-8 rounded-lg border-[#4B0082] bg-[#0A0A23E6] space-y-4  max-w-[800px]'>
            <h5 className='text-3xl font-bold'>TREUSD Presale</h5>
            <p className='text-lg text-center'> The TREUSD presale is your exclusive opportunity to acquire TREUSD tokens before they hit the open market. TREUSD is a stable, algorithmically-backed token designed to provide liquidity and stability in the decentralized financial ecosystem.</p>

            <div className="bg-[#0A0A23] text-white py-10 px-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Tokenomics</h2>
                <ul className="list-disc space-y-2 mx-auto pl-8 text-center">
                    <li>
                    <span className="font-bold">Total Supply:</span> Unlimited TREUSD
                    </li>
                    <li>
                    <span className="font-bold">Presale Allocation:</span> Unlimited TREUSD
                    </li>
                    <li>
                    <span className="font-bold">Price:</span> 1 USDC = 1 TREUSD
                    </li>
                    <li>
                    <span className="font-bold">Liquidity Pool Allocation:</span> 1 TREUSD / 1 USDC
                    </li>
                    <li>
                    Burning mechanism on services creates scarcity
                    </li>
                    <li>
                    TREUSD is spent on API calls, tokenization deal submissions, token trades, and other fees. TREUSD is burned when spent on these activities.
                    </li>
                </ul>
                <p className="text-center mt-6 text-sm">
                    Participate now to secure your TREUSD tokens and be part of a revolutionary financial ecosystem. The presale will run until <span className="font-bold">March 1st, 2025</span>.
                </p>
            </div>

       </div>
  )
}
