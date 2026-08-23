(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- sticky header condenses on scroll ---- */
  const header = document.getElementById("site-header");
  let lastCondensed = false;
  const onScroll = () => {
    const condensed = window.scrollY > 24;
    if (condensed !== lastCondensed) {
      header.classList.toggle("is-condensed", condensed);
      lastCondensed = condensed;
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- mobile nav: opens and closes along the same path ---- */
  const navToggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");

  const setNavOpen = (open) => {
    navToggle.setAttribute("aria-expanded", String(open));
    mobileNav.classList.toggle("is-open", open);
  };

  navToggle.addEventListener("click", () => {
    setNavOpen(navToggle.getAttribute("aria-expanded") !== "true");
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setNavOpen(false);
  });

  /* ---- scroll reveal ---- */
  const revealEls = document.querySelectorAll("[data-reveal]");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    revealEls.forEach((el) => {
      const delay = el.getAttribute("data-reveal-delay");
      if (delay) el.style.setProperty("--reveal-delay", `${delay}ms`);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    // Reveal anything already on screen immediately, rather than waiting on
    // the observer's first callback — keeps the hero from ever sitting at
    // opacity:0 while a frame is pending.
    const viewportH = window.innerHeight;
    revealEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportH * 0.9) {
        el.classList.add("is-visible");
      } else {
        io.observe(el);
      }
    });

    // Safety net: content is never allowed to stay invisible indefinitely,
    // even if the observer never fires (e.g. tab backgrounded on load).
    window.setTimeout(() => {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }, 2500);
  }

  /* ---- footer year ---- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
