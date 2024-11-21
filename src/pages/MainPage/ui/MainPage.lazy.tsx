import { lazy } from "react";


export const MainPageLazy = lazy(()=> new Promise<{ default: React.ComponentType }>(resolve => 
    setTimeout(()=> {
        resolve(import("./MainPage"))
    }, 1000)
));
