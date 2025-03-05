import Link from "next/link"
import { SpaceIcon as Galaxy } from "lucide-react"


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-900/20 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
        <img src="/logo.png" alt="" className="h-12" />
          <span className="text-xl font-bold text-white">Nebula Brush</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-white/70 transition-colors hover:text-yellow-400">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-white/70 transition-colors hover:text-yellow-400">
            About
          </Link>
          <Link
            href="/generate"
            className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-yellow-500/20 transition-all hover:shadow-yellow-500/40 hover:-translate-y-1"
          >
            Generate
          </Link>
        </nav>
      </div>
    </header>
  )
}

