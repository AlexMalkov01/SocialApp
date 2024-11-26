import "./styles/index.scss"
import UseTheme from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

export function App () {

    const { theme } = UseTheme();

    return (
        <>
        <div className={classNames("app" , {}, [theme])}>
        <Navbar/>
            <div className="content-page"> 
                dsadasdsad
                <Sidebar/> 
                <AppRouter/>
            </div>
        </div>   
        </>
    )
}