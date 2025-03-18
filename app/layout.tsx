import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Music, CloudIcon as SoundCloud } from "lucide-react"
import BackgroundColorSwitcher from "./components/BackgroundColorSwitcher"

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
    apple: [{ url: "/apple-touch-icon.png" }],
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
              {/* Old URLs commented out:
              src="https://qiumoxf8shroy7uq.public.blob.vercel-storage.com/website-logo-k7yjoNvspPHaHzio482xFfpmrgu3Jv.png"
              src="https://raw.githubusercontent.com/willhofbauer/thirdplacerecords.com/blob/main/public/website-logo.png"
              */}
              alt="Third Place Records Logo"
              width={260}
              height={130}
              priority
              className="h-auto mx-auto my-0"
            />
          </Link> 
        </header>

        {/* Main content area */}
        <div className="flex-grow mt-0 max-w-900px mx-auto">{children}</div>

        {/* Footer */}
        <footer className="mt-auto border-t py-8 bg-white bg-opacity-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-6">
              {/* Navigation links */}
             {/* <nav className="flex space-x-6">
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  Home
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  Contact
                </Link>
              </nav> */}

              {/* Social media links */}
              <div className="flex space-x-6">
                <a
                  href="https://soundcloud.com/thirdplacerecords"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="SoundCloud"
                >
                  <SoundCloud className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/thirdplacerecords/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://thirdplacerecords.bandcamp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label="Bandcamp"
                >
                  <Music className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}


