import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./AppLink.module.scss";

export enum AppLinkTheme {
    PRIMERY= "primary",
    SECONDARY= "secondary"
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme
}


export const AppLink: FC<AppLinkProps> = (
    {
    className, 
    children, 
    to, 
    theme = "primary", 
    ...AppLinkProps
}) => {
    
    return (
        <Link 
        to={to} 
        className={classNames(style.appLink ?? "" , {} , [className , style[theme]])}
        {...AppLinkProps}
        >
            {children}
        </Link>
    );
};