
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-neutral-900 text-white font-sans px-6 py-10">
      <Head>
        <title>Martin Pohl – Portfolio v2</title>
        <meta name="description" content="3D technologie, IT poradenství, Apple styl, Google ekosystém." />
      </Head>
      <main className="max-w-4xl mx-auto text-center">
        <div className="relative inline-block mb-6">
          <Image
            src="/martin-profile.jpg"
            width={160}
            height={160}
            alt="Martin Pohl"
            className="rounded-full shadow-lg ring-2 ring-white"
          />
        </div>
        <h1 className="text-5xl font-bold mb-4">Zjednodušuji svět IT</h1>
        <p className="text-lg text-gray-300 mb-6">
          Konzultace pro firmy, Apple + Google integrace, 3D tvorba.  
        </p>
        <a
          href="https://tidycal.com/martinp0"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition"
        >
          🗓️ Rezervovat schůzku
        </a>
        <p className="mt-8 text-sm text-gray-400">
          Sleduj <a href="https://instagram.com/martins3dgarage" className="underline">IG @martins3Dgarage</a>
        </p>
      </main>
    </div>
  );
}
