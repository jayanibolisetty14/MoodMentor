import { motion } from "framer-motion";
import {
  Music,
  Play,
  Heart,
  Headphones,
  BrainCircuit,
} from "lucide-react";

import musicBg from "../assets/images/backgrounds/music-bg.jpg";

function MusicTherapy() {

  const categories = [
    {
      title: "Relax",
      emoji: "🌿",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Focus",
      emoji: "🎯",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Sleep",
      emoji: "🌙",
      color: "from-purple-500 to-violet-600",
    },
    {
      title: "Motivation",
      emoji: "🔥",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (

    <div
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${musicBg})`,
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

            Music Therapy

          </h1>

          <p className="text-slate-300 mt-4 text-lg">

            Relax your mind with AI-curated playlists
            designed to improve your emotional wellness.

          </p>

        </motion.div>

        {/* Categories */}

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          {categories.map((item,index)=>(

            <motion.div

              key={index}

              whileHover={{
                scale:1.05
              }}

              className={`
              rounded-3xl
              p-8
              text-center
              bg-gradient-to-br
              ${item.color}
              shadow-xl
              cursor-pointer
              `}
            >

              <div className="text-6xl">

                {item.emoji}

              </div>

              <h2 className="text-white text-2xl font-bold mt-6">

                {item.title}

              </h2>

            </motion.div>

          ))}

        </div>

        {/* Music Player */}

        <div className="grid lg:grid-cols-3 gap-8 mt-10">

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

              <Headphones
                className="text-indigo-400"
                size={40}
              />

              <div>

                <h2 className="text-2xl font-bold text-white">

                  Now Playing

                </h2>

                <p className="text-slate-300">

                  Peaceful Rain Meditation

                </p>

              </div>

            </div>

            <div className="mt-10">

              <div className="w-full h-2 bg-slate-700 rounded-full">

                <div className="w-2/5 h-2 bg-indigo-500 rounded-full"></div>

              </div>

            </div>

            <div className="flex justify-center mt-10">

              <button
                className="
                w-20
                h-20
                rounded-full
                bg-gradient-to-r
                from-indigo-600
                to-purple-600
                flex
                items-center
                justify-center
                hover:scale-110
                duration-300
                "
              >

                <Play
                  size={35}
                  className="text-white"
                />

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

              AI Recommendation

            </h2>

            <p className="text-slate-200 leading-8 mt-6">

              Based on today's mood,
              relaxing instrumental music
              is recommended to reduce stress
              and improve concentration.

            </p>

          </div>

        </div>
                {/* Favourite Playlists */}

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

            <Heart
              className="text-pink-400"
              size={35}
            />

            <h2 className="text-2xl font-bold text-white">

              Favourite Playlists

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-xl text-white font-semibold">

                🌿 Calm Nature

              </h3>

              <p className="text-slate-300 mt-3">

                Rain • Birds • Forest

              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-xl text-white font-semibold">

                🎹 Piano Relaxation

              </h3>

              <p className="text-slate-300 mt-3">

                Soft instrumental piano

              </p>

            </div>

            <div className="bg-white/10 rounded-2xl p-6">

              <h3 className="text-xl text-white font-semibold">

                🌙 Deep Sleep

              </h3>

              <p className="text-slate-300 mt-3">

                Calm ambient sounds

              </p>

            </div>

          </div>

        </motion.div>

        {/* Recommended Songs */}

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

            Recommended For You

          </h2>

          <div className="space-y-5 mt-8">

            <div className="flex justify-between items-center bg-white/10 rounded-xl p-5">

              <div>

                <h3 className="text-white font-semibold">

                  Peaceful Piano

                </h3>

                <p className="text-slate-300">

                  12 min

                </p>

              </div>

              <Play className="text-indigo-300 cursor-pointer"/>

            </div>

            <div className="flex justify-between items-center bg-white/10 rounded-xl p-5">

              <div>

                <h3 className="text-white font-semibold">

                  Ocean Waves

                </h3>

                <p className="text-slate-300">

                  18 min

                </p>

              </div>

              <Play className="text-indigo-300 cursor-pointer"/>

            </div>

            <div className="flex justify-between items-center bg-white/10 rounded-xl p-5">

              <div>

                <h3 className="text-white font-semibold">

                  Meditation Bells

                </h3>

                <p className="text-slate-300">

                  20 min

                </p>

              </div>

              <Play className="text-indigo-300 cursor-pointer"/>

            </div>

          </div>

        </motion.div>

        {/* Listening Statistics */}

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">

            <Music
              className="text-indigo-400"
              size={35}
            />

            <h3 className="text-slate-300 mt-4">

              Tracks Played

            </h3>

            <h1 className="text-4xl text-white font-bold mt-2">

              186

            </h1>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">

            <Headphones
              className="text-green-400"
              size={35}
            />

            <h3 className="text-slate-300 mt-4">

              Listening Time

            </h3>

            <h1 className="text-4xl text-green-400 font-bold mt-2">

              82 hrs

            </h1>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">

            <Heart
              className="text-pink-400"
              size={35}
            />

            <h3 className="text-slate-300 mt-4">

              Favourite Songs

            </h3>

            <h1 className="text-4xl text-white font-bold mt-2">

              34

            </h1>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">

            <BrainCircuit
              className="text-purple-400"
              size={35}
            />

            <h3 className="text-slate-300 mt-4">

              Wellness Impact

            </h3>

            <h1 className="text-4xl text-cyan-400 font-bold mt-2">

              +23%

            </h1>

          </div>

        </div>

      </div>

    </div>

  );

}

export default MusicTherapy;