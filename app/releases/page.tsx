// app/releases/page.tsx
import Link from "next/link";
import Head from "next/head";
import { Metadata } from "next";
import { getReleases } from "./data";
import ReleaseCard from "../components/ReleaseCard";

const releases = getReleases();

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

      <section className="mb-12 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {releases.map((release, index) => (
            <ReleaseCard key={index} release={release} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
