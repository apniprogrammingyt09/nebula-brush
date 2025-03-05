import Link from "next/link"
import { SpaceIcon as Galaxy, Github, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-orange-900/20 bg-black/50 py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
        <img src="/logo.png" alt="" className="h-12" />
          <span className="text-sm font-medium text-white">Nebula Brush</span>
        </div>
        <p className="text-center text-sm text-white/60 md:text-left">
          © {new Date().getFullYear()} Nebula Brush. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com" className="text-white/60 hover:text-yellow-400">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://twitter.com" className="text-white/60 hover:text-yellow-400">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

