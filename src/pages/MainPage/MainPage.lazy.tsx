import { lazy } from "react";


const MainPageLazy = lazy(()=> new Promise<{ default: React.ComponentType }>(resolve => 
    setTimeout(()=> {
        resolve(import("./MainPage"))
    }, 1000)
));

export default MainPageLazy;