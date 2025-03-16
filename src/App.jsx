import React from 'react';
import { useState } from 'react'
import Todo from './components/Todo'
import ThemeContext from './contexts/ThemeContext';

function App() {
  const [themes, setThemes] = useState(() => JSON.parse(localStorage.getItem("theme")) || "light");
  
  // handling untuk tombol themes
  const toggleThemes = () => {
    setThemes(prevThemes => {
       return prevThemes === "light" ? "dark" : "light";
    });
  }

  // simpan theme ke localstorage
  React.useEffect(() => {
    if (themes === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    localStorage.setItem("theme", JSON.stringify(themes));
  }, [themes]);

  // membuat object themes dan toggleThemes untuk themesContextValue
  const themesContextValue = React.useMemo(() => {
    return {
      themes,
      toggleThemes
    };
  }, [themes]);

  return (
    <ThemeContext.Provider value={themesContextValue}>
      <div className={themes}>
        <Todo />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
