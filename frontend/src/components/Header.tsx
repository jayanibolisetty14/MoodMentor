import {
  Bell,
  Search,
  UserCircle,
  Sun,
} from "lucide-react";

function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700">

      <div className="flex items-center justify-between px-10 py-5">

        {/* Left */}
        <div>

          <h2 className="text-3xl font-bold text-white">
            Good Morning 👋
          </h2>

          <p className="text-slate-400 mt-1 flex items-center gap-2">

            <Sun
              size={16}
              className="text-yellow-400"
            />

            {today}

          </p>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          {/* Search */}

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-3 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="
              bg-slate-800
              border
              border-slate-700
              rounded-xl
              pl-11
              pr-4
              py-3
              text-white
              w-72
              outline-none
              focus:border-indigo-500
              "
            />

          </div>

          {/* Notification */}

          <button
            className="
            w-12
            h-12
            rounded-full
            bg-slate-800
            hover:bg-indigo-600
            transition
            flex
            items-center
            justify-center
            "
          >
            <Bell size={20} />
          </button>

          {/* User */}

          <button
            className="
            flex
            items-center
            gap-3
            bg-slate-800
            rounded-xl
            px-4
            py-2
            hover:bg-slate-700
            transition
            "
          >

            <UserCircle
              size={36}
              className="text-indigo-400"
            />

            <div className="text-left">

              <h4 className="font-semibold">
                Dhanush
              </h4>

              <p className="text-xs text-slate-400">
                MoodMentor User
              </p>

            </div>

          </button>

        </div>

      </div>

    </header>
  );
}

export default Header;