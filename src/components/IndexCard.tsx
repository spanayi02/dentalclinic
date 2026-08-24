import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface IndexCardProps {
  children: ReactNode;
  className?: string;
  rotate?: number;
  delay?: number;
  punched?: boolean;
  as?: "div" | "article";
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: ({ rotate, delay }: { rotate: number; delay: number }) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate,
    transition: { type: "spring", duration: 0.8, bounce: 0.22, delay },
  }),
};

export default function IndexCard({
  children,
  className = "",
  rotate = 0,
  delay = 0,
  punched = false,
}: IndexCardProps) {
  return (
    <motion.div
      className={`paper-grain relative rounded-[3px] bg-paper shadow-card ${className}`}
      style={{ rotate }}
      custom={{ rotate, delay }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {punched && (
        <div className="absolute left-6 top-0 flex -translate-y-1/2 gap-6 z-10">
          <span className="h-3 w-3 rounded-full bg-sand shadow-[inset_0_1px_2px_rgba(42,36,29,0.35)]" />
          <span className="h-3 w-3 rounded-full bg-sand shadow-[inset_0_1px_2px_rgba(42,36,29,0.35)]" />
        </div>
      )}
      {children}
    </motion.div>
  );
}
