import "./styles/index.scss"
import UseTheme from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { Sidebar } from "widgets/Sidebar";

export function App () {

    const { theme } = UseTheme();


    return (
        <>
        <div className={classNames("app" , {}, [theme])}>
        <Navbar/>
        <div className="content-page">
            <Sidebar/> 
            <AppRouter/>
        </div>
        </div>   
        </>
    )
}