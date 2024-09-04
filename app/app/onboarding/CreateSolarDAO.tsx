'use client'

import { useState } from "react"

export default function CreateSolarDAO() {
  const [daoName, setDaoName] = useState<string>('');
  const [daoTarget, setDaoTarget] = useState<string>('');
  const [communityLink, setCommunintyLink] = useState<string>('');
  const [destinationAddress, setDestinationAddress] = useState<string>('');
  const [description, setDaoDescription] = useState<string>('');

  return (
    <form className="w-4/5 flex flex-col gap-4">
      <input className="bg-transparent w-full p-3 rounded border border-secondaryColor" value={daoName} onChange={e => setDaoName(e.target.value)}/>
      <input className="bg-transparent w-full p-3 rounded border border-secondaryColor" value={daoTarget} onChange={e => setDaoTarget(e.target.value)}/>
      <textarea name="" id=""></textarea>
    </form>
  )
}
