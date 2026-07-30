import { motion } from "framer-motion";
import {
  Download,
  FileText,
  BrainCircuit,
  TrendingUp,
} from "lucide-react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import reportsBg from "../assets/images/backgrounds/reports-bg.jpg";

function Reports() {

  const pieData = [
    { name: "Happy", value: 45 },
    { name: "Calm", value: 25 },
    { name: "Neutral", value: 15 },
    { name: "Sad", value: 10 },
    { name: "Stressed", value: 5 },
  ];

  const COLORS = [
    "#22c55e",
    "#06b6d4",
    "#eab308",
    "#3b82f6",
    "#ef4444",
  ];

  const weeklyData = [
    { week: "W1", score: 72 },
    { week: "W2", score: 78 },
    { week: "W3", score: 84 },
    { week: "W4", score: 91 },
  ];

  return (

    <div
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${reportsBg})`,
      }}
    >

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
            Reports & Analytics
          </h1>

          <p className="text-slate-300 mt-4 text-lg">
            View AI-powered mental wellness reports,
            emotional analytics and progress history.
          </p>

        </motion.div>

        {/* Charts */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* Pie Chart */}

          <div
            className="
            rounded-3xl
            backdrop-blur-xl
            bg-white/10
            border
            border-white/20
            p-8
            "
          >

            <div className="flex justify-between items-center">

              <h2 className="text-2xl font-bold text-white">
                Emotion Distribution
              </h2>

              <TrendingUp className="text-green-400"/>
            </div>

            <div className="mt-8">

              <ResponsiveContainer
                width="100%"
                height={300}
              >

                <PieChart>

                  <Pie
                    data={pieData}
                    dataKey="value"
                    outerRadius={110}
                  >

                    {pieData.map((_, index) => (

                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />

                    ))}

                  </Pie>

                  <Tooltip/>

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* Bar Chart */}

          <div
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
              Monthly Wellness Score
            </h2>

            <div className="mt-8">

              <ResponsiveContainer
                width="100%"
                height={300}
              >

                <BarChart
                  data={weeklyData}
                >

                  <CartesianGrid strokeDasharray="3 3"/>

                  <XAxis dataKey="week"/>

                  <YAxis/>

                  <Tooltip/>

                  <Bar
                    dataKey="score"
                    fill="#6366f1"
                    radius={[8,8,0,0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>
                {/* AI Report Summary */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
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

          <div className="flex items-center gap-4">

            <BrainCircuit
              size={50}
              className="text-indigo-300"
            />

            <h2 className="text-3xl font-bold text-white">
              AI Wellness Report
            </h2>

          </div>

          <p
            className="
            mt-6
            text-slate-200
            text-lg
            leading-9
            "
          >

            During the last month your overall wellness
            score improved by

            <span className="font-bold text-green-400">

              {" "}18%

            </span>

            Your journal consistency,
            meditation practice and sleep quality
            have all improved.

            Continue maintaining your healthy routine
            to achieve even better emotional stability.

          </p>

        </motion.div>

        {/* Statistics */}

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">

            <FileText
              size={35}
              className="text-indigo-400"
            />

            <h3 className="text-slate-300 mt-4">

              Reports

            </h3>

            <h1 className="text-4xl text-white font-bold mt-2">

              28

            </h1>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">

            <TrendingUp
              size={35}
              className="text-green-400"
            />

            <h3 className="text-slate-300 mt-4">

              Avg Score

            </h3>

            <h1 className="text-4xl text-green-400 font-bold mt-2">

              91%

            </h1>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">

            <BrainCircuit
              size={35}
              className="text-purple-400"
            />

            <h3 className="text-slate-300 mt-4">

              AI Accuracy

            </h3>

            <h1 className="text-4xl text-indigo-300 font-bold mt-2">

              96%

            </h1>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">

            <Download
              size={35}
              className="text-cyan-400"
            />

            <h3 className="text-slate-300 mt-4">

              Downloads

            </h3>

            <h1 className="text-4xl text-white font-bold mt-2">

              14

            </h1>

          </div>

        </div>

        {/* Report History */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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

          <h2 className="text-2xl font-bold text-white">

            Report History

          </h2>

          <div className="mt-8 space-y-5">

            <div className="flex justify-between items-center bg-white/10 rounded-xl p-5">

              <div>

                <h3 className="text-white font-semibold">

                  Weekly Wellness Report

                </h3>

                <p className="text-slate-400">

                  Generated 21 July

                </p>

              </div>

              <button className="text-indigo-300 hover:text-white">

                View

              </button>

            </div>

            <div className="flex justify-between items-center bg-white/10 rounded-xl p-5">

              <div>

                <h3 className="text-white font-semibold">

                  Monthly Analytics

                </h3>

                <p className="text-slate-400">

                  Generated 15 July

                </p>

              </div>

              <button className="text-indigo-300 hover:text-white">

                View

              </button>

            </div>

            <div className="flex justify-between items-center bg-white/10 rounded-xl p-5">

              <div>

                <h3 className="text-white font-semibold">

                  AI Emotional Report

                </h3>

                <p className="text-slate-400">

                  Generated 01 July

                </p>

              </div>

              <button className="text-indigo-300 hover:text-white">

                View

              </button>

            </div>

          </div>

        </motion.div>

        {/* Download */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          className="flex justify-center mt-10"
        >

          <button
            className="
            flex
            items-center
            gap-3
            px-8
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-indigo-600
            to-purple-600
            text-white
            font-semibold
            shadow-lg
            hover:scale-105
            duration-300
            "
          >

            <Download size={22} />

            Download PDF Report

          </button>

        </motion.div>

      </div>

    </div>

  );

}

export default Reports;