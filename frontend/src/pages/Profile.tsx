import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Edit,
  Trophy,
  Target,
  Activity,
} from "lucide-react";

import profileBg from "../assets/images/backgrounds/profile-bg.jpg";

function Profile() {

  const achievements = [
    {
      title: "7 Day Streak",
      icon: "🔥",
    },
    {
      title: "50 Journals",
      icon: "📖",
    },
    {
      title: "100 Meditations",
      icon: "🧘",
    },
    {
      title: "Mood Master",
      icon: "😊",
    },
  ];

  return (

    <div
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${profileBg})`,
      }}
    >

      {/* Overlay */}

      <div className="absolute inset-0 bg-slate-950/75"></div>

      <div className="relative z-10 p-8">

        {/* Profile Header */}

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
          "
        >

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Avatar */}

            <div
              className="
              w-40
              h-40
              rounded-full
              bg-gradient-to-br
              from-indigo-500
              to-purple-600
              flex
              items-center
              justify-center
              shadow-2xl
              "
            >

              <User
                size={80}
                className="text-white"
              />

            </div>

            {/* Details */}

            <div className="flex-1">

              <h1 className="text-5xl font-bold text-white">

                Dhanush Kumar

              </h1>

              <p className="text-slate-300 mt-3">

                Mental Wellness Explorer

              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">

                  <Mail className="text-indigo-400"/>

                  <span className="text-white">

                    dhanush@example.com

                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <Phone className="text-green-400"/>

                  <span className="text-white">

                    +91 9876543210

                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <MapPin className="text-pink-400"/>

                  <span className="text-white">

                    Hyderabad, India

                  </span>

                </div>

              </div>

            </div>

            {/* Edit */}

            <button
              className="
              px-6
              py-3
              rounded-xl
              bg-gradient-to-r
              from-indigo-600
              to-purple-600
              text-white
              flex
              items-center
              gap-2
              hover:scale-105
              duration-300
              "
            >

              <Edit size={18}/>

              Edit Profile

            </button>

          </div>

        </motion.div>

        {/* Statistics */}

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">

            <Activity
              className="text-green-400"
              size={35}
            />

            <h3 className="text-slate-300 mt-4">

              Mood Checks

            </h3>

            <h1 className="text-4xl text-white font-bold mt-2">

              156

            </h1>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">

            <Target
              className="text-indigo-400"
              size={35}
            />

            <h3 className="text-slate-300 mt-4">

              Goals Completed

            </h3>

            <h1 className="text-4xl text-green-400 font-bold mt-2">

              89%

            </h1>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">

            <Trophy
              className="text-yellow-400"
              size={35}
            />

            <h3 className="text-slate-300 mt-4">

              Achievements

            </h3>

            <h1 className="text-4xl text-white font-bold mt-2">

              24

            </h1>

          </div>

          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6">

            <User
              className="text-purple-400"
              size={35}
            />

            <h3 className="text-slate-300 mt-4">

              Wellness Score

            </h3>

            <h1 className="text-4xl text-cyan-400 font-bold mt-2">

              94%

            </h1>

          </div>

        </div>
                {/* Achievements & Goals */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* Achievements */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
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

              <Trophy
                className="text-yellow-400"
                size={35}
              />

              <h2 className="text-2xl font-bold text-white">

                Achievements

              </h2>

            </div>

            <div className="grid grid-cols-2 gap-5 mt-8">

              {achievements.map((item,index)=>(

                <motion.div

                  key={index}

                  whileHover={{ scale:1.05 }}

                  className="
                  bg-white/10
                  rounded-2xl
                  p-6
                  text-center
                  "

                >

                  <div className="text-5xl">

                    {item.icon}

                  </div>

                  <h3 className="text-white font-semibold mt-4">

                    {item.title}

                  </h3>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* Goals */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
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

              <Target
                className="text-indigo-400"
                size={35}
              />

              <h2 className="text-2xl font-bold text-white">

                Personal Goals

              </h2>

            </div>

            <div className="space-y-6 mt-8">

              <div>

                <div className="flex justify-between">

                  <span className="text-white">

                    Daily Meditation

                  </span>

                  <span className="text-green-400">

                    90%

                  </span>

                </div>

                <div className="w-full h-3 bg-slate-700 rounded-full mt-2">

                  <div className="w-[90%] h-3 bg-green-500 rounded-full"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between">

                  <span className="text-white">

                    Journal Writing

                  </span>

                  <span className="text-cyan-400">

                    75%

                  </span>

                </div>

                <div className="w-full h-3 bg-slate-700 rounded-full mt-2">

                  <div className="w-3/4 h-3 bg-cyan-500 rounded-full"></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between">

                  <span className="text-white">

                    Mood Tracking

                  </span>

                  <span className="text-indigo-400">

                    98%

                  </span>

                </div>

                <div className="w-full h-3 bg-slate-700 rounded-full mt-2">

                  <div className="w-[98%] h-3 bg-indigo-500 rounded-full"></div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Activity Timeline */}

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

            Recent Activity

          </h2>

          <div className="mt-8 space-y-6">

            <div className="flex justify-between items-center bg-white/10 rounded-xl p-5">

              <div>

                <h3 className="text-white font-semibold">

                  😊 Mood Check Completed

                </h3>

                <p className="text-slate-300">

                  Today • 09:30 AM

                </p>

              </div>

            </div>

            <div className="flex justify-between items-center bg-white/10 rounded-xl p-5">

              <div>

                <h3 className="text-white font-semibold">

                  📖 Journal Added

                </h3>

                <p className="text-slate-300">

                  Yesterday • 08:15 PM

                </p>

              </div>

            </div>

            <div className="flex justify-between items-center bg-white/10 rounded-xl p-5">

              <div>

                <h3 className="text-white font-semibold">

                  🧘 Meditation Session

                </h3>

                <p className="text-slate-300">

                  Yesterday • 06:45 AM

                </p>

              </div>

            </div>

            <div className="flex justify-between items-center bg-white/10 rounded-xl p-5">

              <div>

                <h3 className="text-white font-semibold">

                  🎵 Relaxing Music Played

                </h3>

                <p className="text-slate-300">

                  2 Days Ago

                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </div>

  );

}

export default Profile;