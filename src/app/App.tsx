import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles/index.scss"
import UseTheme from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { AppRouter } from "./providers/router";



export function App () {

    const { theme, toggleTheme } = UseTheme()

    return (
        <>
      
        <div className={classNames("app" , {}, [theme])}>
        <button  onClick={toggleTheme}>
            Поменять тему
        </button>
        <Link to={"/"}>МЕНЮ</Link>
        <Link to={"/about"}>АБОУТ</Link>
        <AppRouter/>
        </div>   
        </>
    )
}