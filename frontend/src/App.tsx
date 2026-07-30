import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./layouts/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

// Authentication Pages
import Splash from "./pages/SplashScreen";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Main Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import MoodTracker from "./pages/MoodCheck";
import Journal from "./pages/Journal";
import EmotionHistory from "./pages/EmotionHistory";
import Reports from "./pages/Reports";
import MusicTherapy from "./pages/Music";
import Meditation from "./pages/Meditation";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

// Additional Pages
import HRDashboard from "./pages/HRDashboard";
import AIChatbot from "./pages/AIChat";
import Notifications from "./pages/Notifications";
import AIAssistant from "./pages/AIAssistant";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}

        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mood" element={<MoodTracker />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/history" element={<EmotionHistory />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/music" element={<MusicTherapy />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/hr-dashboard" element={<HRDashboard />} />
          <Route path="/chatbot" element={<AIChatbot />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>

        {/* Redirect */}

        <Route path="/app" element={<Navigate to="/home" replace />} />

        {/* 404 */}

        <Route path="*" element={<AIAssistant />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;