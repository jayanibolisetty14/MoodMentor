import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import signupBg from "../assets/images/backgrounds/signup-bg.jpg";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Account Created Successfully!");

    navigate("/login");
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-8"
      style={{
        backgroundImage: `url(${signupBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-[720px]"
      >
        <div
          className="
          rounded-[35px]
          bg-[#221f3dcc]
          backdrop-blur-2xl
          border
          border-violet-500/40
          shadow-[0_0_50px_rgba(139,92,246,.45)]
          px-10
          py-8
        "
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div
              className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-indigo-600
              via-purple-600
              to-fuchsia-600
              shadow-[0_0_40px_rgba(139,92,246,.8)]
            "
            >
              <BrainCircuit className="text-white" size={42} />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-center text-5xl font-bold text-white">
            Create Account
          </h1>

          <p className="text-center text-slate-300 text-xl mt-2 mb-8">
            Join MoodMentor AI and begin your wellness journey
          </p>

          {/* Full Name */}
          <div className="relative px-2 mb-4">
            <User
              className="absolute left-8 top-1/2 -translate-y-1/2 text-violet-400"
              size={24}
            />

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
              w-full
              h-[50px]
              rounded-2xl
              border
              border-white/20
              bg-white/5
              backdrop-blur-md
              pl-16
              pr-4
              text-lg
              text-white
              placeholder:text-slate-400
              outline-none
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500
            "
            />
          </div>

          {/* Email */}
          <div className="relative px-2 mb-4">
            <Mail
              className="absolute left-8 top-1/2 -translate-y-1/2 text-violet-400"
              size={24}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
              w-full
              h-[50px]
              rounded-2xl
              border
              border-white/20
              bg-white/5
              backdrop-blur-md
              pl-16
              pr-4
              text-lg
              text-white
              placeholder:text-slate-400
              outline-none
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500
            "
            />
          </div>

          {/* Password */}
          <div className="relative px-2 mb-4">
            <Lock
              className="absolute left-8 top-1/2 -translate-y-1/2 text-violet-400"
              size={24}
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
              w-full
              h-[50px]
              rounded-2xl
              border
              border-white/20
              bg-white/5
              backdrop-blur-md
              pl-16
              pr-16
              text-lg
              text-white
              placeholder:text-slate-400
              outline-none
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500
            "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-8 top-1/2 -translate-y-1/2 text-slate-400"
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative px-2 mb-5">
            <Lock
              className="absolute left-8 top-1/2 -translate-y-1/2 text-violet-400"
              size={24}
            />

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="
              w-full
              h-[50px]
              rounded-2xl
              border
              border-white/20
              bg-white/5
              backdrop-blur-md
              pl-16
              pr-16
              text-lg
              text-white
              placeholder:text-slate-400
              outline-none
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500
            "
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-8 top-1/2 -translate-y-1/2 text-slate-400"
            >
              {showConfirm ? <EyeOff size={22} /> : <Eye size={22} />}
            </button>
          </div>

          {/* Terms */}
          <label className="flex items-center gap-3 text-white text-lg mb-6 px-2">
            <input type="checkbox" className="accent-violet-500 w-5 h-5" />
            I agree to the Terms & Conditions
          </label>

          {/* Create Button */}
          <div className="px-2">
            <button
              onClick={handleSignup}
              className="
              w-full
              h-[55px]
              rounded-2xl
              bg-gradient-to-r
              from-indigo-600
              via-purple-600
              to-fuchsia-600
              text-white
              text-2xl
              font-bold
              flex
              justify-center
              items-center
              gap-4
              hover:scale-[1.02]
              transition
            "
            >
              Create Account

              <div className="bg-white rounded-full p-2">
                <ArrowRight className="text-violet-600" />
              </div>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6 px-2">
            <div className="flex-1 h-px bg-white/20"></div>

            <span className="mx-4 text-slate-300 text-lg">
              OR CONTINUE WITH
            </span>

            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          {/* Google */}
          <div className="px-2">
            <button className="w-full h-[52px] rounded-2xl bg-white text-black flex items-center justify-center gap-3 text-xl font-semibold hover:bg-gray-100">
              <FcGoogle size={28} />
              Continue with Google
            </button>
          </div>

          {/* Github */}
          <div className="px-2 mt-4">
            <button className="w-full h-[52px] rounded-2xl bg-[#111827] text-white flex items-center justify-center gap-3 text-xl font-semibold hover:bg-[#1e293b]">
              <FaGithub size={26} />
              Continue with GitHub
            </button>
          </div>

          {/* Login */}
          <div className="mt-8 text-center">
            <p className="text-slate-300 text-xl">
              Already have an account?
            </p>

            <Link
              to="/login"
              className="inline-flex items-center gap-2 mt-2 text-violet-400 font-bold text-2xl hover:text-white"
            >
              Login
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Signup;