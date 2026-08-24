import { useEffect } from "react";

/**
 * Drives every .reveal element on the page: elements already on screen at
 * mount become visible immediately, everything else waits for
 * IntersectionObserver as the user scrolls to it. A safety-net timeout
 * force-reveals anything still hidden after 3s, so content is never
 * permanently invisible regardless of what else goes wrong.
 */
export default function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (els.length === 0) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    const viewportH = window.innerHeight;
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportH * 0.9) {
        el.classList.add("is-visible");
      } else {
        io.observe(el);
      }
    });

    const safety = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("is-visible"));
    }, 3000);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, []);
}
