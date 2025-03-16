import React from "react";
import ThemeContext from "../contexts/ThemeContext";

function ToggleTheme() {
    const { themes, toggleThemes } = React.useContext(ThemeContext);

    return (
        <button onClick={toggleThemes} className="dark-mode-toggle">
            <div className="icon">
                {themes === "light" ? <span>☀️</span> : <span>🌙</span>}
            </div>
        </button>
    );
}

export default ToggleTheme;