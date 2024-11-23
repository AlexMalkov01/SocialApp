import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss"

export enum ButtonTheme {
    CLEAR = "clear",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?:string;
    theme?: any;
}

export const Button: FC<ButtonProps> = ({ children ,className , theme , ...props }) => {

    return (
        <button 
            className={classNames(styles.Button ?? " " , {} , [className , styles[theme]])}
            {...props }
        >
            {children}
        </button>
    )
}