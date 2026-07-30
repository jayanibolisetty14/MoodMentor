import { motion } from "framer-motion";
import {
  TrendingUp,
  BrainCircuit,
  Calendar,
  Smile,
} from "lucide-react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import reportsBg from "../assets/images/backgrounds/reports-bg.jpg";

function EmotionHistory() {

  const data = [
    { day: "Mon", mood: 65 },
    { day: "Tue", mood: 72 },
    { day: "Wed", mood: 68 },
    { day: "Thu", mood: 80 },
    { day: "Fri", mood: 85 },
    { day: "Sat", mood: 92 },
    { day: "Sun", mood: 88 },
  ];

  return (

    <div
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${reportsBg})`,
      }}
    >

      {/* Overlay */}

      <div className="absolute inset-0 bg-slate-950/75"></div>

      <div className="relative z-10 p-8">

        {/* Hero */}

        <motion.div
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
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
            Emotion History
          </h1>

          <p className="text-slate-300 mt-4 text-lg">
            Track your emotional journey over time
            using AI-powered analytics.
          </p>

        </motion.div>

        {/* Chart + AI */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Mood Trend */}

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

            <div className="flex justify-between">

              <h2 className="text-2xl font-bold text-white">
                Weekly Mood Trend
              </h2>

              <TrendingUp className="text-green-400"/>

            </div>

            <div className="mt-8">

              <ResponsiveContainer
                width="100%"
                height={320}
              >

                <AreaChart data={data}>

                  <CartesianGrid strokeDasharray="3 3"/>

                  <XAxis dataKey="day"/>

                  <YAxis/>

                  <Tooltip/>

                  <Area
                    type="monotone"
                    dataKey="mood"
                    stroke="#6366f1"
                    fill="#6366f1"
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* AI Insight */}

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
              AI Analysis
            </h2>

            <p className="text-slate-200 leading-8 mt-6">

              Your mood trend has improved by
              <span className="text-green-400 font-bold">
                {" "}14%
              </span>
              over the past week.

              Keep maintaining your meditation
              routine and daily journal.

            </p>

          </div>

        </div>
                {/* Emotion Timeline & Monthly Stats */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* Emotion Timeline */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="
            rounded-3xl
            backdrop-blur-xl
            bg-white/10
            border
            border-white/20
            p-8
            "
          >

            <div className="flex items-center gap-3">

              <Calendar className="text-indigo-400"/>

              <h2 className="text-2xl font-bold text-white">
                Emotion Timeline
              </h2>

            </div>

            <div className="mt-8 space-y-6">

              <div className="flex justify-between">

                <span className="text-white">
                  😊 Monday
                </span>

                <span className="text-green-400">
                  Happy
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-white">
                  😌 Tuesday
                </span>

                <span className="text-cyan-400">
                  Calm
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-white">
                  😐 Wednesday
                </span>

                <span className="text-yellow-400">
                  Neutral
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-white">
                  😊 Thursday
                </span>

                <span className="text-green-400">
                  Happy
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-white">
                  🤩 Friday
                </span>

                <span className="text-pink-400">
                  Excited
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-white">
                  😄 Saturday
                </span>

                <span className="text-green-400">
                  Very Happy
                </span>

              </div>

            </div>

          </motion.div>

          {/* Monthly Statistics */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="
            rounded-3xl
            backdrop-blur-xl
            bg-white/10
            border
            border-white/20
            p-8
            "
          >

            <h2 className="text-2xl font-bold text-white">

              Monthly Statistics

            </h2>

            <div className="grid grid-cols-2 gap-5 mt-8">

              <div className="bg-white/10 rounded-2xl p-5">

                <Smile
                  className="text-green-400"
                  size={35}
                />

                <h3 className="text-slate-300 mt-4">

                  Happy Days

                </h3>

                <h1 className="text-4xl text-white font-bold mt-2">

                  21

                </h1>

              </div>

              <div className="bg-white/10 rounded-2xl p-5">

                <TrendingUp
                  className="text-indigo-400"
                  size={35}
                />

                <h3 className="text-slate-300 mt-4">

                  Average Mood

                </h3>

                <h1 className="text-4xl text-green-400 font-bold mt-2">

                  89%

                </h1>

              </div>

              <div className="bg-white/10 rounded-2xl p-5">

                <Calendar
                  className="text-cyan-400"
                  size={35}
                />

                <h3 className="text-slate-300 mt-4">

                  Mood Checks

                </h3>

                <h1 className="text-4xl text-white font-bold mt-2">

                  28

                </h1>

              </div>

              <div className="bg-white/10 rounded-2xl p-5">

                <BrainCircuit
                  className="text-purple-400"
                  size={35}
                />

                <h3 className="text-slate-300 mt-4">

                  AI Score

                </h3>

                <h1 className="text-4xl text-indigo-300 font-bold mt-2">

                  9.5

                </h1>

              </div>

            </div>

          </motion.div>

        </div>

        {/* AI Recommendations */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
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

            AI Recommendations

          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-white font-semibold text-xl">

                🧘 Meditate

              </h3>

              <p className="text-slate-300 mt-3">

                Practice mindfulness for
                15 minutes every morning.

              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-white font-semibold text-xl">

                📖 Journal

              </h3>

              <p className="text-slate-300 mt-3">

                Write about positive experiences
                before going to bed.

              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-white font-semibold text-xl">

                🌿 Relax

              </h3>

              <p className="text-slate-300 mt-3">

                Take a short walk outside
                to reduce stress levels.

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </div>

  );

}

export default EmotionHistory;