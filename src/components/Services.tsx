import { useRef } from "react";
import IndexCard from "./IndexCard";

const GROUPS = [
  {
    tag: "Α",
    tint: "bg-pine",
    title: "Γενική & Προληπτική Φροντίδα",
    items: ["Γενική οδοντιατρική εξέταση", "Προληπτική οδοντιατρική", "Λεύκανση δοντιών"],
  },
  {
    tag: "Β",
    tint: "bg-claystrong",
    title: "Παιδοδοντιατρική",
    items: ["Φροντίδα παιδιών, από το πρώτο δοντάκι", "Προληπτική καθοδήγηση για γονείς"],
  },
  {
    tag: "Γ",
    tint: "bg-pinedeep",
    title: "Ενδοδοντία & Ούλα",
    items: ["Ενδοδοντική θεραπεία (ρίζες)", "Θεραπεία ούλων"],
  },
  {
    tag: "Δ",
    tint: "bg-claydeep",
    title: "Αισθητική & Προσθετική",
    items: ["Αισθητική / κοσμητική οδοντιατρική", "Στεφάνες & γέφυρες", "Όψεις (Veneers)", "Εμφυτεύματα"],
  },
  {
    tag: "Ε",
    tint: "bg-pine",
    title: "Χειρουργική",
    items: ["Εξαγωγές δοντιών", "Φρονιμίτες", "Αφαίρεση κύστεων"],
  },
];

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="services" className="border-t border-b border-ink/10 bg-claywash py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[46ch]">
            <h2 className="font-display text-[clamp(2rem,3.4vw,2.9rem)] leading-[1.1] text-ink">Υπηρεσίες</h2>
            <p className="mt-3 text-[1.05rem] text-inksoft">
              Ένας φάκελος, πέντε κατηγορίες &mdash; ολοκληρωμένη φροντίδα κάτω
              από μία στέγη, για κάθε ηλικία. Σύρετε για να δείτε όλες.
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              aria-label="Προηγούμενη κάρτα"
              onClick={() => scrollBy(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors duration-150 ease-out hover:border-pine hover:bg-pinetint active:scale-[0.97]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button
              aria-label="Επόμενη κάρτα"
              onClick={() => scrollBy(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors duration-150 ease-out hover:border-pine hover:bg-pinetint active:scale-[0.97]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pt-4"
          style={{ scrollbarWidth: "thin" }}
        >
          {GROUPS.map((g, i) => (
            <IndexCard
              key={g.title}
              rotate={i % 2 === 0 ? -1.2 : 1}
              delay={i * 0.07}
              className="w-[280px] shrink-0 snap-start p-6 sm:w-[300px]"
            >
              <span
                className={`absolute -top-3 right-5 flex h-8 w-8 items-center justify-center rounded-sm ${g.tint} font-display text-sm text-paper shadow-card`}
                style={{ rotate: "3deg" }}
                aria-hidden="true"
              >
                {g.tag}
              </span>
              <h3 className="pr-6 font-display text-xl leading-snug text-pinedeep">{g.title}</h3>
              <ul className="mt-4 space-y-2.5 border-t border-dashed border-ink/20 pt-4">
                {g.items.map((item) => (
                  <li key={item} className="text-[0.95rem] leading-snug text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </IndexCard>
          ))}
          <div className="w-1 shrink-0" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
