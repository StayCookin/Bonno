import { useState } from "react";
import LandingPage from "./components/LandingPage";
import AuthExperience from "./components/AuthExperience";
import { GuestPortal } from "./components/GuestPortal";

import "./App.css";

function App() {
  const [screen, setScreen] = useState("landing");
  // values: "landing", "auth", "guest"
  return (
    <div className="app-container">

      {screen === "landing" && (
        <LandingPage 
          onNavigateToAuth={() => setScreen("auth")}
          onNavigateToGuestPortal={() => setScreen("guest")}
        />
      )}
      {screen === "auth" && (
        <AuthExperience onBackHome={() => setScreen("landing")} />
      )}

      {screen === "guest" && <GuestPortal onBack={() => setScreen("landing")} />}

    </div>
  );
}

export default App;
