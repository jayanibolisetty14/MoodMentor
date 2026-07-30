import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import {
  BrainCircuit,
  Send,
  Bot,
  User,
  Sparkles,
  Paperclip,
  Mic,
  Clock,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

interface Message {
  id: number;
  sender: "user" | "ai";
  text: string;
  time: string;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text: "👋 Hello! I'm MoodMentor AI. I'm here to help you improve your mental wellness, reduce stress, suggest meditation, analyze moods and answer your questions. How are you feeling today?",
      time: "Now",
    },
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const getTime = () => {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const aiReply = (message: string) => {
    const text = message.toLowerCase();

    if (text.includes("sad") || text.includes("depressed")) {
      return "💙 I'm sorry you're feeling this way. Try taking a short walk, listening to calming music, or writing your thoughts in your journal. Remember, difficult emotions are temporary.";
    }

    if (text.includes("happy") || text.includes("great")) {
      return "😊 That's wonderful! Keep doing what makes you happy. Celebrate your progress and carry this positive energy into your day.";
    }

    if (text.includes("stress") || text.includes("anxiety")) {
      return "🧘 Try a five-minute breathing exercise. Inhale slowly for four seconds, hold for four seconds, and exhale for six seconds.";
    }

    if (text.includes("sleep")) {
      return "😴 For better sleep, avoid screens before bedtime, keep your room cool and dark, and try relaxing music.";
    }

    if (text.includes("music")) {
      return "🎵 I recommend piano music, nature sounds, lo-fi beats, and calm instrumental playlists.";
    }

    if (text.includes("journal")) {
      return "📖 Journal Prompt: What made you smile today? What challenged you today? What are you grateful for?";
    }

    if (text.includes("motivate")) {
      return "💪 Progress is made one small step at a time. Believe in yourself—you've already come this far!";
    }

    if (text.includes("meditation")) {
      return "🧘 A 10-minute mindfulness meditation can help calm your mind and improve your focus.";
    }

    return "🤖 Thank you for sharing. I'm always here to support your mental wellness. Tell me more about how you're feeling.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: input,
      time: getTime(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now() + 1,
        sender: "ai",
        text: aiReply(input),
        time: getTime(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setTyping(false);
    }, 1200);

    setInput("");
  };
    const quickPrompts = [
    "😊 I'm feeling happy",
    "😔 I'm feeling sad",
    "🧘 Suggest meditation",
    "🎵 Recommend music",
    "😴 Sleep tips",
    "💪 Motivate me",
  ];

  return (
    <div className="space-y-6">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          rounded-3xl
          bg-gradient-to-r
          from-violet-700
          via-indigo-700
          to-purple-700
          p-8
          shadow-2xl
        "
      >

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-5">

            <div className="rounded-3xl bg-white/20 p-4">
              <BrainCircuit size={50} className="text-white" />
            </div>

            <div>

              <h1 className="text-4xl font-bold text-white">
                MoodMentor AI
              </h1>

              <p className="mt-2 text-violet-100 text-lg">
                Your personal AI companion for mental wellness.
              </p>

            </div>

          </div>

          <Sparkles
            size={42}
            className="text-yellow-300"
          />

        </div>

      </motion.div>

      {/* Feature Cards */}

      <div className="grid gap-6 md:grid-cols-3">

        <motion.div
          whileHover={{ y: -5 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >

          <Clock
            size={38}
            className="text-cyan-400"
          />

          <h2 className="mt-5 text-xl font-bold text-white">
            24/7 Support
          </h2>

          <p className="mt-3 text-slate-300">
            Chat with your AI assistant anytime whenever you need emotional support.
          </p>

        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >

          <ShieldCheck
            size={38}
            className="text-green-400"
          />

          <h2 className="mt-5 text-xl font-bold text-white">
            Secure & Private
          </h2>

          <p className="mt-3 text-slate-300">
            Your conversations stay private and are designed to support your wellbeing.
          </p>

        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >

          <Lightbulb
            size={38}
            className="text-yellow-400"
          />

          <h2 className="mt-5 text-xl font-bold text-white">
            Smart Suggestions
          </h2>

          <p className="mt-3 text-slate-300">
            Receive personalized wellness tips, meditation ideas and motivational advice.
          </p>

        </motion.div>

      </div>

      {/* Chat Box */}

      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-slate-900
          shadow-2xl
          overflow-hidden
        "
      >

        {/* Chat Header */}

        <div className="flex items-center justify-between border-b border-white/10 bg-slate-800 px-6 py-5">

          <div className="flex items-center gap-3">

            <Bot
              size={30}
              className="text-violet-400"
            />

            <div>

              <h2 className="text-xl font-bold text-white">
                AI Chat
              </h2>

              <p className="text-sm text-slate-400">
                Online
              </p>

            </div>

          </div>

          <span className="rounded-full bg-green-500 px-3 py-1 text-xs text-white">
            Active
          </span>

        </div>

        {/* Messages */}

        <div className="h-[500px] overflow-y-auto p-6 space-y-5"></div>
                {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${
              message.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`flex max-w-[80%] gap-3 ${
                message.sender === "user"
                  ? "flex-row-reverse"
                  : ""
              }`}
            >
              {/* Avatar */}

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  message.sender === "user"
                    ? "bg-violet-600"
                    : "bg-slate-700"
                }`}
              >
                {message.sender === "user" ? (
                  <User size={22} className="text-white" />
                ) : (
                  <Bot size={22} className="text-cyan-300" />
                )}
              </div>

              {/* Message */}

              <div
                className={`rounded-3xl px-5 py-4 ${
                  message.sender === "user"
                    ? "bg-violet-600 text-white"
                    : "bg-slate-800 text-slate-200"
                }`}
              >
                <p className="leading-7 whitespace-pre-wrap">
                  {message.text}
                </p>

                <p
                  className={`mt-3 text-xs ${
                    message.sender === "user"
                      ? "text-violet-100"
                      : "text-slate-400"
                  }`}
                >
                  {message.time}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Typing Animation */}

        {typing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-700">
              <Bot size={22} className="text-cyan-300" />
            </div>

            <div className="rounded-3xl bg-slate-800 px-5 py-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 animate-bounce rounded-full bg-violet-400"></span>
                <span
                  className="h-3 w-3 animate-bounce rounded-full bg-violet-400"
                  style={{ animationDelay: "0.15s" }}
                ></span>
                <span
                  className="h-3 w-3 animate-bounce rounded-full bg-violet-400"
                  style={{ animationDelay: "0.3s" }}
                ></span>
              </div>
            </div>
          </motion.div>
        )}

        <div ref={chatEndRef}></div>

      </div>

      {/* Quick Prompts */}

      <div className="border-t border-white/10 bg-slate-800 px-6 py-4">

        <div className="mb-4 flex flex-wrap gap-3">

          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => setInput(prompt)}
              className="
                rounded-full
                bg-violet-600/20
                px-4
                py-2
                text-sm
                text-violet-200
                transition
                hover:bg-violet-600
                hover:text-white
              "
            >
              {prompt}
            </button>
          ))}

        </div>
                {/* Input Area */}

        <div className="flex items-center gap-4">

          {/* Attachment */}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-slate-700
              text-slate-300
              transition
              hover:bg-violet-600
              hover:text-white
            "
          >
            <Paperclip size={20} />
          </motion.button>

          {/* Message Input */}

          <input
            type="text"
            value={input}
            placeholder="Type your message..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            className="
              flex-1
              rounded-2xl
              border
              border-white/10
              bg-slate-900
              px-5
              py-4
              text-white
              outline-none
              placeholder:text-slate-500
              focus:border-violet-500
            "
          />

          {/* Voice */}

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-slate-700
              text-slate-300
              transition
              hover:bg-cyan-600
              hover:text-white
            "
          >
            <Mic size={20} />
          </motion.button>

          {/* Send */}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={sendMessage}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-r
              from-violet-600
              to-indigo-600
              text-white
              shadow-lg
              transition
            "
          >
            <Send size={20} />
          </motion.button>

        </div>

      </div>

      {/* Footer */}

      <div className="text-center text-sm text-slate-500">
        MoodMentor AI provides wellness guidance and emotional support.
        For emergencies, please contact a qualified mental health professional.
      </div>

    </div>
  );
}