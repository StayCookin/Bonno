import { useState } from "react";
import LandingPage from "./components/LandingPage";
import AuthPage from "./pages/AuthPage";
import GuestPortal from "./components/GuestPortal";
import { Dashboard } from "./components/Dashboard";

import "./index.css";

function App() {
  const [screen, setScreen] = useState("landing");
  const [authMode, setAuthMode] = useState("login");
  const [previousScreen, setPreviousScreen] = useState("landing");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // screens: landing | auth | guest | dashboard
  
  const navigateToGuest = (from) => {
    setPreviousScreen(from);
    setScreen("guest");
  };
  
  return (
    <div className="app-container">

      {screen === "landing" && (
        <LandingPage 
          onNavigateToAuth={(mode = "login") => {
            setAuthMode(mode);
            setScreen("auth");
          }}
          onNavigateToGuestPortal={() => navigateToGuest("landing")}
        />
      )}
      {screen === "auth" && (
        <AuthPage
          initialMode={authMode}
          onModeChange={setAuthMode}
          onClose={() => setScreen("landing")}
          onNavigateToGuestPortal={() => {
            setIsAuthenticated(true);
            navigateToGuest("auth");
          }}
        />
      )}

      {screen === "guest" && (
        <GuestPortal 
          onBack={() => {
            // If authenticated, go back to auth (which shows dashboard)
            // Otherwise go back to landing
            setScreen(previousScreen === "auth" ? "auth" : "landing");
          }} 
          fromDashboard={previousScreen === "auth"}
        />
      )}

    </div>
  );
}

export default App;
