import { lazy } from "react";


export const MainPageLazy = lazy( async () => new Promise((resolve)=> setTimeout(resolve, 2000, import("./MainPage"))));
