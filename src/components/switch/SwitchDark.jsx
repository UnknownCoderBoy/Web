import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";

const SwitchDark = () => {
  const [isDark, setDark] = useState(
    localStorage.getItem("theme-color") === "dark"
  );

  const handleLabelClick = () => {
    if (isDark) {
      setDark(false);
      localStorage.setItem("theme-color", "light");
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
    } else {
      setDark(true);
      localStorage.setItem("theme-color", "dark");
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.remove("light");
    }
  };

  return (
    <label className={`theme-switcher-label d-flex  ${isDark ? "" : "active"}`}>
      <input
        type="checkbox"
        onClick={handleLabelClick}
        className="theme-switcher"
      />
      <div className="switch-handle">
        {isDark ? (
          <span className="light-text">
            <Sun className="filter_1" />
          </span>
        ) : (
          <span className="dark-text">
            <Moon />
          </span>
        )}
      </div>
    </label>
  );
};

export default SwitchDark;
