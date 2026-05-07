import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext.js";

import lightIcon from "../assets/icons/dark.svg";
import darkIcon from "../assets/icons/light.svg";

export default function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 z-50 mt-[20px] mr-[160px]"
        >
            <img
                src={theme.name === "dark" ? lightIcon : darkIcon}
                alt="theme icon"
                className="w-6 h-6"
            />
        </button>
    );
}