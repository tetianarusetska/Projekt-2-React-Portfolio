import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext.js";

import lightIcon from "../assets/icons/dark.svg";
import darkIcon from "../assets/icons/light.svg";

export default function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            className="translate-x-[20px] translate-y-[-160px] md:translate-x-0 md:translate-y-0 md:mt-[30px] md:mr-[80px] lg:mt-[30px] lg:mr-[170px]"
        >
            <img
                src={theme.name === "dark" ? lightIcon : darkIcon}
                alt="theme icon"
                className="w-6 h-6"
            />
        </button>
    );
}