import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import Image from "next/image"
import BackgroundColorSwitcher from "./components/BackgroundColorSwitcher"
import { SoundCloudIcon } from './components/icons/SoundCloudIcon'
import { InstagramIcon } from './components/icons/InstagramIcon'
import { BandcampIcon } from './components/icons/BandcampIcon'
import { DiscogsIcon } from './components/icons/DiscogsIcon'

// Initialize the Inter font
const inter = Inter({ subsets: ["latin"] })

// Define metadata for the application
export const metadata: Metadata = {
  title: "Third Place Records",
  description: "Record label run by Will Hofbauer",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  generator: 'v0.dev'
}

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Component to switch background color */}
        <BackgroundColorSwitcher />

        {/* Header with logo */}
        <header className="container mx-auto px-4 py-0">
          <Link href="/" className="block mx-auto w-fit hover:animate-wobble">
            <Image
              src="https://raw.githubusercontent.com/willhofbauer/thirdplacerecords.com/main/public/website-logo.png"
              alt="Third Place Records Logo"
              width={260}
              height={130}
              priority
              className="h-auto mx-auto my-0"
            />
          </Link>
        </header>

        {/* Add this new navigation section */}
        <nav className="container mx-auto flex justify-center space-x-4 mt-4 mb-8">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-full bg-blue-500 px-8 font-medium text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Home
          </Link>
          <Link
            href="/releases"
            className="inline-flex h-10 items-center justify-center rounded-full bg-blue-500 px-8 font-medium text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Releases
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-full bg-blue-500 px-8 font-medium text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Contact
          </Link>
        </nav>

        {/* Main content area */}
        <main className="w-full max-w-3xl mx-auto px-4 py-6 md:px-6 md:py-8">{children}</main>

        {/* Footer */}
        <footer className="mt-auto border-t py-8 bg-white bg-opacity-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-6">
              {/* Social media links */}
              <div className="flex space-x-6">
                <a
                  href="https://soundcloud.com/thirdplacerecords"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="SoundCloud"
                >
                  <SoundCloudIcon className="fill-current" />
                </a>
                <a
                  href="https://www.instagram.com/thirdplacerecords/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="fill-current" />
                </a>
                <a
                  href="https://thirdplacerecords.bandcamp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="Bandcamp"
                >
                  <BandcampIcon />
                </a>
                <a
                  href="https://www.discogs.com/label/1583957-Third-Place-Records"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="Discogs"
                >
                  <DiscogsIcon className="fill-current" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}


