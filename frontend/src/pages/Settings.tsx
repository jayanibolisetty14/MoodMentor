import { motion } from "framer-motion";
import {
  Settings as SettingsIcon,
  Bell,
  Moon,
  Globe,
  Lock,
  BrainCircuit,
  ChevronRight,
} from "lucide-react";

import settingsBg from "../assets/images/backgrounds/settings-bg.jpg";

function Settings() {
  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${settingsBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/75"></div>

      <div className="relative z-10 p-8">
        {/* Header */}
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
          "
        >
          <div className="flex items-center gap-4">
            <SettingsIcon
              size={50}
              className="text-indigo-400"
            />

            <div>
              <h1 className="text-5xl font-bold text-white">
                Settings
              </h1>

              <p className="mt-2 text-slate-300">
                Customize your MoodMentor AI experience.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Settings Grid */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Preferences */}
          <div
            className="
              rounded-3xl
              border
              border-white/20
              bg-white/10
              p-8
              backdrop-blur-xl
            "
          >
            <h2 className="text-2xl font-bold text-white">
              Preferences
            </h2>

            <div className="mt-8 space-y-6">
              {/* Dark Mode */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Moon className="text-indigo-400" />
                  <span className="text-white">
                    Dark Mode
                  </span>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="h-6 w-6"
                />
              </div>

              {/* Notifications */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Bell className="text-green-400" />
                  <span className="text-white">
                    Notifications
                  </span>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="h-6 w-6"
                />
              </div>

              {/* Language */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Globe className="text-cyan-400" />
                  <span className="text-white">
                    Language
                  </span>
                </div>

                <select
                  className="
                    rounded-lg
                    bg-slate-800
                    p-2
                    text-white
                  "
                >
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Telugu</option>
                </select>
              </div>

              {/* Privacy */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Lock className="text-red-400" />
                  <span className="text-white">
                    Privacy Settings
                  </span>
                </div>

                <ChevronRight className="text-white" />
              </div>
            </div>
          </div>

          {/* AI Preferences */}
          <div
            className="
              rounded-3xl
              border
              border-white/20
              bg-gradient-to-br
              from-indigo-600/30
              to-purple-700/30
              p-8
            "
          >
            <BrainCircuit
              size={55}
              className="text-indigo-300"
            />

            <h2 className="mt-6 text-3xl font-bold text-white">
              AI Preferences
            </h2>

            <p className="mt-6 leading-8 text-slate-200">
              Enable personalized AI mood recommendations,
              smart reminders, wellness insights and adaptive
              meditation suggestions.
            </p>

            <div className="mt-8 flex items-center justify-between">
              <span className="text-white">
                Enable AI Assistant
              </span>

              <input
                type="checkbox"
                defaultChecked
                className="h-6 w-6"
              />
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            mt-10
            rounded-3xl
            border
            border-white/20
            bg-white/10
            p-8
            backdrop-blur-xl
          "
        >
          <h2 className="text-3xl font-bold text-white">
            Account
          </h2>

          <div className="mt-8 space-y-5">
            <div className="flex items-center justify-between rounded-xl bg-white/10 p-5">
              <span className="text-white">
                Change Password
              </span>

              <ChevronRight className="text-white" />
            </div>

            <div className="flex items-center justify-between rounded-xl bg-white/10 p-5">
              <span className="text-white">
                Change Email
              </span>

              <ChevronRight className="text-white" />
            </div>

            <div className="flex items-center justify-between rounded-xl bg-white/10 p-5">
              <span className="text-white">
                Connected Devices
              </span>

              <ChevronRight className="text-white" />
            </div>

            <div className="flex items-center justify-between rounded-xl bg-white/10 p-5">
              <span className="text-white">
                Backup & Restore
              </span>

              <ChevronRight className="text-white" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Settings;