import { motion } from "framer-motion";
import Grommet from "./Grommet";
import Stamp from "./Stamp";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-14 sm:pb-32 sm:pt-20">
      <div className="mx-auto grid max-w-[1180px] items-center gap-16 px-6 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <h1 className="max-w-[12ch] font-display text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.03] tracking-[-0.02em] text-ink">
            Ο φάκελός σας, από το 2005.
          </h1>
          <p className="mt-6 max-w-[46ch] text-[1.15rem] leading-relaxed text-inksoft">
            Ιδιωτικό οδοντιατρείο στη Λατσιά. Ο Dr. Vasilis I. Koutsoftas
            κρατά το ίδιο ήρεμο, προσωπικό αρχείο φροντίδας για την
            οικογένειά σας εδώ και δύο δεκαετίες &mdash; από το πρώτο
            δοντάκι έως τη φροντίδα μιας ζωής, σε τρεις γλώσσες.
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

        <div className="relative mx-auto h-[420px] w-full max-w-[380px]">
          <div className="paper-grain absolute inset-x-6 top-8 h-[380px] rotate-[-9deg] rounded-[3px] bg-paper/80 shadow-card" />
          <div className="paper-grain absolute inset-x-3 top-4 h-[390px] rotate-[6deg] rounded-[3px] bg-paper/90 shadow-card" />

          <motion.div
            className="paper-grain relative h-[400px] rounded-[3px] bg-paper p-7 shadow-cardHover"
            initial={{ opacity: 0, y: 24, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ type: "spring", duration: 0.9, bounce: 0.2, delay: 0.15 }}
          >
            <Grommet className="absolute -left-3 -top-3 h-9 w-9 drop-shadow-sm" />

            <div className="flex items-start justify-between">
              <span className="font-display text-[10px] uppercase tracking-[0.16em] text-inksoft">
                Φάκελος Ασθενούς
              </span>
              <span className="text-[10px] uppercase tracking-[0.16em] text-claystrong">Ν&deg; 2005&ndash;∞</span>
            </div>

            <div className="mt-8 border-b border-dashed border-ink/20 pb-4">
              <p className="text-[10px] uppercase tracking-[0.14em] text-inksoft">Θεράπων Ιατρός</p>
              <p className="mt-1 font-display text-2xl text-ink">Dr. Vasilis I. Koutsoftas</p>
              <p className="mt-1 text-sm italic text-pinedeep">Οδοντίατρος &middot; Χειρουργός Οδοντίατρος</p>
            </div>

            <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.12em] text-inksoft">Σπουδές</dt>
                <dd className="text-ink">RUDN, Μόσχα &middot; 2003</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.12em] text-inksoft">Έδρα</dt>
                <dd className="text-ink">Λατσιά, Λευκωσία</dd>
              </div>
            </dl>

            <Stamp
              lines={["Ασθενής", "από το", "2005"]}
              rotate={-10}
              className="absolute -bottom-6 -right-5"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
