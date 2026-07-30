import { motion } from "framer-motion";
import {
  Users,
  HeartPulse,
  BrainCircuit,
  AlertTriangle,
  TrendingUp,
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

import hrBg from "../assets/images/backgrounds/hr-dashboard-bg.jpg";

function HRDashboard() {

  const moodData = [
    { day: "Mon", mood: 70 },
    { day: "Tue", mood: 75 },
    { day: "Wed", mood: 72 },
    { day: "Thu", mood: 82 },
    { day: "Fri", mood: 85 },
    { day: "Sat", mood: 90 },
    { day: "Sun", mood: 88 },
  ];

  return (

    <div
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${hrBg})`,
      }}
    >

      {/* Overlay */}

      <div className="absolute inset-0 bg-slate-950/80"></div>

      <div className="relative z-10 p-8">

        {/* Header */}

        <motion.div

          initial={{ opacity:0,y:40 }}
          animate={{ opacity:1,y:0 }}
          transition={{ duration:.8 }}

          className="
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          p-10
          "

        >

          <h1 className="text-5xl font-bold text-white">

            HR Wellness Dashboard

          </h1>

          <p className="text-slate-300 mt-4 text-lg">

            Monitor employee wellness, AI insights,
            stress trends and organisational mental health.

          </p>

        </motion.div>

        {/* KPI Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10">

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6">

            <Users
              className="text-blue-400"
              size={40}
            />

            <p className="text-slate-300 mt-5">

              Employees

            </p>

            <h2 className="text-4xl font-bold text-white mt-2">

              542

            </h2>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6">

            <HeartPulse
              className="text-green-400"
              size={40}
            />

            <p className="text-slate-300 mt-5">

              Wellness Score

            </p>

            <h2 className="text-4xl font-bold text-green-400 mt-2">

              91%

            </h2>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6">

            <AlertTriangle
              className="text-red-400"
              size={40}
            />

            <p className="text-slate-300 mt-5">

              High Risk

            </p>

            <h2 className="text-4xl font-bold text-red-400 mt-2">

              18

            </h2>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6">

            <BrainCircuit
              className="text-purple-400"
              size={40}
            />

            <p className="text-slate-300 mt-5">

              AI Accuracy

            </p>

            <h2 className="text-4xl font-bold text-indigo-300 mt-2">

              96%

            </h2>

          </div>

        </div>

        {/* Charts */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Mood Trend */}

          <div
            className="
            lg:col-span-2
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            p-8
            "
          >

            <div className="flex justify-between">

              <h2 className="text-2xl font-bold text-white">

                Weekly Wellness Trend

              </h2>

              <TrendingUp
                className="text-green-400"
              />

            </div>

            <div className="mt-8">

              <ResponsiveContainer
                width="100%"
                height={350}
              >

                <AreaChart
                  data={moodData}
                >

                  <CartesianGrid strokeDasharray="3 3"/>

                  <XAxis dataKey="day"/>

                  <YAxis/>

                  <Tooltip/>

                  <Area
                    dataKey="mood"
                    stroke="#4F46E5"
                    fill="#6366F1"
                    type="monotone"
                  />

                </AreaChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* AI Insights */}

          <div
            className="
            rounded-3xl
            bg-gradient-to-br
            from-indigo-600/30
            to-purple-700/30
            backdrop-blur-xl
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

              AI Insights

            </h2>

            <ul className="mt-6 space-y-4 text-slate-200 leading-7">

              <li>• Sales team stress increased by 14%.</li>

              <li>• HR department shows excellent wellbeing.</li>

              <li>• IT team has the highest engagement.</li>

              <li>• Recommend meditation for Marketing team.</li>

              <li>• 18 employees require follow-up.</li>

            </ul>

          </div>

        </div>
                {/* Employee Table & Department Analytics */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* Employee Table */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            p-8
            "
          >

            <h2 className="text-2xl font-bold text-white">

              Employee Wellness

            </h2>

            <div className="overflow-x-auto mt-8">

              <table className="w-full">

                <thead>

                  <tr className="text-slate-300 border-b border-white/20">

                    <th className="text-left py-3">Employee</th>

                    <th className="text-left py-3">Department</th>

                    <th className="text-left py-3">Mood</th>

                    <th className="text-left py-3">Score</th>

                  </tr>

                </thead>

                <tbody>

                  <tr className="border-b border-white/10">

                    <td className="py-4 text-white">John Smith</td>

                    <td className="text-slate-300">HR</td>

                    <td className="text-green-400">😊 Happy</td>

                    <td className="text-green-400">94%</td>

                  </tr>

                  <tr className="border-b border-white/10">

                    <td className="py-4 text-white">Emma Wilson</td>

                    <td className="text-slate-300">IT</td>

                    <td className="text-cyan-400">😌 Calm</td>

                    <td className="text-cyan-400">89%</td>

                  </tr>

                  <tr className="border-b border-white/10">

                    <td className="py-4 text-white">David Brown</td>

                    <td className="text-slate-300">Sales</td>

                    <td className="text-yellow-400">😐 Neutral</td>

                    <td className="text-yellow-400">72%</td>

                  </tr>

                  <tr>

                    <td className="py-4 text-white">Sophia Lee</td>

                    <td className="text-slate-300">Marketing</td>

                    <td className="text-red-400">😔 Stressed</td>

                    <td className="text-red-400">56%</td>

                  </tr>

                </tbody>

              </table>

            </div>

          </motion.div>

          {/* Department Analytics */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="
            rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            p-8
            "
          >

            <h2 className="text-2xl font-bold text-white">

              Department Performance

            </h2>

            <div className="space-y-8 mt-8">

              <div>

                <div className="flex justify-between">

                  <span className="text-white">HR</span>

                  <span className="text-green-400">92%</span>

                </div>

                <div className="w-full h-3 bg-slate-700 rounded-full mt-2">

                  <div className="w-[92%] h-3 bg-green-500 rounded-full"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between">

                  <span className="text-white">IT</span>

                  <span className="text-cyan-400">88%</span>

                </div>

                <div className="w-full h-3 bg-slate-700 rounded-full mt-2">

                  <div className="w-[88%] h-3 bg-cyan-500 rounded-full"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between">

                  <span className="text-white">Finance</span>

                  <span className="text-indigo-400">84%</span>

                </div>

                <div className="w-full h-3 bg-slate-700 rounded-full mt-2">

                  <div className="w-[84%] h-3 bg-indigo-500 rounded-full"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between">

                  <span className="text-white">Marketing</span>

                  <span className="text-yellow-400">76%</span>

                </div>

                <div className="w-full h-3 bg-slate-700 rounded-full mt-2">

                  <div className="w-[76%] h-3 bg-yellow-500 rounded-full"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between">

                  <span className="text-white">Sales</span>

                  <span className="text-red-400">64%</span>

                </div>

                <div className="w-full h-3 bg-slate-700 rounded-full mt-2">

                  <div className="w-[64%] h-3 bg-red-500 rounded-full"></div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* High Risk Employees */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="
          mt-10
          rounded-3xl
          bg-gradient-to-r
          from-red-600/20
          to-orange-600/20
          backdrop-blur-xl
          border
          border-red-500/30
          p-8
          "
        >

          <h2 className="text-3xl font-bold text-white">

            Employees Requiring Attention

          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-white font-bold">

                Sophia Lee

              </h3>

              <p className="text-slate-300 mt-2">

                Marketing

              </p>

              <p className="text-red-400 mt-3">

                High Stress Level

              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-white font-bold">

                Michael Clark

              </h3>

              <p className="text-slate-300 mt-2">

                Sales

              </p>

              <p className="text-yellow-400 mt-3">

                Burnout Risk

              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-white font-bold">

                Olivia Taylor

              </h3>

              <p className="text-slate-300 mt-2">

                Finance

              </p>

              <p className="text-orange-400 mt-3">

                Low Engagement

              </p>

            </div>

          </div>

        </motion.div>

        {/* Export Button */}

        <div className="flex justify-center mt-10">

          <button
            className="
            px-8
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-indigo-600
            to-purple-600
            text-white
            font-semibold
            shadow-xl
            hover:scale-105
            duration-300
            "
          >

            Export Wellness Report

          </button>

        </div>

      </div>

    </div>

  );

}

export default HRDashboard;