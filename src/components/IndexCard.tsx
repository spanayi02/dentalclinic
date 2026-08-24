import type { ReactNode } from "react";

interface IndexCardProps {
  children: ReactNode;
  className?: string;
  rotate?: number;
  index?: number;
  punched?: boolean;
}

export default function IndexCard({
  children,
  className = "",
  rotate = 0,
  index = 0,
  punched = false,
}: IndexCardProps) {
  return (
    <div
      className={`reveal paper-grain relative rounded-[3px] bg-paper shadow-card ${className}`}
      style={{ rotate: `${rotate}deg`, ["--i" as any]: index }}
    >
      {punched && (
        <div className="absolute left-6 top-0 flex -translate-y-1/2 gap-6 z-10">
          <span className="h-3 w-3 rounded-full bg-sand shadow-[inset_0_1px_2px_rgba(42,36,29,0.35)]" />
          <span className="h-3 w-3 rounded-full bg-sand shadow-[inset_0_1px_2px_rgba(42,36,29,0.35)]" />
        </div>
      )}
      {children}
    </div>
  );
}
