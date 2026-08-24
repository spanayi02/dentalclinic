import ToothMark from "./ToothMark";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-14 sm:pb-32 sm:pt-20">
      <div className="mx-auto grid max-w-[1180px] items-center gap-16 px-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="reveal" style={{ ["--i" as any]: 0 }}>
          <h1 className="max-w-[14ch] font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.03] tracking-[-0.02em] text-ink">
            Dr. Vasilis I. Koutsoftas
          </h1>
          <p className="mt-4 text-lg italic text-pinedeep">
            Οδοντίατρος &middot; Χειρουργός Οδοντίατρος
          </p>
          <p className="mt-6 max-w-[46ch] text-[1.15rem] leading-relaxed text-inksoft">
            Ιδιωτικό οδοντιατρείο στη Λατσιά, Λευκωσία. Ήρεμη, προσεκτική
            οδοντιατρική φροντίδα για όλη την οικογένεια &mdash; από το
            πρώτο δοντάκι έως τη φροντίδα μιας ζωής &mdash; από το 2005.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="tel:+35722574142"
              className="inline-flex items-center gap-2 rounded-full bg-claystrong px-7 py-4 font-semibold text-paper shadow-[0_1px_2px_rgba(42,36,29,0.08)] transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-claydeep hover:shadow-[0_10px_24px_-12px_rgba(124,58,15,0.55)] active:scale-[0.97]"
            >
              Κλείστε Ραντεβού
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="tel:+35799579724"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-4 font-semibold tabular-nums text-pinedeep transition-colors duration-200 ease-out hover:border-pine hover:bg-pinetint active:scale-[0.97]"
            >
              99 579 724
            </a>
          </div>
          <p className="mt-7 text-sm text-inksoft">
            Εξυπηρέτηση στα <strong className="font-semibold text-ink">Ελληνικά</strong>,{" "}
            <strong className="font-semibold text-ink">Αγγλικά</strong> &amp;{" "}
            <strong className="font-semibold text-ink">Ρωσικά</strong>
          </p>
        </div>

        <div className="reveal relative mx-auto flex h-[360px] w-full max-w-[360px] items-center justify-center sm:h-[420px] sm:max-w-[420px]" style={{ ["--i" as any]: 1 }}>
          <div className="absolute inset-0 rounded-full bg-pinetint" />
          <div className="absolute inset-[12%] rounded-full border border-pine/20" />
          <ToothMark className="relative h-[46%] w-[46%] text-pine drop-shadow-[0_10px_24px_rgba(32,56,49,0.18)]" />
          <span className="absolute right-[16%] top-[20%] h-3.5 w-3.5 rounded-full bg-clay" />
        </div>
      </div>
    </section>
  );
}
