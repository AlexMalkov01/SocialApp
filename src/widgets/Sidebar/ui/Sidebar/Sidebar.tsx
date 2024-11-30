import { classNames } from "shared/lib/classNames/classNames";
import style from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitchers } from "shared/ui/LangSwitcher";
import { Button } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import { BugButton } from "app/providers/ErrorBoundary";


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
            <Button  onClick={toggleSidebar}>{t("toggle")}</Button>
            <BugButton/>
            <div className={style.switchers}>
                <ThemeSwitcher />
                <LangSwitchers className={style.lang}/>
            </div>
            
        </div>
    );
};