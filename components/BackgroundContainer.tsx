import React from 'react'
import { Boxes } from './ui/background-boxes'
import { cn } from "@/lib/utils";
const BackgroundContainer = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className='relative w-full h-96 rounded-lg overflow-hidden bg-slate-900 flex flex-col items-center'>
            <div className='absolute inset-0 w-full h-full md:mt-6 lg:mt-4 bg-slate-900 [mask-image:radial-gradient(transparent, white)] pointer-events-none'>
                <Boxes />

                <h1 className={cn("md:text-4xl text-xl text-center text-white relative z-20")}>
                    Tailwind is Awesome
                </h1>
                <p className="text-center mt-2 text-neutral-300 relative z-20">
                    Framer motion is the best animation library ngl
                </p>
                {children}
            </div>
        </div>
    )
}

export default BackgroundContainer