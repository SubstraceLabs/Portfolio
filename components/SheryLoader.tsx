'use client';
import Script from "next/script";

export default function SheryLoader() {
  return (
    <Script 
      src="https://cdn.jsdelivr.net/npm/sheryjs@1.0.0-alpha.9/dist/shery.min.js" 
      strategy="lazyOnload"
      onLoad={() => {
        // Dispatch custom event when Shery loads
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('sheryLoaded'));
        }
      }}
    />
  );
}

