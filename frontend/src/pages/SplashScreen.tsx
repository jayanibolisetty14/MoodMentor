import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

import splashBg from "../assets/images/backgrounds/splash-bg.jpg";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${splashBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-indigo-900/70 to-purple-900/70"></div>

      {/* Floating Circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Logo */}
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="w-36 h-36 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center"
        >
          <BrainCircuit
            size={72}
            className="text-indigo-400"
          />
        </motion.div>

        {/* App Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 1,
          }}
          className="mt-10 text-6xl font-extrabold text-white tracking-wide"
        >
          MoodMentor AI
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
          className="mt-4 text-xl text-slate-200"
        >
          Your Personal Mental Wellness Companion
        </motion.p>

        {/* Loading Bar */}
        <div className="mt-16 w-72 h-2 rounded-full bg-white/20 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3 }}
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
          />
        </div>

        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mt-6 text-lg text-slate-300"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}

export default SplashScreen;