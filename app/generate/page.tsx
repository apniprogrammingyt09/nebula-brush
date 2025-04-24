"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { ParallaxContainer, ParallaxLayer } from "@/components/parallax"

export default function GeneratePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div style={{ backgroundColor: "rgb(12, 15, 24)" }}>
      <ParallaxContainer className="relative min-h-screen">
        <ParallaxLayer speed={0.2} className="z-0">
          <div className="absolute inset-0 space-bg opacity-30"></div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.4} direction="down" className="z-0">
          <div className="absolute top-1/3 left-1/5 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/5 h-48 w-48 rounded-full bg-gray-500/10 blur-3xl"></div>
        </ParallaxLayer>

        <div className="container relative z-10 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-center text-4xl font-bold text-white md:text-5xl">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Generate Nebula Images
              </span>
            </h1>

            <p className="mb-12 text-center text-lg text-white/70">
              Describe the nebula you want to create, and our AI will generate it for you.
            </p>

            {/* Hugging Face Space iframe with top & bottom 50px hidden */}
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden border border-orange-500/20 shadow-lg shadow-orange-500/10">
              {!isLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
                  <Sparkles className="h-12 w-12 animate-spin text-orange-400" />
                  <p className="mt-4 text-white">Loading AI Generator...</p>
                </div>
              )}

              <div className="relative w-full h-full overflow-hidden" style={{ clipPath: "inset(50px 0px 50px 0px)" }}>
                <iframe
                  src="https://black-forest-labs-flux-1-dev.hf.space"
                  width="100%"
                  height="700px"
                  className="relative w-full h-full overflow-hidden"
                  style={{ border: "none" }}
                  scrolling="no"
                  allowFullScreen
                  onLoad={() => setIsLoaded(true)}
                />
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <Button variant="nebula" onClick={() => window.location.reload()}>
                Reload Generator
              </Button>
            </div>
          </div>
        </div>
      </ParallaxContainer>
    </div>
  )
}

