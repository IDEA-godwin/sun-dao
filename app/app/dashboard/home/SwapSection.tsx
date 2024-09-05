'use client';

import ConnectWalletSection from "@/components/App/ConnectWalletSection";
import TokenSelect from "@/components/App/TokenSelect";
import Button from "@/components/Button";
import { abi, ContractAddress } from "@/utils/contractDetails";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAccount, useWriteContract } from "wagmi";

export default function SwapSection() {
  const [depositTokenValue, setDepositTokenValue] = useState<string>('');
  const [isDepositing, setIsDepositing] = useState<boolean>(false);
  const { isConnected, address } = useAccount();
  const { writeContractAsync } = useWriteContract()

  const handleDeposit = async () => {
    if (depositTokenValue === '') {
      toast.error('Please enter the amount to deposit');
      return;
    }
    setIsDepositing(true);
    const data = await writeContractAsync({
      address: ContractAddress,
      abi,
      functionName: 'deposit',
      args: [depositTokenValue, address],
    })

    if (data) {
      toast.success("You've successfully deposited into the DAO. Check your wallet for the our tokens");
      setIsDepositing(false);
    }
  }

  const handleMintNFT = async () => {
  }


  return (
    <section>
      <div className="w-full flex items-center justify-around gap-3">
        <div className="flex gap-3 justify-between">
          <TokenSelect tokens={["USDT"]} />
          <input placeholder="0.0" min={0} type="number" className="w-full h-12 bg-transparent text-white text-lg font-semibold rounded-lg p-4 focus:outline-none border border-primaryColor" value={depositTokenValue} onChange={e => setDepositTokenValue(e.target.value)} />
        </div>
        {/* <IoMdSwap size={25} />
        <div className="flex gap-3">
          <TokenSelect tokens={["SLC"]} />
          <input placeholder="0.0" className="w-full h-12 bg-transparent text-white text-lg font-semibold rounded-lg p-4 focus:outline-none border border-primaryColor" value={toToken} onChange={e => setToToken(e.target.value)} />
        </div> */}
      </div>
      <div className="flex justify-center my-5">
        {
          isConnected ?
            <Button onClick={handleDeposit} variant={!isDepositing}>{isDepositing ? "Depositing" : "Deposit"}</Button>
            :
            <ConnectWalletSection />
        }
      </div>
    </section>
  )
}
