import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black w-full py-4 px-3 md:px-6 relative overflow-hidden">
      {/* Main content */}
      <div className="container mx-auto max-w-full relative z-10">
        {/* Logo section with absolutely positioned images */}
        <div className="relative flex flex-col justify-center items-center">
          {/* Pink K - absolutely positioned */}
          <div className="absolute left-0 md:left-10 top-2 md:top-4 z-20">
            <Image
              src="/pink-r.png"
              alt="Pink K"
              width={80}
              height={80}
              className="h-14 md:h-32 w-auto transform -rotate-12"
            />
          </div>

          {/* Center logo */}
          <div className="relative z-10 flex flex-col items-center">
            <Image src="/logoputih.png" alt="Logo" width={180} height={180} className="h-14 md:h-32 w-auto" />
          </div>

          {/* Retro TV - absolutely positioned */}
          <div className="absolute right-0 md:right-10 top-2 md:top-2 z-20">
            <Image
              src="/retro-tv.png"
              alt="Retro TV"
              width={80}
              height={80}
              className="h-14 md:h-32 w-auto transform rotate-6"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 my-3 md:my-4"></div>

        {/* Navigation and social - horizontal layout with smaller text */}
        <div className="flex flex-row justify-between items-center">
          {/* Navigation links - horizontal on all screens but smaller on mobile */}
          <nav className="flex flex-row space-x-2 md:space-x-6 items-center text-xs md:text-base">
            <Link href="#tagline" className="text-white hover:underline whitespace-nowrap">
              Home
            </Link>
            <Link href="#about" className="text-white hover:underline whitespace-nowrap">
              About
            </Link>
            <Link href="#project" className="text-white hover:underline whitespace-nowrap">
              Project
            </Link>
          </nav>

          {/* Social media icons - smaller on mobile */}
          <div className="flex space-x-2 md:space-x-4">
            <Link href="https://github.com/ramarhmn?tab=repositories" aria-label="GitHub">
              <div className="text-white hover:text-pink-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="md:w-6 md:h-6"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.17c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.045.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.117 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.432.372.815 1.102.815 2.222v3.293c0 .32.217.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
            </Link>
            <Link href="mailto:ramarahman38@gmail.com" aria-label="Email">
              <div className="text-white hover:text-pink-200">
                <Mail className="h-4 w-4 md:h-6 md:w-6" />
              </div>
            </Link>
            <Link href="https://www.instagram.com/ramarhmn/" aria-label="Instagram">
              <div className="text-white hover:text-pink-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="md:w-6 md:h-6"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
