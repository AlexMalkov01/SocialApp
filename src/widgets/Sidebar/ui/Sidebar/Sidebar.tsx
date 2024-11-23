import { classNames } from "shared/lib/classNames/classNames"
import style from "./Sidebar.module.scss"
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitchers } from "shared/ui/LangSwitcher";


interface SidebarProps {
    className?: string;
}


export const Sidebar = ({className}:SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false)
    
    function toggleSidebar() {
        setCollapsed( prev=> !prev)
    }

    return (
        <div className={classNames(style.sidebar , {[style.collapsed]: collapsed} , [className])}>
            <button onClick={toggleSidebar}>toggle</button>
            <div className={style.switchers}>
                <ThemeSwitcher />
                <LangSwitchers className={style.lang}/>
            </div>
            
        </div>
    )
}