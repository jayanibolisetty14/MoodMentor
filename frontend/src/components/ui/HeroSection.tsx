import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  image: string;
}

export default function HeroSection({
  title,
  subtitle,
  buttonText,
  image,
}: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1E1B4B] via-[#111827] to-[#0F172A] border border-white/10">

      {/* Glow */}
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="grid lg:grid-cols-2 items-center gap-10 p-10 lg:p-14">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
        >
          <span className="inline-flex rounded-full bg-violet-500/20 px-4 py-2 text-violet-300 text-sm font-medium">
            ✨ MoodMentor AI
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {subtitle}
          </p>

          {buttonText && (
            <button className="mt-10 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-xl shadow-violet-600/30 transition hover:scale-105">
              {buttonText}
            </button>
          )}
        </motion.div>

        {/* Right */}

        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="flex justify-center"
        >
          <img
            src={image}
            className="w-[520px] max-w-full"
            alt=""
          />
        </motion.div>

      </div>

    </div>
  );
}