const STEPS = [
  {
    title: "Καλέστε μας",
    body: "Τηλεφωνήστε στο ιατρείο και κλείστε το ραντεβού σας για την ημέρα και ώρα που σας βολεύει.",
  },
  {
    title: "Πρώτη εξέταση",
    body: "Ο Dr. Koutsoftas εξετάζει προσεκτικά την κατάσταση και σας εξηγεί καθαρά τι χρειάζεται.",
  },
  {
    title: "Σχέδιο φροντίδας",
    body: "Σχεδιάζουμε μαζί ένα πλάνο θεραπείας προσαρμοσμένο στις ανάγκες και τον ρυθμό σας.",
  },
  {
    title: "Θεραπεία & παρακολούθηση",
    body: "Προχωράμε στη θεραπεία και συνεχίζουμε με τακτικά ραντεβού πρόληψης.",
  },
];

export default function Journey() {
  return (
    <section className="border-t border-ink/10 py-24 sm:py-28">
      <div className="mx-auto max-w-[1180px] px-6">
        <h2 className="reveal max-w-[16ch] font-display text-[clamp(2rem,3.4vw,2.9rem)] leading-[1.1] text-ink" style={{ ["--i" as any]: 0 }}>
          Τι να περιμένετε
        </h2>

        <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className="reveal border-t border-ink/15 pt-6" style={{ ["--i" as any]: i + 1 }}>
              <span className="font-display text-3xl text-clay">{i + 1}</span>
              <h3 className="mt-3 font-display text-xl text-ink">{step.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-inksoft">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
