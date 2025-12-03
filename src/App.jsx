import { useState } from "react";
import LandingPage from "./components/LandingPage";
import AuthPage from "./pages/AuthPage";
import { GuestPortal } from "./components/GuestPortal";

import "./index.css";

function App() {
  const [screen, setScreen] = useState("landing");
  const [authMode, setAuthMode] = useState("login");
  // screens: landing | auth | guest
  return (
    <div className="app-container">

      {screen === "landing" && (
        <LandingPage 
          onNavigateToAuth={(mode = "login") => {
            setAuthMode(mode);
            setScreen("auth");
          }}
          onNavigateToGuestPortal={() => setScreen("guest")}
        />
      )}
      {screen === "auth" && (
        <AuthPage
          initialMode={authMode}
          onModeChange={setAuthMode}
          onClose={() => setScreen("landing")}
        />
      )}

      {screen === "guest" && <GuestPortal onBack={() => setScreen("landing")} />}

    </div>
  );
}

export default App;
