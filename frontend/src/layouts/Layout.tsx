import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-950">
      {/* Sidebar */}
      <div className="w-[250px] h-screen shrink-0">
        <Sidebar />
      </div>

      {/* Right Side */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Navbar */}
        <div className="h-20 shrink-0">
          <Navbar />
        </div>

        {/* Content */}
        <main className="flex-1 overflow-y-auto bg-slate-950 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}