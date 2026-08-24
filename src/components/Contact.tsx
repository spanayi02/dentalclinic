import Grommet from "./Grommet";

export default function Contact() {
  return (
    <section id="contact" className="bg-pine py-24 text-paper sm:py-28">
      <div className="mx-auto grid max-w-[1180px] gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="mb-9 max-w-[12ch] font-display text-[clamp(2rem,3.4vw,2.9rem)] leading-[1.1]">
            Επισκεφθείτε μας
          </h2>

          <div className="mb-8">
            <h3 className="mb-2 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-paper/60">
              Διεύθυνση
            </h3>
            <p className="text-[1.05rem] leading-relaxed">
              87 Giannou Kranidioti Avenue
              <br />
              2ος όροφος, γραφείο 202
              <br />
              Λατσιά, 2231 Λευκωσία, Κύπρος
            </p>
          </div>

          <div className="mb-8">
            <h3 className="mb-2 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-paper/60">
              Τηλέφωνα
            </h3>
            <p className="text-[1.05rem] leading-relaxed">
              <a href="tel:+35722574142" className="transition-opacity duration-150 ease-out hover:opacity-75">
                +357 22 574 142
              </a>
              <br />
              <a href="tel:+35799579724" className="transition-opacity duration-150 ease-out hover:opacity-75">
                +357 99 579 724
              </a>
            </p>
          </div>

          <div className="mb-8">
            <h3 className="mb-2 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-paper/60">
              Ωράριο Λειτουργίας
            </h3>
            <p className="text-[1.05rem] leading-relaxed">
              Δευτέρα &ndash; Παρασκευή: 09:00 &ndash; 13:00 &amp; 15:00 &ndash; 19:00
              <br />
              Σάββατο: κατόπιν ραντεβού (επείγοντα)
              <span className="ml-2 inline-block rounded-full border border-paper/35 bg-paper/[0.16] px-2.5 py-1 text-[0.68rem] uppercase tracking-[0.06em]">
                προς επιβεβαίωση
              </span>
            </p>
          </div>

          <a
            href="tel:+35722574142"
            className="inline-flex items-center gap-2 rounded-full bg-claystrong px-7 py-4 font-semibold text-paper transition-colors duration-200 ease-out hover:bg-claydeep active:scale-[0.97]"
          >
            Καλέστε τώρα
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="relative">
          <Grommet className="absolute -left-3 -top-3 z-10 h-9 w-9 drop-shadow" />
          <Grommet className="absolute -right-3 -top-3 z-10 h-9 w-9 drop-shadow" />
          <div className="overflow-hidden rounded-[3px] border border-paper/25 shadow-card" style={{ aspectRatio: "4 / 3.2" }}>
            <iframe
              title="Χάρτης τοποθεσίας ιατρείου"
              src="https://www.google.com/maps?q=87%20Giannou%20Kranidioti%20Avenue%2C%20Latsia%2C%202231%20Nicosia%2C%20Cyprus&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[15%] sepia-[8%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
