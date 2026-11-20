'use client';
import { useEffect } from 'react';

export default function ScrollObserver() {
  useEffect(() => {
    // Add reveal-ready class so initial render without JS is never hidden
    document.documentElement.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll(
        '.card, .art, .dart2, .form, .fr-wrap, .dsec, .cta'
      );
      elements.forEach((el) => observer.observe(el));
    };

    observeAll();
    const timer = setTimeout(observeAll, 600);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return null;
}
