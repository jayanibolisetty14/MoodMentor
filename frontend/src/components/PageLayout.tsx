import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";

function PageLayout() {
  return (
    <div className="flex bg-slate-950 min-h-screen">

      <Navbar />

      <div className="ml-72 flex-1">

        <Header />

        <main className="p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default PageLayout;