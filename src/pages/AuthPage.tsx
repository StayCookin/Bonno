import { useState } from "react";
import AuthExperience from "../components/AuthExperience";

export default function AuthPage({ initialMode = "login", onModeChange, onClose, onNavigateToGuestPortal }) {
  const [mode, setMode] = useState(initialMode);

  return (
    <AuthExperience
      initialMode={mode}
      onBackHome={onClose}
      onNavigateToGuestPortal={onNavigateToGuestPortal}
      onModeChange={(value) => {
        setMode(value);
        onModeChange?.(value);
      }}
    />
  );
}
