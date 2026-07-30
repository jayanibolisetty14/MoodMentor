import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GlassCard({ children }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-[#1E293B]
      p-7
      shadow-xl
      transition
      "
    >
      {children}
    </motion.div>
  );
}