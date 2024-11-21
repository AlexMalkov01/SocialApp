import { Route, Routes } from "react-router-dom";
import Counter from "./components/counter";
import { Link } from "react-router-dom";
import MainPageLazy from "./pages/MainPage/MainPage.lazy";
import AboutPageLazy from "./pages/AboutPage/AboutPage.lazy";
import "./styles/index.scss"
import UseTheme from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";



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
        <Routes>
            <Route path="/" element={<MainPageLazy/>} />
            <Route path="/about" element={<AboutPageLazy/>} />
        </Routes> 
        <Counter/>
        </div>   
        </>
    )
}