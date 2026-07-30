import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Home,
  Smile,
  BookOpen,
  History,
  BarChart3,
  Music4,
  Heart,
  Bell,
  Bot,
  LogOut,
} from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Home", icon: Home, path: "/home" },
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Mood Tracker", icon: Smile, path: "/mood" },
  { name: "Journal", icon: BookOpen, path: "/journal" },
  { name: "History", icon: History, path: "/history" },
  { name: "Reports", icon: BarChart3, path: "/reports" },
  { name: "Music", icon: Music4, path: "/music" },
  { name: "Meditation", icon: Heart, path: "/meditation" },
  { name: "AI Assistant", icon: Bot, path: "/assistant" },
  { name: "Notifications", icon: Bell, path: "/notifications" },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <aside
  className="
      w-full
      h-full
      bg-[#111827]
      border-r
      border-white/10
      flex
      flex-col
    "
>
      {/* Glow */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-violet-600/20 to-transparent blur-3xl" />

      {/* Logo */}
      <div className="relative h-24 flex items-center justify-center border-b border-white/10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 flex items-center justify-center shadow-xl shadow-violet-500/30">
            <span className="text-white text-xl">🧠</span>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">
              Mood
              <span className="text-violet-400">Mentor</span>
            </h1>

            <p className="text-base text-slate-400 text-[22px]">
              AI Wellness
            </p>
          </div>
        </motion.div>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto px-4 py-8 flex flex-col gap-[20px]">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink key={item.path} to={item.path}>
              {({ isActive }) => (
                <motion.div
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.97 }}
                  className={`group relative mb-4 flex items-center gap-5 rounded-2xl px-5 py-4 transition-all duration-300${
                    isActive
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-xl shadow-violet-600/30"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSidebar"
                      className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-white"
                    />
                  )}

                  <div
                    className={`rounded-2xl p-3 transition ${
                      isActive
                        ? "bg-white/20"
                        : "bg-slate-800 group-hover:bg-violet-600"
                    }`}
                  >
                    <Icon size={28} />
                  </div>

                  <span className="text-xl font-semibold tracking-wide">
                    {item.name}
                  </span>
                </motion.div>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Bottom Card */}
      <div className="p-5 border-t border-white/10">
        <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 p-4">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/100"
              className="h-12 w-12 rounded-full border-2 border-white"
              alt="Profile"
            />

            <div>
              <h2 className="font-semibold text-white">
                Welcome 👋
              </h2>

              <p className="text-sm text-violet-100">
                Stay Positive Today
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white/15 py-3 text-white transition-all duration-300 hover:bg-red-500 hover:scale-105"
          >
            <LogOut size={20} />
            <span className="text-base font-semibold">
              Logout
            </span>
          </button>
        </div>

        <p className="mt-5 text-center text-xs text-slate-500">
          MoodMentor AI v1.0
        </p>
      </div>
    </aside>
  );
}