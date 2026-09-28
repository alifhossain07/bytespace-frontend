import React from "react";

export default function Home() {
  return (
    <main className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center text-center">
      <section className="space-y-4">
        <h1 className="text-4xl sm:text-6xl font-bold font-poppins text-white">
          ByteSpace
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 font-satoshi max-w-lg mx-auto">
          Start building your project here.
        </p>
      </section>
    </main>
  );
}
