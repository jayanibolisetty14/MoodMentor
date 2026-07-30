import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Timer,
  BrainCircuit,
  Wind,
  Flower2,
} from "lucide-react";

import meditationBg from "../assets/images/backgrounds/meditation-bg.jpg";

function Meditation() {

  const sessions = [
    {
      title: "Morning Mindfulness",
      duration: "10 min",
      icon: "🌅",
    },
    {
      title: "Stress Relief",
      duration: "15 min",
      icon: "🌿",
    },
    {
      title: "Deep Sleep",
      duration: "20 min",
      icon: "🌙",
    },
    {
      title: "Focus Booster",
      duration: "12 min",
      icon: "🎯",
    },
  ];

  return (

    <div
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${meditationBg})`,
      }}
    >

      {/* Overlay */}

      <div className="absolute inset-0 bg-slate-950/75"></div>

      <div className="relative z-10 p-8">

        {/* Header */}

        <motion.div
          initial={{ opacity:0,y:40 }}
          animate={{ opacity:1,y:0 }}
          transition={{ duration:.8 }}
          className="
          rounded-3xl
          backdrop-blur-xl
          bg-white/10
          border
          border-white/20
          p-10
          "
        >

          <h1 className="text-5xl font-bold text-white">

            Meditation Center

          </h1>

          <p className="text-slate-300 mt-4 text-lg">

            Calm your mind with guided meditation,
            breathing exercises and AI-powered
            wellness recommendations.

          </p>

        </motion.div>

        {/* Guided Sessions */}

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          {sessions.map((session, index)=>(

            <motion.div
              key={index}
              whileHover={{ scale:1.05 }}
              className="
              rounded-3xl
              backdrop-blur-xl
              bg-white/10
              border
              border-white/20
              p-8
              text-center
              cursor-pointer
              "
            >

              <div className="text-6xl">

                {session.icon}

              </div>

              <h2 className="text-white text-xl font-bold mt-6">

                {session.title}

              </h2>

              <p className="text-slate-300 mt-2">

                {session.duration}

              </p>

            </motion.div>

          ))}

        </div>

        {/* Timer + AI */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Meditation Timer */}

          <div
            className="
            lg:col-span-2
            rounded-3xl
            backdrop-blur-xl
            bg-white/10
            border
            border-white/20
            p-8
            "
          >

            <div className="flex items-center gap-4">

              <Timer
                size={40}
                className="text-indigo-400"
              />

              <div>

                <h2 className="text-2xl font-bold text-white">

                  Meditation Timer

                </h2>

                <p className="text-slate-300">

                  Focus on your breathing

                </p>

              </div>

            </div>

            <div className="flex justify-center mt-10">

              <div
                className="
                w-56
                h-56
                rounded-full
                border-8
                border-indigo-500
                flex
                items-center
                justify-center
                "
              >

                <h1 className="text-5xl text-white font-bold">

                  10:00

                </h1>

              </div>

            </div>

            <div className="flex justify-center gap-6 mt-10">

              <button
                className="
                w-16
                h-16
                rounded-full
                bg-green-600
                flex
                items-center
                justify-center
                "
              >

                <Play className="text-white"/>

              </button>

              <button
                className="
                w-16
                h-16
                rounded-full
                bg-red-600
                flex
                items-center
                justify-center
                "
              >

                <Pause className="text-white"/>

              </button>

            </div>

          </div>

          {/* AI Recommendation */}

          <div
            className="
            rounded-3xl
            backdrop-blur-xl
            bg-gradient-to-br
            from-indigo-600/30
            to-purple-700/30
            border
            border-white/20
            p-8
            "
          >

            <BrainCircuit
              size={55}
              className="text-indigo-300"
            />

            <h2 className="text-3xl font-bold text-white mt-6">

              AI Meditation Guide

            </h2>

            <p className="text-slate-200 leading-8 mt-6">

              Your recent mood suggests trying a
              15-minute mindfulness session with
              breathing exercises to improve focus
              and reduce stress.

            </p>

          </div>

        </div>
                {/* Breathing Exercises */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
          mt-10
          rounded-3xl
          backdrop-blur-xl
          bg-white/10
          border
          border-white/20
          p-8
          "
        >

          <div className="flex items-center gap-3">

            <Wind
              className="text-cyan-400"
              size={35}
            />

            <h2 className="text-2xl font-bold text-white">

              Breathing Exercises

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-xl text-white font-semibold">

                🌬 Box Breathing

              </h3>

              <p className="text-slate-300 mt-3">

                Inhale • Hold • Exhale • Hold
                for 4 seconds each.

              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-xl text-white font-semibold">

                🌿 4-7-8 Method

              </h3>

              <p className="text-slate-300 mt-3">

                Inhale 4 sec,
                hold 7 sec,
                exhale 8 sec.

              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-xl text-white font-semibold">

                🌊 Deep Relaxation

              </h3>

              <p className="text-slate-300 mt-3">

                Slow breathing to calm
                your nervous system.

              </p>

            </div>

          </div>

        </motion.div>

        {/* Progress Cards */}

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">

            <Flower2
              size={35}
              className="text-green-400"
            />

            <h3 className="text-slate-300 mt-4">

              Sessions

            </h3>

            <h1 className="text-4xl text-white font-bold mt-2">

              84

            </h1>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">

            <Timer
              size={35}
              className="text-indigo-400"
            />

            <h3 className="text-slate-300 mt-4">

              Total Time

            </h3>

            <h1 className="text-4xl text-indigo-300 font-bold mt-2">

              32 hrs

            </h1>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">

            <BrainCircuit
              size={35}
              className="text-purple-400"
            />

            <h3 className="text-slate-300 mt-4">

              Focus Score

            </h3>

            <h1 className="text-4xl text-green-400 font-bold mt-2">

              95%

            </h1>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">

            <Wind
              size={35}
              className="text-cyan-400"
            />

            <h3 className="text-slate-300 mt-4">

              Breathing Streak

            </h3>

            <h1 className="text-4xl text-white font-bold mt-2">

              21 Days

            </h1>

          </div>

        </div>

        {/* Daily Wellness Tips */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="
          mt-10
          rounded-3xl
          backdrop-blur-xl
          bg-gradient-to-r
          from-indigo-600/30
          to-purple-700/30
          border
          border-white/20
          p-8
          "
        >

          <h2 className="text-3xl font-bold text-white">

            Daily Wellness Tips

          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-white text-xl font-semibold">

                🌞 Morning

              </h3>

              <p className="text-slate-300 mt-3">

                Begin your day with
                10 minutes of mindful breathing.

              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-white text-xl font-semibold">

                ☕ Afternoon

              </h3>

              <p className="text-slate-300 mt-3">

                Take a short break and
                practice deep breathing.

              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-white text-xl font-semibold">

                🌙 Night

              </h3>

              <p className="text-slate-300 mt-3">

                End the day with a
                relaxing meditation session.

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </div>

  );

}

export default Meditation;