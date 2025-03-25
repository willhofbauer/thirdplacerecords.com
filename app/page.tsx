import Link from "next/link";
import Head from "next/head";
import { Metadata } from "next";
import SubscribeForm from "./components/SubscribeForm";
import { getReleases, Release } from "./releases/data";
import ReleaseScroller from "./components/ReleaseScroller";

const releases = getReleases();

export const metadata: Metadata = {
  title: "Third Place Records - Home",
  description: "Record label run by Will Hofbauer",
};

export default function Home() {
  // Sample latest releases data - replace with your actual data
  const latestReleases: Release[] = releases.slice(0, 6);

  return (
    <main className="container px-4 mx-auto">
      <Head>
        <title>Third Place Records - Home</title>
      </Head>

      {/* Latest Releases Section with Horizontal Scroll */}
      <section className="relative mb-4 md:mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Latest Releases</h2>
        <ReleaseScroller releases={latestReleases} />
      </section>

      {/* Subscribe Form */}
      <section className="mb-12">
        <SubscribeForm />
      </section>
    </main>
  );
}
