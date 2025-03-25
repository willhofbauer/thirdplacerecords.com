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
import { Header } from "./components/Header"
import { Navigation } from "./components/Navigation"
import { Footer } from "./components/Footer"

// Initialize the Inter font
const inter = Inter({ subsets: ["latin"] })

// Define metadata for the application
export const metadata: Metadata = {
  title: "Third Place Records",
  description: "Record label run by Will Hofbauer",
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
        <BackgroundColorSwitcher />

        <Header />

        <Navigation />

        <main className="w-full max-w-3xl mx-auto px-4 py-6 md:px-6 md:py-8">{children}</main>

        <Footer />
      </body>
    </html>
  )
}


