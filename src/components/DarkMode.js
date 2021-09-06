import React, { useState, useEffect } from "react";

const DarkMode = () => {
  const [themeMode, setThemeMode] = useState("light");
  // const [value, setValue] = useState("")
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
    // e.preventDefault();
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
    setThemeMode(theme);
  };

  // useEffect(() => {
  //   setThemeMode(!themeMode);
  // }, [themeMode]);

  return (
    <button
      className={theme === "dark" ? clickedClass : "clicked"}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
    >
      {themeMode === "light" || theme === "light" ? (
        <i className="fas fa-moon fa-2x"></i>
      ) : (
        <i className="fas fa-sun fa-2x"></i>
      )}
    </button>
  );
};

export default DarkMode;
