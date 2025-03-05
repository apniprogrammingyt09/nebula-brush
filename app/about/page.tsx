import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Mail, ArrowRight } from "lucide-react"
import { ParallaxContainer, ParallaxLayer } from "@/components/parallax"

export default function AboutPage() {
  return (
    <div className="bg-black">
      <ParallaxContainer className="relative min-h-screen">
        <ParallaxLayer speed={0.2} className="z-0">
          <div className="absolute inset-0 space-bg opacity-30"></div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.4} direction="down" className="z-0">
          <div className="absolute top-1/4 right-1/4 h-48 w-48 rounded-full bg-orange-500/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 h-64 w-64 rounded-full bg-gray-500/10 blur-3xl"></div>
        </ParallaxLayer>

        <div className="container relative z-10 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-6 text-center text-4xl font-bold text-white md:text-5xl">
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                About Nebula Brush
              </span>
            </h1>

            <div className="nebula-card mb-16 rounded-lg p-8">
              <p className="mb-6 text-lg text-white/80">
                Nebula Brush is an innovative text-to-image generator specifically designed to create stunning nebula
                and space-themed images. Our tool uses advanced AI to transform your text descriptions into beautiful
                cosmic art.
              </p>
              <p className="mb-6 text-lg text-white/80">
                Whether you're a digital artist, space enthusiast, or just looking for unique visuals, Nebula Brush
                provides an easy way to generate custom nebula images for your projects.
              </p>
              <p className="text-lg text-white/80">
                Our mission is to make the beauty of the cosmos accessible to everyone through the power of AI and
                creative technology.
              </p>
            </div>

            <h2 className="mb-8 text-center text-3xl font-bold text-white">
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Meet the Developer
              </span>
            </h2>

            <div className="nebula-card mb-12 flex flex-col items-center rounded-lg p-8 md:flex-row md:items-start md:gap-8">
              <div className="mb-6 md:mb-0">
                <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-yellow-500/30">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Shivam Patel"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="mb-2 text-2xl font-bold text-white">Shivam Patel</h3>
                <p className="mb-4 text-yellow-400">Python Developer</p>

                <p className="mb-6 text-white/80">
                Shivam Patel is a Python developer specializing in AI/ML at KodRish and a Computer Science & Data Science student at IES IPS Academy, Indore. He is passionate about building intelligent solutions and exploring advancements in machine learning and artificial intelligence. 🚀
                </p>

                <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                  <Link
                    href="https://github.com"
                    className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                  <Link
                    href="https://twitter.com"
                    className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
                  >
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </Link>
                  <Link
                    href="mailto:contact@example.com"
                    className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
                  >
                    <Mail className="h-4 w-4" />
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button asChild variant="nebula" size="lg">
                <Link href="/generate" className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-yellow-500/20 transition-all hover:shadow-yellow-500/40 hover:-translate-y-1">
                  Try Nebula Brush
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </ParallaxContainer>
    </div>
  )
}

