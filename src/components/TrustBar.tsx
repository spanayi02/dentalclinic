const ITEMS = [
  "Ιδιωτικό ιατρείο από το 2005",
  "RUDN University, Μόσχα",
  "Ελληνικά · Αγγλικά · Ρωσικά",
  "Λατσιά, Λευκωσία",
];

export default function TrustBar() {
  return (
    <div className="border-y border-ink/10 bg-sand">
      <div className="reveal mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 text-center text-sm text-inksoft sm:justify-between" style={{ ["--i" as any]: 0 }}>
        {ITEMS.map((item) => (
          <span key={item} className="whitespace-nowrap">{item}</span>
        ))}
      </div>
    </div>
  );
}
