const FAQS = [
  {
    q: "Πόσο συχνά πρέπει να επισκέπτομαι τον οδοντίατρο;",
    a: "Γενικά συνιστάται έλεγχος κάθε 6 μήνες για πρόληψη, αλλά ο Dr. Koutsoftas θα σας προτείνει συχνότητα προσαρμοσμένη στη δική σας κατάσταση κατά την πρώτη εξέταση.",
  },
  {
    q: "Τι να περιμένω στο πρώτο μου ραντεβού;",
    a: "Μια προσεκτική κλινική εξέταση, συζήτηση του ιστορικού σας, και ξεκάθαρη εξήγηση για οτιδήποτε χρειάζεται περαιτέρω φροντίδα — χωρίς πίεση για άμεση απόφαση.",
  },
  {
    q: "Δέχεστε παιδιά; Από ποια ηλικία;",
    a: "Ναι, δεχόμαστε τους μικρούς ασθενείς μας από το πρώτο τους δοντάκι, με υπομονή και προσαρμοσμένη προσέγγιση.",
  },
  {
    q: "Τι γίνεται σε περίπτωση επείγοντος περιστατικού;",
    a: "Προσφέρουμε επείγουσα εξυπηρέτηση Σαββατοκύριακα και αργίες. Καλέστε μας απευθείας στο +357 22 574 142 ή +357 99 579 724.",
  },
  {
    q: "Σε ποιες γλώσσες μπορώ να επικοινωνήσω;",
    a: "Στα Ελληνικά, τα Αγγλικά και τα Ρωσικά.",
  },
  {
    q: "Πώς μπορώ να κλείσω ραντεβού;",
    a: "Με ένα τηλεφώνημα στο ιατρείο. Δεν διαθέτουμε ακόμα online σύστημα κράτησης — το τηλέφωνο είναι ο πιο σίγουρος τρόπος να βρείτε άμεσα διαθεσιμότητα.",
  },
];

export default function FAQ() {
  return (
    <section className="border-t border-ink/10 bg-claywash py-24 sm:py-28">
      <div className="mx-auto max-w-[820px] px-6">
        <h2 className="reveal font-display text-[clamp(2rem,3.4vw,2.9rem)] leading-[1.1] text-ink" style={{ ["--i" as any]: 0 }}>
          Συχνές ερωτήσεις
        </h2>

        <div className="mt-10 divide-y divide-ink/15 border-t border-ink/15">
          {FAQS.map((item, i) => (
            <details key={item.q} className="reveal group py-5" style={{ ["--i" as any]: i + 1 }}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-ink marker:content-none">
                {item.q}
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"
                  className="shrink-0 transition-transform duration-200 ease-out group-open:rotate-45"
                >
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="mt-3 max-w-[65ch] text-[0.98rem] leading-relaxed text-inksoft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
