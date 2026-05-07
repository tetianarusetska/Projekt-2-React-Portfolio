import { useState } from "react";
import ThemeContext from "../contexts/ThemeContext.js";
import { darkTheme, lightTheme } from "../theme/theme.js";

export default function Contexts({ children }) {
    const [theme, setTheme] = useState(darkTheme);

    function toggleTheme() {
        setTheme(prev => {
            const newTheme = prev.name === "dark" ? lightTheme : darkTheme;

            document.documentElement.setAttribute(
                "data-theme",
                newTheme.name
            );

            return newTheme;
        });
    }


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}