'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

type VantaEffect = {
  destroy?: () => void;
};

export default function HeroSection() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);

  useEffect(() => {
    if (!vantaEffect && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.stars.min.js';
      script.async = true;
      script.onload = () => {
        // @ts-expect-error: VANTA is a global UMD module loaded from CDN, not typed
        const VANTA = window.VANTA;
        const effect = VANTA.STARS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x000000,
        });
        setVantaEffect(effect);
      };
      document.body.appendChild(script);
    }

    return () => {
      vantaEffect?.destroy?.();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="w-full h-screen relative bg-black"
    >
      <div className="absolute inset-0 flex items-center justify-center text-white z-10 text-center px-4">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Mitch Roberts</h1>
          <p className="text-xl md:text-2xl mb-8">Engineer | Dreamer | Space-Tech Enthusiast</p>
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
