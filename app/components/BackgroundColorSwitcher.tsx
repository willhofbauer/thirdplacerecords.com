"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
// Array of pastel background colors
const pastelColors = [
  "bg-[#FFE5E5]", // Pastel pink
  "bg-[#E5FFFF]", // Pastel cyan
  "bg-[#E5FFE5]", // Pastel green
  "bg-[#FFE5FF]", // Pastel magenta
  "bg-[#FFFFE5]", // Pastel yellow
  "bg-[#E5E5FF]", // Pastel blue
  "bg-[#F5E6CC]", // Pastel beige
  "bg-[#D7F9F8]", // Pastel teal
  "bg-[#F9E0F9]", // Pastel lavender
  "bg-[#E0F9E0]", // Pastel mint
]

export default function BackgroundColorSwitcher() {
  const location = usePathname()
  useEffect(() => {
    // Select a random pastel color
    const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)]

    // Apply the color to the body
    document.body.classList.add(randomColor)

    // Clean up function to remove the class when component unmounts
    return () => {
      document.body.classList.remove(randomColor)
    }
  }, [location]) // Empty dependency array means this runs once on mount

  return null // This component doesn't render anything visible
}

