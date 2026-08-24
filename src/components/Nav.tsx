import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ToothMark from "./ToothMark";

const LINKS = [
  { href: "#about", label: "Σχετικά" },
  { href: "#services", label: "Υπηρεσίες" },
  { href: "#why", label: "Γιατί Εμάς" },
  { href: "#contact", label: "Επικοινωνία" },
];

export default function Nav() {
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ease-out ${
        condensed ? "bg-sand/95 shadow-[0_1px_0_rgba(42,36,29,0.14)]" : "bg-sand/70"
      } backdrop-blur-md`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1180px] items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <ToothMark className="h-7 w-7 text-pine" />
          <span className="font-display text-xl">
            Koutsoftas <em className="text-pine not-italic italic">Dental</em>
          </span>
        </a>

        <nav className="hidden md:flex items-end gap-1" aria-label="Κύρια πλοήγηση">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative -mb-px px-4 pb-2.5 pt-3.5 text-sm text-inksoft transition-[transform,color] duration-200 ease-out hover:-translate-y-1 hover:text-ink"
              style={{ clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0% 100%)" }}
            >
              <span className="relative z-10">{l.label}</span>
              <span className="absolute inset-0 -z-0 bg-paper opacity-0 shadow-card transition-opacity duration-200 ease-out group-hover:opacity-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+35722574142"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-sm tabular-nums text-pinedeep transition-colors duration-150 ease-out hover:border-pine hover:bg-pinetint active:scale-[0.97]"
          >
            22 574 142
          </a>
          <button
            aria-expanded={open}
            aria-label="Άνοιγμα μενού"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <motion.span
              className="h-[1.5px] w-5 bg-ink"
              animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
            />
            <motion.span
              className="h-[1.5px] w-5 bg-ink"
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.16 }}
            />
            <motion.span
              className="h-[1.5px] w-5 bg-ink"
              animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col gap-1 border-t border-ink/10 bg-paper px-6 py-4 md:hidden"
            aria-label="Πλοήγηση κινητού"
          >
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-ink">
                {l.label}
              </a>
            ))}
            <a href="tel:+35722574142" onClick={() => setOpen(false)} className="py-2 font-semibold text-claystrong">
              Κλήση: 22 574 142
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
