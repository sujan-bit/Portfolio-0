'use client'

import { SplineScene } from "@/components/ui/splite";
import { Vortex } from "@/components/ui/vortex";

export function SplineSceneBasic() {
  return (
    <Vortex
      backgroundColor="black"
      rangeY={300}
      particleCount={500}
      baseHue={220}
      containerClassName="w-screen h-screen"
      className="w-full h-full flex items-center justify-between px-12 md:px-20"
    >
      <div className="flex-1 z-20 flex flex-col justify-center max-w-xl">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          I'm Sujan
        </h1>
        <p className="mt-6 text-neutral-300 text-lg md:text-xl max-w-lg">
          kizoku oni naru
        </p>
      </div>

      <div className="flex-1 relative z-20 h-full flex items-center justify-center">
        <div className="w-full h-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Vortex>
  )
}
