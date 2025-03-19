import Link from "next/link";
import Head from "next/head";
import { Metadata } from "next";
import SubscribeForm from "./components/SubscribeForm";

export const metadata: Metadata = {
  title: "Third Place Records - Home",
  description: "Record label run by Will Hofbauer",
};

export default function Home() {
  // Sample latest releases data - replace with your actual data
  const latestReleases = [
    {
      title: "Noisome Pools EP",
      artist: "schuttle",
      imageUrl: "https://f4.bcbits.com/img/a0936687796_16.jpg",
      link: "https://thirdplacerecords.bandcamp.com/album/noisome-pools-ep",
    },
    // Add more releases as needed
  ];

  return (
    <main className="container px-4 mx-auto">
      <Head>
        <title>Third Place Records - Home</title>
      </Head>

      {/* Latest Releases Section with Horizontal Scroll */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Latest Releases</h2>
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 min-w-max">
            {latestReleases.map((release, index) => (
              <Link key={index} href={release.link} target="_blank" rel="noopener noreferrer" className="block min-w-[250px]">
                <div className="bg-white bg-opacity-50 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
                  <img
                    src={release.imageUrl}
                    alt={`${release.title} by ${release.artist}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold">{release.title}</h3>
                    <p className="text-gray-700">{release.artist}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Form */}
      <section className="mb-12">
        <SubscribeForm />
      </section>

      {/* Label Information */}
      <section className="text-center mb-12">
        <p className="text-lg">A record label by Will Hofbauer</p>
      </section>
    </main>
  );
}
