"use client"

import BackgroundContainer from "@/components/BackgroundContainer";
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo";
import { CanvasRevealEffectDemo } from "@/components/CavanRevealEffectDemo"; 
export default function Home() {
  return (
    <div className="">
      <main className="">
        <BackgroundContainer>
          <div className="h-50"></div>
        </BackgroundContainer>
        <CanvasRevealEffectDemo />
        < CardHoverEffectDemo/>
       </main>
    </div>
  );
}
