'use client';

import StarBackground from "@/components/StarBackground"; // update path as needed

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      <StarBackground />
      <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Mitch Roberts</h1>
          <p className="text-xl md:text-2xl mb-8">
            Engineer | Web Developer | Space-Tech Enthusiast
          </p>
          <a
            href="/resume.pdf"
            className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200 transition"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}
