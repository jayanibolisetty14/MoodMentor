import { motion } from "framer-motion";
import {
  Smile,
  BookOpen,
  BrainCircuit,
  BarChart3,
  Heart,
  Calendar,
  ArrowRight,
  Sparkles,
  Target,
  Activity,
  MoonStar,
  TrendingUp,
} from "lucide-react";

function Home() {
  const stats = [
    {
      title: "Today's Mood",
      value: "😊 Happy",
      icon: <Smile size={32} />,
      color: "from-green-500 to-emerald-600",
      progress: "92%",
    },
    {
      title: "Journal Entries",
      value: "24",
      icon: <BookOpen size={32} />,
      color: "from-indigo-500 to-purple-600",
      progress: "80%",
    },
    {
      title: "Meditation",
      value: "18 Days",
      icon: <BrainCircuit size={32} />,
      color: "from-cyan-500 to-blue-600",
      progress: "75%",
    },
    {
      title: "Wellness Score",
      value: "92%",
      icon: <BarChart3 size={32} />,
      color: "from-pink-500 to-rose-600",
      progress: "95%",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-fuchsia-600/10 blur-[180px]"></div>

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-10">

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            rounded-[36px]
            bg-gradient-to-r
            from-indigo-600
            via-purple-600
            to-fuchsia-600
            p-10
            shadow-[0_20px_70px_rgba(99,102,241,.35)]
            text-white
            overflow-hidden
            relative
          "
        >

          <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* Left */}

            <div className="flex-1">

              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-lg">

                <Sparkles size={18} />

                AI Powered Mental Wellness Platform

              </div>

              <h1 className="mt-6 text-6xl font-extrabold leading-tight">

                Welcome Back 👋

              </h1>

              <p className="mt-6 max-w-2xl text-xl leading-9 text-indigo-100">

                Track your mood, analyse emotions with AI, meditate,
                journal your thoughts and improve your mental wellness
                every single day with MoodMentor AI.

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <button
                  className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-white
                  px-8
                  py-4
                  text-lg
                  font-bold
                  text-indigo-700
                  shadow-xl
                  transition-all
                  hover:scale-105
                "
                >
                  Start Mood Check

                  <ArrowRight size={20} />

                </button>

                <button
                  className="
                  rounded-2xl
                  border
                  border-white/30
                  bg-white/10
                  px-8
                  py-4
                  text-lg
                  font-semibold
                  backdrop-blur-lg
                  transition-all
                  hover:bg-white/20
                "
                >
                  View Reports
                </button>

              </div>

            </div>

            {/* Right */}

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-3xl bg-white/15 p-6 backdrop-blur-lg">

                <Heart className="text-pink-300" size={42} />

                <h2 className="mt-4 text-4xl font-bold">

                  92%

                </h2>

                <p className="mt-2 text-indigo-100">

                  Wellness Score

                </p>

              </div>

              <div className="rounded-3xl bg-white/15 p-6 backdrop-blur-lg">

                <TrendingUp className="text-green-300" size={42} />

                <h2 className="mt-4 text-4xl font-bold">

                  +15%

                </h2>

                <p className="mt-2 text-indigo-100">

                  Weekly Growth

                </p>

              </div>

              <div className="rounded-3xl bg-white/15 p-6 backdrop-blur-lg">

                <MoonStar className="text-cyan-300" size={42} />

                <h2 className="mt-4 text-4xl font-bold">

                  18

                </h2>

                <p className="mt-2 text-indigo-100">

                  Meditation Days

                </p>

              </div>

              <div className="rounded-3xl bg-white/15 p-6 backdrop-blur-lg">

                <Target className="text-yellow-300" size={42} />

                <h2 className="mt-4 text-4xl font-bold">

                  8/10

                </h2>

                <p className="mt-2 text-indigo-100">

                  Daily Goals

                </p>

              </div>

            </div>

          </div>

        </motion.div>
        {/* ================= Statistics ================= */}

<div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 xl:grid-cols-4">

  {stats.map((card, index) => (

    <motion.div
      key={card.title}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 }}
      whileHover={{
        scale: 1.04,
        y: -8,
      }}
      className="
      rounded-[28px]
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      p-7
      shadow-xl
      "
    >

      <div
        className={`
        w-16
        h-16
        rounded-2xl
        bg-gradient-to-r
        ${card.color}
        flex
        items-center
        justify-center
        text-white
        shadow-lg
      `}
      >
        {card.icon}
      </div>

      <h3 className="mt-6 text-lg text-slate-300">
        {card.title}
      </h3>

      <h2 className="mt-2 text-4xl font-bold text-white">
        {card.value}
      </h2>

      <div className="mt-6">

        <div className="flex justify-between text-sm text-slate-300">

          <span>Progress</span>

          <span>{card.progress}</span>

        </div>

        <div className="mt-2 h-2 rounded-full bg-white/10">

          <div
            className={`h-2 rounded-full bg-gradient-to-r ${card.color}`}
            style={{ width: card.progress }}
          />

        </div>

      </div>

    </motion.div>

  ))}

</div>

{/* ================= Quick Actions ================= */}

<div className="mt-16">

  <div className="flex items-center justify-between">

    <h2 className="text-4xl font-bold text-white">

      Quick Actions

    </h2>

    <button className="text-violet-300 hover:text-white transition">

      View All →

    </button>

  </div>

  <div className="grid gap-8 mt-8 md:grid-cols-3">

    {/* Mood */}

    <motion.div
      whileHover={{
        scale: 1.03,
        y: -8,
      }}
      className="
      rounded-[30px]
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      p-8
      cursor-pointer
      "
    >

      <div className="w-16 h-16 rounded-2xl bg-pink-500 flex items-center justify-center">

        <Heart className="text-white" size={34} />

      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">

        Daily Mood Check

      </h3>

      <p className="mt-4 text-slate-300 leading-7">

        Record your emotions and let AI analyse your
        mental wellness.

      </p>

      <button className="mt-6 text-pink-300 font-semibold">

        Start →

      </button>

    </motion.div>

    {/* Journal */}

    <motion.div
      whileHover={{
        scale: 1.03,
        y: -8,
      }}
      className="
      rounded-[30px]
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      p-8
      cursor-pointer
      "
    >

      <div className="w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center">

        <Calendar className="text-white" size={34} />

      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">

        Daily Journal

      </h3>

      <p className="mt-4 text-slate-300 leading-7">

        Express your thoughts, reflect on your day and
        build healthy habits.

      </p>

      <button className="mt-6 text-cyan-300 font-semibold">

        Write →

      </button>

    </motion.div>

    {/* AI */}

    <motion.div
      whileHover={{
        scale: 1.03,
        y: -8,
      }}
      className="
      rounded-[30px]
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      p-8
      cursor-pointer
      "
    >

      <div className="w-16 h-16 rounded-2xl bg-violet-600 flex items-center justify-center">

        <BrainCircuit className="text-white" size={34} />

      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">

        AI Therapist

      </h3>

      <p className="mt-4 text-slate-300 leading-7">

        Receive personalised wellness suggestions from
        MoodMentor AI.

      </p>

      <button className="mt-6 text-violet-300 font-semibold">

        Chat →

      </button>

    </motion.div>

  </div>

</div>
{/* ================= AI Recommendation ================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="
    mt-16
    rounded-[32px]
    bg-gradient-to-r
    from-violet-600
    via-indigo-600
    to-blue-600
    p-10
    shadow-[0_20px_70px_rgba(99,102,241,.35)]
    text-white
    overflow-hidden
    relative
  "
>

  <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full bg-white/10 blur-3xl"></div>

  <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">

    <div className="flex-1">

      <div className="flex items-center gap-3">

        <BrainCircuit size={34} />

        <h2 className="text-4xl font-bold">
          AI Wellness Recommendation
        </h2>

      </div>

      <p className="mt-6 text-xl leading-9 text-indigo-100">

        Your emotional health is improving steadily.

        MoodMentor AI recommends completing today's mood check,
        writing a short journal entry, and practising
        10 minutes of mindfulness meditation.

      </p>

      <div className="mt-8 flex gap-4 flex-wrap">

        <button
          className="
          rounded-xl
          bg-white
          px-6
          py-3
          text-indigo-700
          font-bold
          shadow-lg
          hover:scale-105
          transition
        "
        >
          View Plan
        </button>

        <button
          className="
          rounded-xl
          border
          border-white/30
          bg-white/10
          px-6
          py-3
          font-semibold
          hover:bg-white/20
          transition
        "
        >
          Ask AI
        </button>

      </div>

    </div>

    <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl">

      <Activity size={80} className="text-green-300 mx-auto" />

      <h3 className="mt-5 text-center text-3xl font-bold">

        Excellent

      </h3>

      <p className="mt-2 text-center text-indigo-100">

        Wellness Status

      </p>

    </div>

  </div>

</motion.div>

{/* ================= Progress ================= */}

<div className="grid gap-8 mt-16 lg:grid-cols-2">

  {/* Weekly Progress */}

  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="
      rounded-[30px]
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      p-8
    "
  >

    <h2 className="text-3xl font-bold text-white">

      Weekly Progress

    </h2>

    <div className="space-y-8 mt-8">

      {[
        {
          title: "Mood Stability",
          value: "92%",
          color: "bg-green-500",
          width: "92%",
        },
        {
          title: "Meditation",
          value: "80%",
          color: "bg-cyan-500",
          width: "80%",
        },
        {
          title: "Journal",
          value: "75%",
          color: "bg-pink-500",
          width: "75%",
        },
        {
          title: "Sleep Quality",
          value: "88%",
          color: "bg-violet-500",
          width: "88%",
        },
      ].map((item) => (

        <div key={item.title}>

          <div className="flex justify-between mb-2">

            <span className="text-slate-300">

              {item.title}

            </span>

            <span className="text-white font-semibold">

              {item.value}

            </span>

          </div>

          <div className="h-3 rounded-full bg-white/10">

            <div
              className={`${item.color} h-3 rounded-full`}
              style={{
                width: item.width,
              }}
            />

          </div>

        </div>

      ))}

    </div>

  </motion.div>

  {/* Mood Analytics */}

  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="
      rounded-[30px]
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      p-8
    "
  >

    <h2 className="text-3xl font-bold text-white">

      Mood Analytics

    </h2>

    <div className="mt-10 grid grid-cols-7 gap-4">

      {[70, 95, 60, 82, 92, 74, 88].map((height, index) => (

        <div
          key={index}
          className="flex flex-col items-center"
        >

          <div
            className="w-8 rounded-full bg-gradient-to-t from-indigo-600 to-fuchsia-500"
            style={{
              height: `${height * 2}px`,
            }}
          />

          <span className="mt-3 text-sm text-slate-400">

            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}

          </span>

        </div>

      ))}

    </div>

    <div className="mt-8 rounded-2xl bg-white/5 p-5">

      <div className="flex justify-between">

        <span className="text-slate-300">

          Average Mood Score

        </span>

        <span className="text-green-400 font-bold">

          8.9 / 10

        </span>

      </div>

    </div>

  </motion.div>

</div>
{/* ================= Recent Activities ================= */}

<div className="mt-16">

  <h2 className="text-4xl font-bold text-white mb-8">
    Recent Activities
  </h2>

  <div className="rounded-[30px] bg-white/10 backdrop-blur-xl border border-white/20 p-8">

    {[
      {
        icon: "😊",
        title: "Mood Check Completed",
        time: "Today • 10:30 AM",
        color: "bg-green-500",
      },
      {
        icon: "📖",
        title: "Journal Entry Added",
        time: "Yesterday • 9:00 PM",
        color: "bg-blue-500",
      },
      {
        icon: "🧘",
        title: "Meditation Completed",
        time: "Yesterday • 7:15 AM",
        color: "bg-violet-500",
      },
      {
        icon: "🤖",
        title: "AI Therapy Session",
        time: "2 Days Ago",
        color: "bg-pink-500",
      },
    ].map((item) => (

      <motion.div
        key={item.title}
        whileHover={{ scale: 1.02 }}
        className="flex items-center justify-between border-b border-white/10 py-5 last:border-none"
      >

        <div className="flex items-center gap-5">

          <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-2xl`}>
            {item.icon}
          </div>

          <div>

            <h3 className="text-white text-xl font-semibold">
              {item.title}
            </h3>

            <p className="text-slate-400">
              {item.time}
            </p>

          </div>

        </div>

        <button className="text-violet-300 hover:text-white">
          View →
        </button>

      </motion.div>

    ))}

  </div>

</div>

{/* ================= Wellness Tips ================= */}

<div className="mt-16">

  <h2 className="text-4xl font-bold text-white mb-8">
    Daily Wellness Tips
  </h2>

  <div className="grid gap-8 md:grid-cols-3">

    {[
      {
        emoji: "💧",
        title: "Stay Hydrated",
        desc: "Drink at least 8 glasses of water today to improve energy and concentration.",
      },
      {
        emoji: "🌬",
        title: "Deep Breathing",
        desc: "Spend 5 minutes practising mindful breathing to reduce stress.",
      },
      {
        emoji: "😊",
        title: "Positive Thinking",
        desc: "Write three positive moments from your day before going to sleep.",
      },
    ].map((tip) => (

      <motion.div
        key={tip.title}
        whileHover={{
          y: -8,
          scale: 1.03,
        }}
        className="rounded-[30px] bg-white/10 backdrop-blur-xl border border-white/20 p-8"
      >

        <div className="text-6xl">
          {tip.emoji}
        </div>

        <h3 className="mt-6 text-2xl font-bold text-white">
          {tip.title}
        </h3>

        <p className="mt-4 text-slate-300 leading-8">
          {tip.desc}
        </p>

      </motion.div>

    ))}

  </div>

</div>

{/* ================= Mental Health Insight ================= */}

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-16 rounded-[32px] bg-gradient-to-r from-pink-600 via-violet-600 to-indigo-700 p-10 text-white shadow-2xl"
>

  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

    <div>

      <h2 className="text-4xl font-bold">
        Mental Health Insight
      </h2>

      <p className="mt-6 text-xl leading-9 text-indigo-100">

        Based on your recent activities, your emotional
        wellbeing has improved by
        <span className="font-bold text-white">
          {" "}18%
        </span>
        this month.

        Keep journaling and meditating consistently for even
        better results.

      </p>

    </div>

    <div className="rounded-full bg-white/20 w-40 h-40 flex items-center justify-center">

      <span className="text-5xl font-bold">
        92%
      </span>

    </div>

  </div>

</motion.div>
{/* ================= Achievements ================= */}

<div className="mt-16">

  <h2 className="text-4xl font-bold text-white mb-8">
    Achievements
  </h2>

  <div className="grid md:grid-cols-4 gap-6">

    {[
      {
        emoji: "🏆",
        title: "7 Day Streak",
        desc: "Logged mood for 7 consecutive days",
      },
      {
        emoji: "📖",
        title: "Journal Master",
        desc: "25 Journal Entries",
      },
      {
        emoji: "🧘",
        title: "Meditation Pro",
        desc: "20 Meditation Sessions",
      },
      {
        emoji: "❤️",
        title: "Healthy Mind",
        desc: "Wellness Score above 90%",
      },
    ].map((badge) => (

      <motion.div
        key={badge.title}
        whileHover={{
          scale: 1.05,
          y: -8,
        }}
        className="
        rounded-[30px]
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        p-8
        text-center
        shadow-xl
        "
      >

        <div className="text-6xl">
          {badge.emoji}
        </div>

        <h3 className="mt-5 text-2xl font-bold text-white">
          {badge.title}
        </h3>

        <p className="mt-3 text-slate-300 leading-7">
          {badge.desc}
        </p>

      </motion.div>

    ))}

  </div>

</div>

{/* ================= Quote ================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="
  mt-16
  rounded-[35px]
  bg-gradient-to-r
  from-indigo-600
  via-violet-600
  to-fuchsia-600
  p-12
  text-center
  shadow-[0_20px_60px_rgba(124,58,237,.45)]
  "
>

  <h2 className="text-4xl font-bold text-white">

    🌟 Quote of the Day

  </h2>

  <p className="mt-8 text-2xl text-indigo-100 leading-10 max-w-5xl mx-auto italic">

    "Your mental health deserves the same care and attention
    as your physical health. Every small step you take today
    creates a healthier tomorrow."

  </p>

</motion.div>

{/* ================= Emergency ================= */}

<div className="mt-16">

  <div
    className="
    rounded-[35px]
    bg-red-500/10
    backdrop-blur-xl
    border
    border-red-500/30
    p-10
    flex
    flex-col
    lg:flex-row
    justify-between
    items-center
    gap-8
    "
  >

    <div>

      <h2 className="text-4xl font-bold text-white">

        🆘 Need Immediate Help?

      </h2>

      <p className="mt-4 text-slate-300 text-xl leading-8 max-w-3xl">

        If you're experiencing emotional distress,
        connect with a trusted person or professional.

        MoodMentor AI is here to support you,
        but professional help is always recommended
        during emergencies.

      </p>

    </div>

    <button
      className="
      px-10
      py-5
      rounded-2xl
      bg-red-500
      text-white
      text-xl
      font-bold
      shadow-xl
      hover:bg-red-600
      transition
      "
    >

      Emergency Support

    </button>

  </div>

</div>

{/* ================= Footer ================= */}

<footer className="mt-20 border-t border-white/10 pt-10 pb-6">

  <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

    <div>

      <h2 className="text-3xl font-bold text-white">

        MoodMentor AI

      </h2>

      <p className="text-slate-400 mt-3">

        AI Powered Mental Wellness Platform

      </p>

    </div>

    <div className="flex gap-10 text-slate-400">

      <button className="hover:text-white transition">
        Privacy
      </button>

      <button className="hover:text-white transition">
        Terms
      </button>

      <button className="hover:text-white transition">
        Contact
      </button>

      <button className="hover:text-white transition">
        Support
      </button>

    </div>

  </div>

  <div className="mt-8 border-t border-white/10 pt-6 text-center text-slate-500">

    © 2026 MoodMentor AI • Designed with ❤️ using React, Tailwind CSS & AI

  </div>

</footer>

</div>
</div> 

  );
}

export default Home;