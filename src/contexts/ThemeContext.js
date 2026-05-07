import { createContext } from "react";
import { darkTheme } from "../theme/theme.js";

const ThemeContext = createContext(darkTheme);

export default ThemeContext;