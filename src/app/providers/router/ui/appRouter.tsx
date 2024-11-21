import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"

export const AppRouter = () => {


    return (
        <Routes>
            {Object.values(routeConfig).map(({path,element})=> (
            <Route 
            key={path} 
            path={path}  
            element={element}
            />)
            )}
        </Routes> 
    )
}