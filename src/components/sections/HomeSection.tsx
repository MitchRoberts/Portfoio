'use client';

import { useState } from 'react';

export default function HomeSection() {
  const [showResume, setShowResume] = useState(false);

  return (
    <section className="h-[80vh] flex flex-col items-center justify-center text-center relative z-10">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">Mitch Roberts</h1>
      <p className="text-xl md:text-2xl mb-6">Computer Engineering Student</p>
      <div className="flex gap-4">
        <button
          onClick={() => setShowResume(true)}
          className="bg-white text-black font-semibold py-2 px-6 rounded hover:bg-gray-200 transition"
        >
          View Resume
        </button>
        <a
          href="/Resume.pdf"
          download
          className="border border-white text-white font-semibold py-2 px-6 rounded hover:bg-white hover:text-black transition"
        >
          Download PDF
        </a>
      </div>

      {showResume && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl h-[90vh] bg-white rounded-lg overflow-hidden shadow-lg">
            <object
              data="/Resume.pdf"
              type="application/pdf"
              className="w-full h-full"
            >
              <p className="text-black p-4 text-center">
                Your browser does not support embedded PDFs.{' '}
                <a href="/Resume.pdf" target="_blank" className="underline text-blue-600">
                  Download it here.
                </a>
              </p>
            </object>

            <button
              onClick={() => setShowResume(false)}
              className="absolute top-3 right-3 bg-black text-white px-3 py-1 rounded hover:bg-white hover:text-black transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
