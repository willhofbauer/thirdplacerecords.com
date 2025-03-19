// app/releases/page.tsx
import Link from "next/link";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Third Place Records - Releases",
  description: "Releases from Third Place Records",
};

export default function Releases() {
  // Copy your existing release content from the current home page
  // This is a simplified example - you'll need to copy over your actual content
  return (
    <main className="container px-4 mx-auto">
      <Head>
        <title>Third Place Records - Releases</title>
      </Head>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Copy your existing release cards here from the current page.tsx */}
        {/* Example structure: */}
        <Link
          href="https://thirdplacerecords.bandcamp.com/album/noisome-pools-ep"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="bg-white bg-opacity-50 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
            <img
              src="https://f4.bcbits.com/img/a0936687796_16.jpg"
              alt="Noisome Pools EP by schuttle"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold">Noisome Pools EP</h3>
              <p className="text-gray-700">schuttle</p>
            </div>
          </div>
        </Link>
        {/* Add more release cards as in your current home page */}
      </div>
    </main>
  );
}
