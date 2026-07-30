import { useState } from "react";
import { motion } from "framer-motion";
import {
  Smile,
  Frown,
  Meh,
  Angry,
  Laugh,
  BrainCircuit,
} from "lucide-react";

import moodBg from "../assets/images/backgrounds/mood-bg.jpg";

function MoodCheck() {
  const [selectedMood, setSelectedMood] = useState("");

  const moods = [
    {
      name: "Happy",
      icon: <Laugh size={45} />,
      color: "bg-green-500",
    },
    {
      name: "Calm",
      icon: <Smile size={45} />,
      color: "bg-cyan-500",
    },
    {
      name: "Neutral",
      icon: <Meh size={45} />,
      color: "bg-yellow-500",
    },
    {
      name: "Sad",
      icon: <Frown size={45} />,
      color: "bg-blue-500",
    },
    {
      name: "Stressed",
      icon: <Angry size={45} />,
      color: "bg-red-500",
    },
  ];

  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${moodBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/75"></div>

      <div className="relative z-10 p-8">

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            rounded-3xl
            backdrop-blur-xl
            bg-white/10
            border
            border-white/20
            p-10
            shadow-2xl
          "
        >
          <h1 className="text-5xl font-bold text-white">
            Mood Check
          </h1>

          <p className="text-slate-300 mt-4 text-lg">
            Tell us how you're feeling today and let MoodMentor AI
            help you improve your emotional wellbeing.
          </p>
        </motion.div>

        {/* Mood Selection */}

        <div className="mt-10">

          <h2 className="text-3xl font-bold text-white mb-6">
            How are you feeling today?
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            {moods.map((mood, index) => (

              <motion.div
                key={mood.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedMood(mood.name)}
                className={`
                  cursor-pointer
                  rounded-3xl
                  backdrop-blur-xl
                  border
                  p-8
                  flex
                  flex-col
                  items-center
                  transition
                  duration-300
                  ${
                    selectedMood === mood.name
                      ? "border-indigo-500 bg-indigo-600/30"
                      : "border-white/20 bg-white/10 hover:bg-white/20"
                  }
                `}
              >
                <div
                  className={`
                    w-20
                    h-20
                    rounded-full
                    ${mood.color}
                    flex
                    items-center
                    justify-center
                    text-white
                  `}
                >
                  {mood.icon}
                </div>

                <h3 className="text-white text-xl font-semibold mt-5">
                  {mood.name}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>
                {/* Wellness Sliders */}

        <div className="grid lg:grid-cols-2 gap-8 mt-12">

          {/* Left */}

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

            <h2 className="text-2xl font-bold text-white mb-8">

              Wellness Indicators

            </h2>

            {/* Stress */}

            <div className="mb-8">

              <div className="flex justify-between mb-3">

                <span className="text-white">

                  Stress Level

                </span>

                <span className="text-red-400">

                  65%

                </span>

              </div>

              <input
                type="range"
                min="0"
                max="100"
                defaultValue="65"
                className="w-full accent-red-500"
              />

            </div>

            {/* Energy */}

            <div className="mb-8">

              <div className="flex justify-between mb-3">

                <span className="text-white">

                  Energy Level

                </span>

                <span className="text-green-400">

                  80%

                </span>

              </div>

              <input
                type="range"
                min="0"
                max="100"
                defaultValue="80"
                className="w-full accent-green-500"
              />

            </div>

            {/* Sleep */}

            <div>

              <div className="flex justify-between mb-3">

                <span className="text-white">

                  Sleep Quality

                </span>

                <span className="text-cyan-400">

                  75%

                </span>

              </div>

              <input
                type="range"
                min="0"
                max="100"
                defaultValue="75"
                className="w-full accent-cyan-500"
              />

            </div>

          </motion.div>

          {/* AI Prediction */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="
            rounded-3xl
            backdrop-blur-xl
            bg-gradient-to-br
            from-indigo-600/40
            to-purple-700/40
            border
            border-white/20
            p-8
            "
          >

            <BrainCircuit
              size={60}
              className="text-indigo-300"
            />

            <h2 className="text-3xl font-bold text-white mt-6">

              AI Mood Prediction

            </h2>

            <p
              className="
              text-slate-200
              leading-8
              mt-6
              text-lg
              "
            >

              Based on your selected mood and
              wellness indicators, MoodMentor AI
              predicts that your emotional state is
              stable but slightly stressed.

              We recommend a
              <span className="font-bold text-green-300">

                {" "}10-minute meditation session

              </span>
              ,
              drinking water,
              and writing a gratitude journal.

            </p>

            <div className="grid grid-cols-2 gap-5 mt-8">

              <div className="bg-white/10 rounded-2xl p-5">

                <h3 className="text-slate-300">

                  Mood Score

                </h3>

                <h1 className="text-4xl text-green-400 font-bold mt-3">

                  88%

                </h1>

              </div>

              <div className="bg-white/10 rounded-2xl p-5">

                <h3 className="text-slate-300">

                  Confidence

                </h3>

                <h1 className="text-4xl text-indigo-300 font-bold mt-3">

                  94%

                </h1>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Notes */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
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

            Additional Notes

          </h2>

          <textarea
            rows={6}
            placeholder="Describe how you're feeling today..."
            className="
            mt-6
            w-full
            rounded-2xl
            bg-white/10
            border
            border-white/20
            p-5
            text-white
            placeholder:text-slate-400
            outline-none
            resize-none
            "
          />

          <button
            className="
            mt-8
            px-8
            py-4
            rounded-xl
            bg-gradient-to-r
            from-indigo-600
            to-purple-600
            text-white
            font-bold
            hover:scale-105
            duration-300
            "
          >

            Save Mood Check

          </button>

        </motion.div>
                {/* Mood History */}

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

          <h2 className="text-2xl font-bold text-white">
            Recent Mood History
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-8">

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-green-400 text-4xl">😊</h3>

              <p className="text-white mt-4 font-semibold">
                Monday
              </p>

              <p className="text-slate-300">
                Happy
              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-cyan-400 text-4xl">🙂</h3>

              <p className="text-white mt-4 font-semibold">
                Tuesday
              </p>

              <p className="text-slate-300">
                Calm
              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-yellow-400 text-4xl">😐</h3>

              <p className="text-white mt-4 font-semibold">
                Wednesday
              </p>

              <p className="text-slate-300">
                Neutral
              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-pink-400 text-4xl">😊</h3>

              <p className="text-white mt-4 font-semibold">
                Thursday
              </p>

              <p className="text-slate-300">
                Happy
              </p>

            </div>

          </div>

        </motion.div>

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
            🌿 Wellness Tips
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-xl font-bold text-white">
                💧 Stay Hydrated
              </h3>

              <p className="text-slate-300 mt-3">
                Drink at least 2 litres of water today.
              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-xl font-bold text-white">
                🚶 Take a Walk
              </h3>

              <p className="text-slate-300 mt-3">
                Spend 20–30 minutes walking outdoors.
              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-xl font-bold text-white">
                🧘 Relax
              </h3>

              <p className="text-slate-300 mt-3">
                Practice mindful breathing before bed.
              </p>

            </div>

          </div>

        </motion.div>

        {/* Mood Timeline */}

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
            Mood Timeline
          </h2>

          <div className="mt-8 space-y-5">

            <div className="flex justify-between">

              <span className="text-white">
                😊 Morning Mood
              </span>

              <span className="text-green-400">
                Happy
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-white">
                😌 Afternoon Mood
              </span>

              <span className="text-cyan-400">
                Calm
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-white">
                😴 Evening Mood
              </span>

              <span className="text-yellow-400">
                Relaxed
              </span>

            </div>

          </div>

        </motion.div>

      </div>

    </div>

  );

}

export default MoodCheck;