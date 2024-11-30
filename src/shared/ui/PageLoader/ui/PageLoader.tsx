import { Loader } from "shared/ui/Loader";
import style from "./PageLoader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export interface PageLoaderProps {
    className?:string;
}

export const PageLoader = ({ className }:PageLoaderProps) => {

    
    return (
        <div className={classNames(style.PageLoader,{}, [className])}>
            <Loader/>
        </div>
    );
};