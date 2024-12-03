import { FC, useEffect } from "react";
import { createPortal } from "react-dom";
import { classNames } from "shared/lib/classNames/classNames";

export interface PortalProps {
    children?:React.ReactNode;
    element?: HTMLElement;
}

export const Portal: FC<PortalProps> = ({
    children , 
    element= document.body }) => { 

 
    return createPortal(children, element);
};