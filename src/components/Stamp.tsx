interface StampProps {
  lines: string[];
  rotate?: number;
  className?: string;
}

export default function Stamp({ lines, rotate = -8, className = "" }: StampProps) {
  return (
    <div
      className={`inline-flex h-24 w-24 shrink-0 select-none flex-col items-center justify-center rounded-full border-[2.5px] border-claystrong/70 text-center text-claystrong/80 ${className}`}
      style={{
        rotate: `${rotate}deg`,
        mixBlendMode: "multiply",
        opacity: 0.85,
      }}
    >
      <div className="mx-1 flex h-[76px] w-[76px] flex-col items-center justify-center rounded-full border border-dashed border-claystrong/60 px-1">
        {lines.map((line, i) => (
          <span
            key={i}
            className="font-display text-[9px] font-bold uppercase leading-[1.15] tracking-[0.12em]"
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}
