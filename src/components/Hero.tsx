import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/asset/road.png"
        alt="Hero background"
        priority
        fill
        className="object-cover object-center -z-10"
      />


      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold">
          Welcome to My Static Site
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl">
          Built with Next.js, React, TypeScript, and TailwindCSS
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold shadow-lg hover:bg-purple-700 transition-colors"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
