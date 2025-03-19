import Link from "next/link"
import ReleaseCard from "./components/ReleaseCard"
import { getReleases } from "./data"

const releases = getReleases();

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <div className="mb-4 text-center">
        <Link
          href="/contact"
          className="inline-block px-6 py-3 text-lg font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
        >
          Contact
        </Link>
      </div>

      <section className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {releases.map((release, index) => (
            <ReleaseCard key={index} release={release} index={index} />
          ))}
        </div>
      </section>
    </main>
  )
}

