import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ButtonTheme {
    CLEAR = "clear",
    OUTLINE = "outline",
    BACKRAUND = "background",
    BACGRAUND_INVERTED = "backgroundInverted"
} 

export const enum ButtonSize { 
    SMALL = "small",
    MEDIUM = "medium",
    XLARGE = "xlarge"
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?:string;
    theme?: string;
    isSquare?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = ({ children ,className , isSquare , size, theme , ...props }) => {

    return (
        <button 
            className={classNames(styles.Button ?? " " , {[styles["scuered"]]:isSquare} , [className , styles[theme] , styles[size]])}
            {...props }
        >
            {children}
        </button>
    );
};