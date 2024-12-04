import { classNames } from "shared/lib/classNames/classNames";
import style from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitchers } from "shared/ui/LangSwitcher";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import { BugButton } from "app/providers/ErrorBoundary";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import AboutIcon from "shared/assets/icons/about-20-20.svg";


interface SidebarProps {
    className?: string;
};


export const Sidebar = ({className}:SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);
    const {t , i18n } = useTranslation();
    
    function toggleSidebar() {
        setCollapsed( prev=> !prev);
    };

    return (
        <div data-testid="Sidebar" className={classNames(style.sidebar , {[style.collapsed]: collapsed} , [className])}>
            <Button 
            theme={ButtonTheme.BACGRAUND_INVERTED} 
            className={classNames(style.collapsedBtn)}  
            onClick={toggleSidebar}
            size={ButtonSize.XLARGE}
            isSquare
            >{collapsed ? ">" : "<"}</Button>
            <BugButton /> 

            <div className={classNames(style.items)}>
                
                <AppLink 
                className={style.link}
                theme={AppLinkTheme.SECONDARY} 
                to={RoutePaths.main}>
                    <MainIcon/> 
                    <span className={style.text}>   
                    {t("link_main")}
                    </span>     
                </AppLink>
      
                <AppLink 
                className={style.link}
                theme={AppLinkTheme.SECONDARY} 
                to={RoutePaths.about}>
                    <AboutIcon/> 
                    <span className={style.text}>   
                    {t("link_about")}   
                    </span>     
                </AppLink>
            </div>

            <div className={style.switchers}>
                <ThemeSwitcher />
                <LangSwitchers className={style.lang}/>
            </div>
            
        </div>
    );
};