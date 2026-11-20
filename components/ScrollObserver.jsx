'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Add reveal-ready class so CSS transitions only apply when JS is active
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
        threshold: 0.05,
        rootMargin: '0px 0px 40px 0px',
      }
    );

    const observeAll = () => {
      const selector = '.card, .art, .dart2, .form, .fr-wrap, .cta, .dstat, .dperk, .faq-item, .dtool';
      const elements = document.querySelectorAll(selector);
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in viewport, mark in-view immediately
        if (rect.top < window.innerHeight + 80) {
          el.classList.add('in-view');
        }
        observer.observe(el);
      });
    };

    observeAll();
    const t1 = setTimeout(observeAll, 120);
    const t2 = setTimeout(observeAll, 500);

    // Guaranteed fallback: ensures all elements become visible even if scrolling fast or observer delays
    const fallbackTimer = setTimeout(() => {
      document.querySelectorAll('.card, .art, .dart2, .form, .fr-wrap, .cta, .dstat, .dperk, .faq-item, .dtool')
        .forEach((el) => el.classList.add('in-view'));
    }, 1200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
