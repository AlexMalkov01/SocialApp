import { createContext } from "react";

export enum Theme {
    DARK = "dark",
    LIGHT= "normal",
}

interface ThemeContentProps {
    theme?: Theme;
    setTheme?: (theme:Theme) => void;
}

export const ThemeContext = createContext<ThemeContentProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";