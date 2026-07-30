import { motion } from "framer-motion";
import {
  BrainCircuit,
  Smile,
  BookOpen,
  Heart,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Activity,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import heroImage from "../assets/images/backgrounds/dashboard-bg.jpg";

const chartData = [
  { day: "Mon", mood: 62 },
  { day: "Tue", mood: 71 },
  { day: "Wed", mood: 75 },
  { day: "Thu", mood: 80 },
  { day: "Fri", mood: 90 },
  { day: "Sat", mood: 95 },
  { day: "Sun", mood: 92 },
];

const cards = [
  {
    title: "Mood Today",
    value: "Happy",
    icon: Smile,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Journal",
    value: "12 Entries",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Meditation",
    value: "18 Days",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "AI Coach",
    value: "Available",
    icon: BrainCircuit,
    color: "from-violet-500 to-indigo-600",
  },
];

export default function Dashboard() {
  return (
    <div className="w-full bg-[#0B1220]">

      <div className="px-8 py-8">

        {/* HERO */}

        <motion.section
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="relative overflow-hidden rounded-[35px] border border-white/10 bg-gradient-to-br from-[#201547] via-[#131D35] to-[#0B1220] p-12"
        >

          <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/20 px-5 py-2 text-violet-300">

                <Sparkles size={18} />

                MoodMentor AI

              </div>

              <h1 className="mt-8 text-6xl font-black leading-tight text-white">

                Good Evening 👋

                <br />

                Build a

                <span className="text-violet-400">

                  {" "}Healthier Mind

                </span>

              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">

                Track your emotions, write journals,
                meditate, listen to calming music,
                and receive personalised AI guidance
                every day.

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 font-semibold text-white transition hover:scale-105">

                  Start Check-In

                  <ArrowRight size={18} />

                </button>

                <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-white transition hover:bg-white/10">

                  View Progress

                </button>

              </div>

            </div>

            {/* RIGHT */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="flex justify-center"
            >

              <img
                src={heroImage}
                alt=""
                className="w-[520px] max-w-full"
              />

            </motion.div>

          </div>

        </motion.section>

        {/* QUICK STATS */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {cards.map((card, index) => {

            const Icon = card.icon;

            return (

              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * .1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-[28px] border border-white/5 bg-[#162033] p-7 shadow-xl transition"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${card.color}`}
                >

                  <Icon
                    className="text-white"
                    size={30}
                  />

                </div>

                <p className="mt-6 text-slate-400">

                  {card.title}

                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">

                  {card.value}

                </h2>

              </motion.div>

            );

          })}

        </div>

        {/* WEEKLY ANALYTICS */}

        <div className="mt-10 grid gap-8 lg:grid-cols-3">

          <div className="rounded-[30px] border border-white/5 bg-[#162033] p-8 lg:col-span-2">

            <div className="mb-8 flex items-center justify-between">

              <div>

                <h2 className="text-2xl font-bold text-white">

                  Weekly Mood Analytics

                </h2>

                <p className="mt-2 text-slate-400">

                  Your emotional wellness throughout the week

                </p>

              </div>

              <TrendingUp className="text-green-400" />

            </div>

            <ResponsiveContainer
              width="100%"
              height={320}
            >

              <LineChart data={chartData}>

                <CartesianGrid
                  stroke="#334155"
                  strokeDasharray="5 5"
                />

                <XAxis dataKey="day" stroke="#94A3B8" />

                <YAxis stroke="#94A3B8" />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="mood"
                  stroke="#8B5CF6"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>
                    {/* AI Insight */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .3 }}
            className="rounded-[30px] border border-white/5 bg-[#162033] p-8"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600">

              <BrainCircuit size={30} className="text-white" />

            </div>

            <h2 className="mt-6 text-2xl font-bold text-white">

              AI Wellness Insight

            </h2>

            <p className="mt-5 leading-8 text-slate-300">

              Great progress this week!

              Your emotional wellness has improved by

              <span className="font-semibold text-green-400">

                {" "}12%

              </span>

              . Continue writing your journal,
              maintain your meditation streak,
              and try listening to calming music
              before bedtime.

            </p>

            <button
              className="
              mt-8
              w-full
              rounded-2xl
              bg-gradient-to-r
              from-violet-600
              to-indigo-600
              py-4
              font-semibold
              text-white
              transition
              hover:scale-105
              "
            >

              View AI Report

            </button>

          </motion.div>

        </div>

        {/* Progress + Goals */}

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {/* Wellness */}

          <div className="rounded-[30px] border border-white/5 bg-[#162033] p-8">

            <div className="mb-8 flex items-center gap-3">

              <Activity className="text-cyan-400" />

              <h2 className="text-2xl font-bold text-white">

                Wellness Progress

              </h2>

            </div>

            {[
              {
                name: "Mental Wellness",
                value: 92,
                color: "bg-green-500",
              },
              {
                name: "Meditation",
                value: 80,
                color: "bg-violet-500",
              },
              {
                name: "Journal",
                value: 75,
                color: "bg-pink-500",
              },
              {
                name: "Sleep Quality",
                value: 87,
                color: "bg-cyan-500",
              },
            ].map((item) => (

              <div
                key={item.name}
                className="mb-7"
              >

                <div className="mb-2 flex justify-between">

                  <span className="text-slate-300">

                    {item.name}

                  </span>

                  <span className="font-semibold text-white">

                    {item.value}%

                  </span>

                </div>

                <div className="h-3 rounded-full bg-slate-700">

                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: `${item.value}%`,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    className={`h-3 rounded-full ${item.color}`}
                  />

                </div>

              </div>

            ))}

          </div>

          {/* Goals */}

          <div className="rounded-[30px] border border-white/5 bg-[#162033] p-8">

            <h2 className="mb-8 text-2xl font-bold text-white">

              Today's Goals

            </h2>

            {[
              ["😊 Mood Check", "Done", "text-green-400"],
              ["📖 Journal Entry", "Pending", "text-yellow-400"],
              ["🧘 Meditation", "Done", "text-green-400"],
              ["🚶 30 min Walk", "Missed", "text-red-400"],
              ["😴 Sleep Before 11 PM", "Tonight", "text-cyan-400"],
            ].map((goal) => (

              <div
                key={goal[0]}
                className="mb-6 flex items-center justify-between rounded-2xl bg-slate-800/40 p-4"
              >

                <span className="text-white">

                  {goal[0]}

                </span>

                <span className={`font-semibold ${goal[2]}`}>

                  {goal[1]}

                </span>

              </div>

            ))}

          </div>

        </div>
                {/* Recent Activity + Motivation */}

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          {/* Recent Activity */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .5 }}
            className="rounded-[30px] border border-white/5 bg-[#162033] p-8"
          >

            <h2 className="text-2xl font-bold text-white">

              Recent Activity

            </h2>

            <div className="mt-8 space-y-7">

              {[
                {
                  title: "Mood Check Completed",
                  desc: "You reported feeling Happy today.",
                  time: "Today",
                  color: "bg-green-500",
                },
                {
                  title: "Journal Updated",
                  desc: "Added gratitude journal entry.",
                  time: "Yesterday",
                  color: "bg-cyan-500",
                },
                {
                  title: "Meditation Session",
                  desc: "Completed 15 minutes of mindfulness.",
                  time: "2 Days Ago",
                  color: "bg-violet-500",
                },
                {
                  title: "AI Coach Session",
                  desc: "Discussed stress management techniques.",
                  time: "3 Days Ago",
                  color: "bg-pink-500",
                },
              ].map((item) => (

                <div
                  key={item.title}
                  className="flex items-start gap-5"
                >

                  <div
                    className={`mt-2 h-4 w-4 rounded-full ${item.color}`}
                  />

                  <div className="flex-1">

                    <h3 className="font-semibold text-white">

                      {item.title}

                    </h3>

                    <p className="mt-1 text-slate-400">

                      {item.desc}

                    </p>

                  </div>

                  <span className="text-sm text-slate-500">

                    {item.time}

                  </span>

                </div>

              ))}

            </div>

          </motion.div>

          {/* Motivation */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .6 }}
            className="relative overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-br from-violet-700 via-indigo-700 to-[#162033] p-8"
          >

            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

            <BrainCircuit
              size={55}
              className="text-violet-200"
            />

            <h2 className="mt-8 text-3xl font-bold text-white">

              Daily Motivation

            </h2>

            <p className="mt-8 text-xl italic leading-10 text-slate-200">

              "Every small step toward better mental health is a
              victory. Stay consistent, be kind to yourself,
              and celebrate your progress."

            </p>

            <p className="mt-10 text-violet-200">

              — MoodMentor AI

            </p>

          </motion.div>

        </div>

        {/* Weekly Overview */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="mt-10 rounded-[30px] border border-white/5 bg-[#162033] p-8"
        >

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold text-white">

                Weekly Overview

              </h2>

              <p className="mt-2 text-slate-400">

                Your mental wellness summary

              </p>

            </div>

            <TrendingUp className="text-green-400" />

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                title: "Mood Checks",
                value: "7",
              },
              {
                title: "Journal Entries",
                value: "5",
              },
              {
                title: "Meditation",
                value: "4 hrs",
              },
              {
                title: "Wellness Score",
                value: "92%",
              },
            ].map((item) => (

              <motion.div
                whileHover={{
                  y: -8,
                }}
                key={item.title}
                className="rounded-3xl bg-slate-800/40 p-7"
              >

                <p className="text-slate-400">

                  {item.title}

                </p>

                <h1 className="mt-3 text-5xl font-bold text-white">

                  {item.value}

                </h1>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </div>

  );

}