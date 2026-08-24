import IndexCard from "./IndexCard";

const FACTS = [
  { label: "Σπουδές", value: "RUDN University, Μόσχα · 2003" },
  { label: "Ειδίκευση", value: "Dentist / Surgeon" },
  { label: "Ιατρείο από", value: "2005 · Λατσιά, Λευκωσία" },
  { label: "Γλώσσες", value: "Ελληνικά · Αγγλικά · Ρωσικά" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-ink/10 py-24 sm:py-28">
      <div className="mx-auto grid max-w-[1180px] gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal" style={{ ["--i" as any]: 0 }}>
          <h2 className="max-w-[11ch] font-display text-[clamp(2rem,3.4vw,2.9rem)] leading-[1.1] text-ink">
            Είκοσι χρόνια φροντίδας στη γειτονιά σας.
          </h2>
        </div>

        <IndexCard rotate={0.6} index={1} punched className="p-8 sm:p-10">
          <p className="max-w-[62ch] text-[1.05rem] leading-relaxed text-inksoft">
            Ο <strong className="font-semibold text-ink">Dr. Vasilis I. Koutsoftas</strong>{" "}
            λειτουργεί το ιδιωτικό του οδοντιατρείο στη Λατσιά από το{" "}
            <strong className="font-semibold text-ink">2005</strong>, προσφέροντας
            ολοκληρωμένη οδοντιατρική φροντίδα σε γενιές της ίδιας οικογένειας.
            Σπούδασε στο <strong className="font-semibold text-ink">RUDN University</strong> της
            Μόσχας, αποφοιτώντας το <strong className="font-semibold text-ink">2003</strong> με
            ειδίκευση στην Οδοντιατρική Χειρουργική.
          </p>
          <p className="mt-4 max-w-[62ch] text-[1.05rem] leading-relaxed text-inksoft">
            Η κλινική εμπειρία δύο δεκαετιών συναντά μια ήρεμη, προσωπική
            προσέγγιση: κάθε ραντεβού σχεδιάζεται γύρω από τον ασθενή, όχι το
            ρολόι.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-dashed border-ink/20 pt-6">
            {FACTS.map((f) => (
              <div key={f.label}>
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-pinedeep">
                  {f.label}
                </dt>
                <dd className="mt-1 text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </IndexCard>
      </div>
    </section>
  );
}
