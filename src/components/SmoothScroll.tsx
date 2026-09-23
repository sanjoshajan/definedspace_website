'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Prevent browser from restoring scroll awkwardly before DOM and Lenis finish hydrating
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Check if there is an explicit hash in the URL on load
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          lenis.scrollTo(target as HTMLElement, { offset: -80, duration: 1 });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
      lenis.scrollTo(0, { immediate: true });
    }

    // Smooth scroll for internal anchor links (#about, #contact, etc.)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        const href = anchor.getAttribute('href');
        if (href && href !== '#') {
          const el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            lenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.1 });
            history.pushState(null, '', href);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
