// app/contact/page.tsx
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Third Place Records - Contact",
  description: "Contact Third Place Records",
};

export default function Contact() {
  return (
    <main className="container px-4 mx-auto">
      <Head>
        <title>Third Place Records - Contact</title>
      </Head>

      <div className="max-w-lg mx-auto bg-white bg-opacity-50 rounded-lg p-8 shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact</h1>
        <p className="text-center text-xl">
          <a
            href="mailto:info@thirdplacerecords.com"
            className="text-blue-500 hover:underline text-base md:text-2xl"
          >
            will@thirdplacerecords.com
          </a>
        </p>
      </div>
    </main>
  );
}
