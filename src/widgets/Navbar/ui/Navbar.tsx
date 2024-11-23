import { Link } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import style from "widgets/Navbar/ui/Navmar.module.scss"


interface NavbarProps {
    className?: string;
}


export const Navbar = ({className}:NavbarProps) => {

    
    return (
        <div className={classNames(style.navbar , {} , [className])}>
            <div>
                <h1>УБЛИКУС</h1>
                <p>Учебный центр для детей</p>
            </div>
            <div className={classNames(style.links)}>
                <AppLink 
                theme={AppLinkTheme.SECONDARY} 
                to={"/"}>
                    МЕНЮ
                </AppLink>

                <AppLink 
                theme={AppLinkTheme.SECONDARY} 
                to={"/about"}>
                    АБОУТ
                </AppLink>
            </div>
        </div>
    )
}