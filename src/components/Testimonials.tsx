const QUOTES = [
  { text: "Πολύ καλός. Πάνω από όλα άνθρωπος. Όποτε τον χρειάστηκα ήταν δίπλα μου.", name: "Despo P." },
  { text: "Ο καλύτερος οδοντίατρος. Πάντα πολύ εξυπηρετικός.", name: "Michalis A." },
  { text: "Very good professional, highly recommend.", name: "Marilia C." },
  { text: "Ο καλύτερος. Φοβερή προσέγγιση.", name: "Marios K." },
];

function Star({ filled = true }: { filled?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} aria-hidden="true">
      <path d="M12 2.5l2.9 6.4 6.9.7-5.2 4.7 1.5 6.9-6.1-3.6-6.1 3.6 1.5-6.9-5.2-4.7 6.9-.7z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="border-t border-ink/10 py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="reveal flex flex-wrap items-end justify-between gap-6" style={{ ["--i" as any]: 0 }}>
          <h2 className="max-w-[20ch] font-display text-[clamp(2rem,3.4vw,2.9rem)] leading-[1.1] text-ink">
            Τι λένε οι ασθενείς μας
          </h2>
          <div className="flex items-center gap-2 text-clay">
            {[0, 1, 2, 3].map((i) => <Star key={i} />)}
            <Star filled={false} />
            <span className="ml-2 text-sm text-inksoft">4.5/5 &middot; 34 κριτικές Google</span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {QUOTES.map((q, i) => (
            <figure key={q.name} className="reveal border-t border-ink/15 pt-6" style={{ ["--i" as any]: i + 1 }}>
              <blockquote className="font-display text-lg italic leading-snug text-ink">
                &ldquo;{q.text}&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-sm text-inksoft">{q.name} &middot; Google</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
