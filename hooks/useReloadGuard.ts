import { useState, useEffect } from "react";

const initBeforeUnLoad = (showExitPrompt) => {
  window.onbeforeunload = (event) => {
    if (showExitPrompt) {
      const e = event || window.event;
      e.preventDefault();
      if (e) {
        e.returnValue = "";
      }
      alert("새로고침을 하면 안됩니다");
      return "";
    }
  };
};

export const useReloadGuard = (
  bool = true
): [boolean, (bool: boolean) => void] => {
  const [showExitPrompt, setShowExitPrompt] = useState(bool);
  if (typeof window === "object") {
    window.onload = () => {
      initBeforeUnLoad(showExitPrompt);
    };
  }
  useEffect(() => {
    if (typeof window === "object") {
      initBeforeUnLoad(showExitPrompt);
    }
  }, [showExitPrompt]);

  return [showExitPrompt, setShowExitPrompt];
};
