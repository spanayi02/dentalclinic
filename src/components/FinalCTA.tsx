export default function FinalCTA() {
  return (
    <section className="bg-ink py-20 text-paper sm:py-24">
      <div className="reveal mx-auto max-w-[1180px] px-6 text-center" style={{ ["--i" as any]: 0 }}>
        <h2 className="mx-auto max-w-[18ch] font-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.15]">
          Έτοιμοι να φροντίσετε το χαμόγελό σας;
        </h2>
        <p className="mx-auto mt-4 max-w-[48ch] text-[1.05rem] text-paper/[0.72]">
          Κλείστε ένα ραντεβού με τον Dr. Vasilis I. Koutsoftas στη Λατσιά.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:+35722574142"
            className="inline-flex items-center gap-2 rounded-full bg-claystrong px-7 py-4 font-semibold text-paper transition-colors duration-200 ease-out hover:bg-claydeep active:scale-[0.97]"
          >
            Κλείστε Ραντεβού
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-7 py-4 font-semibold text-paper transition-colors duration-200 ease-out hover:bg-paper/[0.08] active:scale-[0.97]"
          >
            Στοιχεία επικοινωνίας
          </a>
        </div>
      </div>
    </section>
  );
}
