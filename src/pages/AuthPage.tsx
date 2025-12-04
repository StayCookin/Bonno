import { useState } from "react";
import AuthExperience from "../components/AuthExperience";

export default function AuthPage({ initialMode = "login", onModeChange, onClose }) {
  const [mode, setMode] = useState(initialMode);

  return (
    <AuthExperience
      initialMode={mode}
      onBackHome={onClose}
      onModeChange={(value) => {
        setMode(value);
        onModeChange?.(value);
      }}
    />
  );
}
