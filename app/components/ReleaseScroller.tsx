"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Release } from '../releases/data'

interface ReleaseScrollerProps {
    releases: Release[]
}

export default function ReleaseScroller({ releases }: ReleaseScrollerProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const handleScroll = (direction: "left" | "right") => {
        const container = scrollContainerRef.current
        if (container) {
            const scrollAmount = direction === "left" ? -200 : 200
            container.scrollLeft += scrollAmount
        }
    }

    return (
        <div className="relative">
            <button
                onClick={() => handleScroll("left")}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-red-300/80 text-black-800 rounded-full p-2 hover:bg-red-400/80 transition-colors"
                aria-label="Scroll left"
            >
                ←
            </button>
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide"
                style={{ scrollBehavior: "smooth" }}
            >
                {releases.map((release, index) => (
                    <Link
                        key={index}
                        href={release.bandcamp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-none w-36 sm:w-40 transform transition-all duration-300 hover:scale-105 hover:-rotate-2 hover:shadow-lg"
                    >
                        <div className="relative group">
                            <div className="aspect-square relative overflow-hidden rounded-lg shadow-md border-2 border-primary">
                                <Image
                                    src={release.imageUrl || "/placeholder.svg"}
                                    alt={release.title}
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="mt-1 sm:mt-2 text-xs">
                                <p className="font-bold text-black-800">{release.title}</p>
                                <p className="text-red-600">
                                    {release.releaseDate.slice(0, 4)}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <button
                onClick={() => handleScroll("right")}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-red-300/80 text-black-800 rounded-full p-2 hover:bg-red-400/80 transition-colors"
                aria-label="Scroll right"
            >
                →
            </button>
        </div>
    )
} 
