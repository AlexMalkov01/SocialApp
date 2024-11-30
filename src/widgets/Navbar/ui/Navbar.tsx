import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import style from "widgets/Navbar/ui/Navmar.module.scss";


interface NavbarProps {
    className?: string;
}


export const Navbar = ({className}:NavbarProps) => {

    const { t } = useTranslation();
    
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
                    {t("link_main")  }
                </AppLink>

                <AppLink 
                theme={AppLinkTheme.SECONDARY} 
                to={"/about"}>
                    {t("link_about")}
                </AppLink>
            </div>
        </div>
    );
};