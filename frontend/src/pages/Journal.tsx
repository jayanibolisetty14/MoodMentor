import { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Search,
  Calendar,
  BrainCircuit,
  Plus,
} from "lucide-react";

import journalBg from "../assets/images/backgrounds/journal-bg.jpg";

function Journal() {

  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  const [search, setSearch] = useState("");

  const recentEntries = [
    {
      date: "20 July",
      mood: "😊 Happy",
      title: "Wonderful Day",
    },
    {
      date: "19 July",
      mood: "😌 Calm",
      title: "Peaceful Evening",
    },
    {
      date: "18 July",
      mood: "😐 Neutral",
      title: "Regular Work Day",
    },
  ];

  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${journalBg})`,
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-slate-950/75"></div>

      <div className="relative z-10 p-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
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

            Personal Journal

          </h1>

          <p className="text-slate-300 mt-4 text-lg">

            Record your thoughts, emotions,
            experiences and let AI help you
            understand yourself better.

          </p>

        </motion.div>

        {/* Search */}

        <div className="mt-10 relative">

          <Search
            size={22}
            className="absolute left-5 top-4 text-slate-300"
          />

          <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search journal..."
            className="
            w-full
            rounded-xl
            pl-14
            pr-5
            py-4
            bg-white/10
            border
            border-white/20
            text-white
            placeholder:text-slate-400
            outline-none
            "
          />

        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Journal Editor */}

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

            <div className="flex justify-between items-center">

              <h2 className="text-2xl font-bold text-white">

                New Journal

              </h2>

              <BookOpen
                className="text-indigo-400"
              />

            </div>

            <input
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              placeholder="Journal Title"
              className="
              w-full
              mt-8
              rounded-xl
              p-4
              bg-white/10
              border
              border-white/20
              text-white
              placeholder:text-slate-400
              outline-none
              "
            />

            <textarea
              rows={12}
              value={entry}
              onChange={(e)=>setEntry(e.target.value)}
              placeholder="Write your thoughts..."
              className="
              w-full
              mt-6
              rounded-xl
              p-5
              bg-white/10
              border
              border-white/20
              text-white
              placeholder:text-slate-400
              outline-none
              resize-none
              "
            />

            <div className="flex gap-4 mt-8">

              <button
                className="
                px-7
                py-3
                rounded-xl
                bg-gradient-to-r
                from-indigo-600
                to-purple-600
                text-white
                font-semibold
                hover:scale-105
                duration-300
                flex
                items-center
                gap-2
                "
              >

                <Plus size={18}/>

                Save Entry

              </button>

            </div>

          </div>
                    {/* Recent Journal Entries */}

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
                Recent Entries
              </h2>

              <Calendar className="text-indigo-400"/>

            </div>

            <div className="mt-8 space-y-5">

              {recentEntries.map((item,index)=>(

                <motion.div

                  key={index}

                  whileHover={{
                    scale:1.03,
                  }}

                  className="
                  bg-white/10
                  rounded-2xl
                  p-5
                  cursor-pointer
                  "

                >

                  <div className="flex justify-between">

                    <h3 className="text-white font-semibold">

                      {item.title}

                    </h3>

                    <span className="text-slate-400">

                      {item.date}

                    </span>

                  </div>

                  <p className="text-indigo-300 mt-3">

                    {item.mood}

                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

        {/* Mood Tags */}

        <motion.div

          initial={{
            opacity:0,
            y:30,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

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

            Mood Tags

          </h2>

          <div className="flex flex-wrap gap-4 mt-8">

            {[
              "😊 Happy",
              "😌 Calm",
              "😐 Neutral",
              "😔 Sad",
              "😡 Angry",
              "😴 Tired",
              "🤩 Excited",
              "😰 Stressed",
            ].map((tag)=>(

              <button

                key={tag}

                className="
                px-5
                py-3
                rounded-full
                bg-indigo-600/30
                border
                border-indigo-400/40
                text-white
                hover:bg-indigo-600
                duration-300
                "

              >

                {tag}

              </button>

            ))}

          </div>

        </motion.div>

        {/* AI Writing Suggestions */}

        <motion.div

          initial={{
            opacity:0,
            y:40,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

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
              size={45}
              className="text-indigo-300"
            />

            <h2 className="text-3xl font-bold text-white">

              AI Writing Suggestions

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-white text-xl font-semibold">

                Gratitude

              </h3>

              <p className="text-slate-300 mt-3">

                Write three things you are thankful
                for today.

              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-white text-xl font-semibold">

                Reflection

              </h3>

              <p className="text-slate-300 mt-3">

                Describe one challenge and how you
                handled it.

              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-white text-xl font-semibold">

                Goals

              </h3>

              <p className="text-slate-300 mt-3">

                Write one goal for tomorrow that
                improves your wellbeing.

              </p>

            </div>

          </div>

        </motion.div>

        {/* Journal Statistics */}

        <motion.div

          initial={{
            opacity:0,
            y:40,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          className="
          mt-10
          grid
          md:grid-cols-4
          gap-6
          "

        >

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">

            <h3 className="text-slate-300">

              Total Entries

            </h3>

            <h1 className="text-4xl text-white font-bold mt-3">

              126

            </h1>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">

            <h3 className="text-slate-300">

              Current Streak

            </h3>

            <h1 className="text-4xl text-green-400 font-bold mt-3">

              18 Days

            </h1>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">

            <h3 className="text-slate-300">

              Positive Days

            </h3>

            <h1 className="text-4xl text-cyan-400 font-bold mt-3">

              92%

            </h1>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">

            <h3 className="text-slate-300">

              AI Score

            </h3>

            <h1 className="text-4xl text-indigo-300 font-bold mt-3">

              9.4

            </h1>

          </div>

        </motion.div>

      </div>

    </div>

  );

}

export default Journal;