import ToothMark from "./ToothMark";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink pt-16 text-paper/[0.72]">
      <div className="mx-auto max-w-[1180px] border-b border-paper/[0.14] px-6 pb-12">
        <div className="grid gap-10 sm:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div className="text-paper">
            <ToothMark className="mb-3 h-7 w-7 text-clay" />
            <p className="text-[0.95rem] leading-relaxed">
              Dr. Vasilis I. Koutsoftas
              <br />
              Οδοντίατρος &middot; Χειρουργός Οδοντίατρος
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-paper/50">Διεύθυνση</h4>
            <p className="text-[0.92rem] leading-[1.75]">
              87 Giannou Kranidioti Avenue
              <br />
              2ος όροφος, γραφείο 202
              <br />
              Λατσιά, 2231 Λευκωσία, Κύπρος
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-paper/50">Επικοινωνία</h4>
            <p className="text-[0.92rem] leading-[1.75]">
              <a href="tel:+35722574142" className="transition-colors duration-150 ease-out hover:text-paper">
                +357 22 574 142
              </a>
              <br />
              <a href="tel:+35799579724" className="transition-colors duration-150 ease-out hover:text-paper">
                +357 99 579 724
              </a>
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-paper/50">Πλοήγηση</h4>
            <p className="text-[0.92rem] leading-[1.75]">
              <a href="#about" className="transition-colors duration-150 ease-out hover:text-paper">Σχετικά</a>
              <br />
              <a href="#services" className="transition-colors duration-150 ease-out hover:text-paper">Υπηρεσίες</a>
              <br />
              <a href="#contact" className="transition-colors duration-150 ease-out hover:text-paper">Επικοινωνία</a>
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1180px] px-6 py-7 text-[0.82rem] text-paper/45">
        <p>&copy; {year} Dr. Vasilis I. Koutsoftas. Με επιφύλαξη παντός δικαιώματος.</p>
      </div>
    </footer>
  );
}
