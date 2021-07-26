import React, { useEffect, useState } from "react";

const DarkMode = () => {
  const [themeMode, setThemeMode] = useState("");
  let theme;
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";

  if (localStorage) {
    theme = localStorage.getItem("theme");
    console.log(theme);
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    e.preventDefault();
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
    setThemeMode(theme, themeMode);
  };

  useEffect(() => {
    setThemeMode(!themeMode)
  }, [themeMode, theme]);

  return (
    <button
      className={theme === "dark" ? clickedClass : "light"}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
    >
      {themeMode === "dark" || theme === "dark" ? (
        <i className="fas fa-sun fa-2x"></i>
      ) : (
        <i className="fas fa-moon fa-2x"></i>
      )}
    </button>
  );
};

export default DarkMode;