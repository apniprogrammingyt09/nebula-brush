import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, Zap, ImageIcon } from "lucide-react"
import { ParallaxContainer, ParallaxLayer } from "@/components/parallax"

export default function Home() {
  return (
    <div className="bg-black">

      {/* Hero Section with Parallax */}
      <ParallaxContainer className="relative h-[100vh] overflow-hidden">
        <ParallaxLayer speed={0.2} className="z-0">
          <div className="absolute inset-0 space-bg opacity-50"></div>
        </ParallaxLayer>

        <div className="container relative z-20 flex h-full flex-col items-center justify-center">
          <div className="animate-float space-y-4">
            <h1 className="glow-text text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Nebula Brush
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-white/70">
              Transform your words into stunning nebula images with our AI-powered text-to-image generator
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="nebula" size="lg">
              <Link
                href="/generate"
                className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-yellow-500/20 transition-all hover:shadow-yellow-500/40 hover:-translate-y-1"
              >
                Start Creating
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </ParallaxContainer>

      {/* Features Section with Parallax */}
      <ParallaxContainer className="relative py-24">
        <ParallaxLayer speed={0.3} className="z-0">
          <div className="absolute inset-0 space-bg opacity-30"></div>
        </ParallaxLayer>

        <div className="container relative z-10">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="nebula-card rounded-lg p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/20">
                <Sparkles className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">AI-Powered</h3>
              <p className="text-white/70">
                Cutting-edge AI technology transforms your text descriptions into stunning nebula images
              </p>
            </div>
            <div className="nebula-card rounded-lg p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/20">
                <Zap className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">Fast Generation</h3>
              <p className="text-white/70">
                Get your nebula images in seconds, no waiting around for complex rendering
              </p>
            </div>
            <div className="nebula-card rounded-lg p-6 transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/20">
                <ImageIcon className="h-6 w-6 text-yellow-400" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">High Quality</h3>
              <p className="text-white/70">Beautiful, high-resolution nebula images perfect for creative projects</p>
            </div>
          </div>
        </div>
      </ParallaxContainer>

      {/* Image Showcase with Parallax */}
      <ParallaxContainer className="relative overflow-hidden py-24">
        <ParallaxLayer speed={0.4} className="z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        </ParallaxLayer>

        <div className="container relative z-10">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Stunning Creations
            </span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group overflow-hidden rounded-lg">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={`/nebula-${item}.jpg`} // Use dynamic image paths
                    alt={`Nebula example ${item}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-lg font-bold">Cosmic Wonder #{item}</h3>
                    <p className="text-sm text-white/70">Created with Nebula Brush</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ParallaxContainer>

      {/* CTA Section with Parallax */}
      <ParallaxContainer className="relative py-24">
        <ParallaxLayer speed={0.2} className="z-0">
          <div className="absolute inset-0 space-bg opacity-40"></div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.5} direction="down" className="z-0">
          <div className="absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-gray-500/10 blur-3xl"></div>
        </ParallaxLayer>

        <div className="container relative z-10">
          <div className="nebula-card mx-auto max-w-4xl rounded-lg p-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Ready to create your own nebula?</h2>
            <p className="mb-8 text-lg text-white/70">
              Start generating beautiful cosmic art with just a text description
            </p>
            <Button asChild variant="nebula" size="lg">
              <Link
                href="/generate"
                className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-yellow-500/20 transition-all hover:shadow-yellow-500/40 hover:-translate-y-1"
              >
                Create Now
              </Link>
            </Button>
          </div>
        </div>
      </ParallaxContainer>
    </div>
  )
}

