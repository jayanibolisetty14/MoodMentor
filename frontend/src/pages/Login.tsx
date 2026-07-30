import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  BrainCircuit,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import loginBg from "../assets/images/backgrounds/login-bg.jpg";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    localStorage.setItem("token", "moodmentor-user");
    navigate("/home");
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-cover bg-center flex items-center justify-center px-6 py-8"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" />

      {/* Purple Glow */}
      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[170px]" />

      {/* Login Card */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 60,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative z-10 w-full max-w-lg"
      >
       <div
  className="
    rounded-[40px]
    bg-[#1d1b35]/85
    backdrop-blur-2xl
    border
    border-violet-500/40
    shadow-[0_0_60px_rgba(139,92,246,0.35)]
    w-full
    max-w-[720px]
    min-h-[780px]
    px-10
    pt-8
    pb-12
    flex
    flex-col
    justify-between
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
              shadow-[0_0_45px_rgba(139,92,246,0.8)]
            "
            >
              <BrainCircuit
                size={46}
                className="text-white"
              />
            </div>
          </div>

          {/* Heading */}

          <h1 className="text-center text-5xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-3 mb-8 text-center text-lg text-slate-300">
            Login to continue your AI-powered wellness journey
          </p>

          {/* Email */}

          <div className="relative mb-4 px-1">

            <Mail
              size={22}
              className="absolute left-7 top-1/2 -translate-y-1/2 text-violet-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="
              w-full
              h-[50px]
              rounded-2xl
              border
              border-white/20
              bg-white/5
              backdrop-blur-md
              pl-14
              pr-5
              text-lg
              text-white
              placeholder:text-slate-400
              outline-none
              transition-all
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500
            "
            />

          </div>

          {/* Password */}

          <div className="relative px-1">

            <Lock
              size={22}
              className="absolute left-7 top-1/2 -translate-y-1/2 text-violet-400"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="
              w-full
              h-[50px]
              rounded-2xl
              border
              border-white/20
              bg-white/5
              backdrop-blur-md
              pl-14
              pr-14
              text-lg
              text-white
              placeholder:text-slate-400
              outline-none
              transition-all
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500
            "
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="
              absolute
              right-7
              top-1/2
              -translate-y-1/2
              text-slate-400
              hover:text-white
            "
            >
              {showPassword ? (
                <EyeOff size={22} />
              ) : (
                <Eye size={22} />
              )}
            </button>

          </div>
                    {/* Remember & Forgot */}

          <div className="mt-6 flex items-center justify-between px-1">

            <label className="flex items-center gap-3 text-base text-slate-200">

              <input
                type="checkbox"
                className="
                h-4
                w-4
                accent-violet-600
                cursor-pointer
              "
              />

              Remember Me

            </label>

            <button
              className="
              text-base
              font-medium
              text-violet-400
              transition
              hover:text-violet-300
            "
            >
              Forgot Password?
            </button>

          </div>

          {/* Login Button */}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogin}
            className="
            mt-7
            flex
            h-[50px]
            w-full
            items-center
            justify-center
            gap-4
            rounded-2xl
            bg-gradient-to-r
            from-indigo-600
            via-violet-600
            to-fuchsia-600
            text-xl
            font-bold
            text-white
            shadow-[0_15px_40px_rgba(139,92,246,0.45)]
            hover:shadow-[0_20px_50px_rgba(139,92,246,0.7)]
            transition-all
            duration-300
          "
          >
            Login

            <div
              className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-white
            "
            >
              <ArrowRight
                size={20}
                className="text-violet-700"
              />
            </div>

          </motion.button>

          {/* Divider */}

          <div className="my-7 flex items-center gap-4">

            <div className="h-px flex-1 bg-white/20"></div>

            <span className="text-sm tracking-wider text-slate-300 uppercase">
              OR CONTINUE WITH
            </span>

            <div className="h-px flex-1 bg-white/20"></div>

          </div>

          {/* Google */}

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="
            flex
            h-[50px]
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-white
            text-lg
            font-semibold
            text-slate-900
            transition
            hover:bg-slate-100
          "
          >
            <FcGoogle size={28} />

            Continue with Google

          </motion.button>

          {/* Github */}

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="
            mt-4
            flex
            h-[50px]
            w-full
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-white/20
            bg-[#0f172a]
            text-lg
            font-semibold
            text-white
            transition
            hover:bg-slate-800
          "
          >
            <FaGithub size={26} />

            Continue with GitHub

          </motion.button>
                    {/* Signup */}

          <div className="mt-8 mb-4 text-center">

            <p className="text-base text-slate-300  text-[24px]">
              Don't have an account?
            </p>

            <Link
              to="/signup"
              className="
              mt-3
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-gradient-to-r
              from-violet-600
              via-purple-600
              to-indigo-600
              px-6
              py-2
              text-base
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
               text-[22px]
              hover:shadow-[0_0_35px_rgba(139,92,246,0.6)]
            "
            >
              Create New Account

              <ArrowRight size={40} />

            </Link>

          </div>

        </div>
      </motion.div>

      {/* Decorative Glow */}

      <div
        className="
        absolute
        top-16
        left-16
        h-40
        w-40
        rounded-full
        bg-violet-500/20
        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-16
        right-16
        h-40
        w-40
        rounded-full
        bg-indigo-500/20
        blur-3xl
      "
      />

      <div
        className="
        absolute
        top-1/3
        right-1/4
        h-32
        w-32
        rounded-full
        bg-fuchsia-500/20
        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-1/4
        left-1/4
        h-36
        w-36
        rounded-full
        bg-cyan-500/20
        blur-3xl
      "
      />

    </div>
  );
}

export default Login;