import { classNames } from "shared/lib/classNames/classNames";
import style from "./Modal.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "shared/ui/Portal/Portal";
import useTheme from "app/providers/ThemeProvider/lib/useTheme";

export interface ModalProps {
    className?:string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = ({ 
    className , 
    children , 
    isOpen , 
    onClose , 
    ...props }:ModalProps) => {
        
        const [isClosing, setIsClosing] = useState(false);
        const timerRef = useRef<ReturnType< typeof setTimeout>>(null);

        const onOpen = useCallback(() => {
            if (onClose) {
            setIsClosing(true);
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                setIsClosing(false);
                onClose();
            }, 300);
        }
        },[onClose]);

        const onCloseClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
        },[]);

        const onKeyDown = useCallback((e:KeyboardEvent) => {
            if (e.key === "Escape") {
               onOpen();
            };
        },[onOpen]);

        useEffect(() => {
           if (isOpen) {
            window.addEventListener("keydown" , onKeyDown );
        }

           return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown" , onKeyDown );
           };
        }, [isOpen, onKeyDown]);
        
        const {theme} = useTheme();
    return (
        <Portal>
        <div className={classNames(style.Modal,{ [style["opened"]]:isOpen , [style.isClosing]: isClosing }, [className, theme ])}>
            <div className={style.overlay} onClick={onOpen}>
                <div onClick={onCloseClick} className={classNames(style.content)}>
                    {children}
                </div>
            </div>
        </div>
        </Portal>
    );
};