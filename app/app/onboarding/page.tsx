import { Metadata } from "next";
import CreateSolarDAO from "./CreateSolarDAO";
import JoinSolarDAO from "./JoinSolarDAO";

export const metadata: Metadata = {
  title: "Onboarding | Sun Dao",
  description: "Onboarding",
};

export default function page() {
  return (
    <main className="w-screen h-screen text-black flex items-center justify-center">
      <div className="divide-x-2 divide-yellow-500 h-4/5 w-4/5 rounded-lg bg-slate-300 flex">
        <div className="w-1/2 p-4 flex items-center justify-center">
          <JoinSolarDAO />
        </div>
        <div className="w-1/2 p-4 flex items-center justify-center">
          <CreateSolarDAO />
        </div>
      </div>
    </main>
  )
}
