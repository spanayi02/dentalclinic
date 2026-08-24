import { motion } from "framer-motion";

const REASONS = [
  {
    lines: ["Παιδιά", "Ευπρόσδεκτα"],
    title: "Παιδιά ευπρόσδεκτα",
    body: "Δεχόμαστε τους μικρούς ασθενείς μας από το πρώτο τους δοντάκι, με υπομονή και φροντίδα.",
  },
  {
    lines: ["Σ/Κ", "Επείγοντα"],
    title: "Επείγοντα Σαββατοκύριακου",
    body: "Επείγουσα εξυπηρέτηση Σαββατοκύριακα και αργίες, όταν ο πόνος δεν περιμένει.",
  },
  {
    lines: ["EL · EN", "RU"],
    title: "Πολύγλωσση εξυπηρέτηση",
    body: "Επικοινωνία στα Ελληνικά, Αγγλικά και Ρωσικά, χωρίς παρεξηγήσεις, με σαφήνεια.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-pinedeep py-24 text-paper sm:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <h2 className="max-w-[10ch] font-display text-[clamp(2rem,3.4vw,2.9rem)] leading-[1.1]">
          Γιατί να μας εμπιστευτείτε
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", duration: 0.7, bounce: 0.2, delay: i * 0.08 }}
              className="border-t border-paper/25 pt-7"
            >
              <div
                className="mb-5 flex h-16 w-16 select-none flex-col items-center justify-center rounded-full border-2 border-clay/70 text-center"
                style={{ rotate: `${i % 2 === 0 ? -7 : 6}deg`, mixBlendMode: "screen" }}
              >
                {r.lines.map((l) => (
                  <span key={l} className="font-display text-[9px] uppercase tracking-[0.1em] text-clay">
                    {l}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-xl">{r.title}</h3>
              <p className="mt-2.5 text-[0.98rem] leading-relaxed text-paper/[0.72]">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
