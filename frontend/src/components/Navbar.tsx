import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Bell,
  Settings,
  Moon,
  Sun,
  ChevronDown,
  User,
  LogOut,
} from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <header className="sticky top-0 z-40 h-20 bg-[#111827]/95 backdrop-blur-xl border-b border-white/10">

      <div className="flex h-full items-center justify-end px-8">

        {/* Right Side */}

        <div className="flex items-center gap-5">

          {/* Dark / Light Mode */}

          <motion.button
            whileHover={{ rotate: 20 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              bg-slate-800
              hover:bg-violet-600
              transition
            "
          >
            {darkMode ? (
              <Sun
                size={20}
                className="text-yellow-300"
              />
            ) : (
              <Moon
                size={20}
                className="text-white"
              />
            )}
          </motion.button>

          {/* Settings */}

          <motion.button
            whileHover={{ rotate: 20 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/settings")}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              bg-slate-800
              hover:bg-violet-600
              transition
            "
          >
            <Settings
              size={20}
              className="text-white"
            />
          </motion.button>

          {/* Notifications */}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/notifications")}
            className="
              relative
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              bg-slate-800
              hover:bg-violet-600
              transition
            "
          >
            <Bell
              size={20}
              className="text-white"
            />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>

          </motion.button>

          {/* Profile */}

          <div className="relative">

            <motion.div
              whileHover={{ scale: 1.03 }}
              onClick={() => setShowProfile(!showProfile)}
              className="
                flex
                cursor-pointer
                items-center
                gap-3
                rounded-2xl
                border
                border-white/10
                bg-slate-900
                px-4
                py-2
              "
            >

              <img
                src="https://i.pravatar.cc/150?img=15"
                alt="Profile"
                className="h-11 w-11 rounded-full border-2 border-violet-500"
              />

              <div>

                <h3 className="text-sm font-semibold text-white">
                  Dhanush
                </h3>

                <p className="text-xs text-slate-400">
                  Premium Member
                </p>

              </div>

              <ChevronDown
                size={18}
                className={`transition-transform text-slate-400 ${
                  showProfile ? "rotate-180" : ""
                }`}
              />

            </motion.div>
                        {/* Profile Dropdown */}

            {showProfile && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="
                  absolute
                  right-0
                  top-16
                  w-60
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#1e293b]
                  shadow-2xl
                "
              >
                {/* My Profile */}

                <button
                  onClick={() => {
                    navigate("/profile");
                    setShowProfile(false);
                  }}
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    px-5
                    py-4
                    text-white
                    transition
                    hover:bg-violet-600
                  "
                >
                  <User size={18} />
                  My Profile
                </button>

                {/* Settings */}

                <button
                  onClick={() => {
                    navigate("/settings");
                    setShowProfile(false);
                  }}
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    px-5
                    py-4
                    text-white
                    transition
                    hover:bg-violet-600
                  "
                >
                  <Settings size={18} />
                  Settings
                </button>

                {/* Logout */}

                <button
                  onClick={handleLogout}
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    px-5
                    py-4
                    text-red-400
                    transition
                    hover:bg-red-600
                    hover:text-white
                  "
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </motion.div>
            )}

          </div>

        </div>

      </div>

    </header>
  );
}