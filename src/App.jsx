import { useState } from "react";
import LandingPage from "./components/LandingPage";
import GuestPortal from "./components/GuestPortal"; // make sure this file exists

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

      {screen === "auth" && <AuthPage />}

      {screen === "guest" && <GuestPortal />}

    </div>
  );
}

export default App;
