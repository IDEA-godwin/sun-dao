'use client'

import { ConnectBtn } from "@/components/App/ConnectButton";
import { useState } from "react"
import { useAccount } from "wagmi";

export default function CreateSolarDAO() {
  const [daoName, setDaoName] = useState<string>('');
  const [daoTarget, setDaoTarget] = useState<string>('');
  const [communityLink, setCommunintyLink] = useState<string>('');
  const [destinationAddress, setDestinationAddress] = useState<string>('');
  const [description, setDaoDescription] = useState<string>('');

  const { isConnected } = useAccount();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ daoName, daoTarget, communityLink, destinationAddress, description });
  }

  return (
    <form onSubmit={handleOnSubmit} className="w-4/5 flex flex-col items-center gap-4">
      <input placeholder="Enter your DAO name" className="bg-transparent w-full p-3 rounded border border-secondaryColor" required value={daoName} onChange={(e) => setDaoName(e.target.value)} />
      <input placeholder="Enter your DAO target amount" className="bg-transparent w-full p-3 rounded border border-secondaryColor" type="number" min={0} required value={daoTarget} onChange={(e) => setDaoTarget(e.target.value)} />
      <input placeholder="Enter your DAO Community link" className="bg-transparent w-full p-3 rounded border border-secondaryColor" type="url" required value={communityLink} onChange={(e) => setCommunintyLink(e.target.value)} />
      <input placeholder="Enter the destination address" className="bg-transparent w-full p-3 rounded border border-secondaryColor" required value={destinationAddress} onChange={(e) => setDestinationAddress(e.target.value)} />
      <textarea placeholder="Enter DAO Description" required className="bg-transparent w-full p-3 rounded border border-secondaryColor" value={description} onChange={(e) => setDaoDescription(e.target.value)}></textarea>
      {
        isConnected ?
          <button type="submit" className="bg-primaryColor text-white p-3 rounded">Create DAO</button> :
          <ConnectBtn fill={true}/>
      }
    </form>
  )
}
