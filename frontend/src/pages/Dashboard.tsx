import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Smile,
  BookOpen,
  Heart,
  ArrowRight,
  Sparkles,
  TrendingUp,
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
import {
  getReport,
  getWeeklyReport,
  getMonthlyReport,
  getTodayMood,
} from "../lib/api";

// TEMP: replace with real logged-in user id once auth is wired up
const EMPLOYEE_ID = "demo-user";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [totalJournals, setTotalJournals] = useState(0);
  const [totalMoods, setTotalMoods] = useState(0);
  const [todayMood, setTodayMood] = useState<string | null>(null);

  const [weeklyData, setWeeklyData] = useState<{ day: string; mood: number }[]>([]);
  const [monthlyData, setMonthlyData] = useState<{ day: string; mood: number }[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);

        // Overall report
        const report = await getReport(EMPLOYEE_ID);
        setTotalJournals(report.total_journals ?? 0);
        setTotalMoods(report.total_moods ?? 0);

        // Today's mood
        const today = await getTodayMood(EMPLOYEE_ID);
        setTodayMood(today.emotion ?? "No check-in today");

        // Weekly mood
        const weekly = await getWeeklyReport(EMPLOYEE_ID);
        const weeklySummary = weekly.emotion_summary ?? {};
        const weeklyFormatted = Object.entries(weeklySummary).map(
          ([emotion, count]) => ({
            day: emotion,
            mood: count as number,
          })
        );
        setWeeklyData(weeklyFormatted);

        // Monthly mood
        const monthly = await getMonthlyReport(EMPLOYEE_ID);
        const monthlySummary = monthly.emotion_summary ?? {};
        const monthlyFormatted = Object.entries(monthlySummary).map(
          ([emotion, count]) => ({
            day: emotion,
            mood: count as number,
          })
        );
        setMonthlyData(monthlyFormatted);

        setError(null);
      } catch (err) {
        console.error(err);
        setError("Couldn't load dashboard data. Is the backend running?");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const cards = [
    {
      title: "Today's Mood",
      value: todayMood ?? "—",
      icon: Smile,
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Journal Entries",
      value: `${totalJournals}`,
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Mood Checks",
      value: `${totalMoods}`,
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

  return (
    <div className="w-full bg-[#0B1220]">
      <div className="px-8 py-8">

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[35px] border border-white/10 bg-gradient-to-br from-[#201547] via-[#131D35] to-[#0B1220] p-12"
        >
          <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/20 px-5 py-2 text-violet-300">
                <Sparkles size={18} />
                MoodMentor AI
              </div>

              <h1 className="mt-8 text-6xl font-black leading-tight text-white">
                Good Evening 👋
                <br />
                Build a
                <span className="text-violet-400"> Healthier Mind</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
                Track your emotions, write journals, meditate, listen to
                calming music, and receive personalised AI guidance every day.
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

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="flex justify-center"
            >
              <img src={heroImage} alt="" className="w-[520px] max-w-full" />
            </motion.div>
          </div>
        </motion.section>

        {/* ERROR STATE */}
        {error && (
          <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-5 text-red-300">
            {error}
          </div>
        )}

        {/* QUICK STATS */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-[28px] border border-white/5 bg-[#162033] p-7 shadow-xl transition"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${card.color}`}
                >
                  <Icon className="text-white" size={30} />
                </div>

                <p className="mt-6 text-slate-400">{card.title}</p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {loading ? "..." : card.value}
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

            {loading ? (
              <p className="text-slate-400">Loading chart...</p>
            ) : weeklyData.length === 0 ? (
              <p className="text-slate-400">
                No mood data yet this week — check in to see your trend here.
              </p>
            ) : (
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={weeklyData}>
                  <CartesianGrid stroke="#334155" strokeDasharray="5 5" />
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
            )}
          </div>

          {/* AI Insight */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-[30px] border border-white/5 bg-[#162033] p-8"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600">
              <BrainCircuit size={30} className="text-white" />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-white">
              AI Wellness Insight
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Great progress this week! Keep writing your journal, maintain
              your check-in streak, and try mindful moments before bedtime.
            </p>

            <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 py-4 font-semibold text-white transition hover:scale-105">
              View AI Report
            </button>
          </motion.div>
        </div>

        {/* MONTHLY ANALYTICS */}
        <div className="mt-10 rounded-[30px] border border-white/5 bg-[#162033] p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Monthly Mood Analytics
              </h2>
              <p className="mt-2 text-slate-400">
                Your emotional trend this month
              </p>
            </div>
            <TrendingUp className="text-cyan-400" />
          </div>

          {loading ? (
            <p className="text-slate-400">Loading chart...</p>
          ) : monthlyData.length === 0 ? (
            <p className="text-slate-400">No mood data yet this month.</p>
          ) : (
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={monthlyData}>
                <CartesianGrid stroke="#334155" strokeDasharray="5 5" />
                <XAxis dataKey="day" stroke="#94A3B8" />
                <YAxis stroke="#94A3B8" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="mood"
                  stroke="#22D3EE"
                  strokeWidth={4}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

      </div>
    </div>
  );
}