const REASONS = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 20c-3.5-1-6-3.8-6-8 0-3 1.6-5.2 3-6.6M15 20c3.5-1 6-3.8 6-8 0-3-1.6-5.2-3-6.6M12 3v3M9.5 8.5c.7-.7 1.6-1 2.5-1s1.8.3 2.5 1M12 12v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Παιδιά ευπρόσδεκτα",
    body: "Δεχόμαστε τους μικρούς ασθενείς μας από το πρώτο τους δοντάκι, με υπομονή και φροντίδα.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Επείγοντα Σαββατοκύριακου",
    body: "Επείγουσα εξυπηρέτηση Σαββατοκύριακα και αργίες, όταν ο πόνος δεν περιμένει.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
    title: "Πολύγλωσση εξυπηρέτηση",
    body: "Επικοινωνία στα Ελληνικά, Αγγλικά και Ρωσικά, χωρίς παρεξηγήσεις, με σαφήνεια.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-pinedeep py-24 text-paper sm:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <h2 className="reveal max-w-[10ch] font-display text-[clamp(2rem,3.4vw,2.9rem)] leading-[1.1]" style={{ ["--i" as any]: 0 }}>
          Γιατί να μας εμπιστευτείτε
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {REASONS.map((r, i) => (
            <div key={r.title} className="reveal border-t border-paper/25 pt-7" style={{ ["--i" as any]: i + 1 }}>
              <div className="mb-5 text-clay">{r.icon}</div>
              <h3 className="font-display text-xl">{r.title}</h3>
              <p className="mt-2.5 text-[0.98rem] leading-relaxed text-paper/[0.72]">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
