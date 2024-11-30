import { UseTheme } from "app/providers";
import { classNames } from "shared/lib/classNames/classNames";
import LightIconTheme from "shared/assets/icons/theme-light.svg";
import DarkIconTheme from "shared/assets/icons/theme-dark.svg";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";
import { Button, ButtonTheme } from "shared/ui/Button";

export interface ThemeSwitcherProps {
    className?:string;
}

export const ThemeSwitcher = ({ className }:ThemeSwitcherProps) => {

    const { theme, toggleTheme } = UseTheme();

    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames( "" , {} , [ className ])}  onClick={toggleTheme}>
             {theme === Theme.LIGHT ? <LightIconTheme /> : <DarkIconTheme />}
        </Button>
    );
};