import { FC, useMemo, useState } from "react";

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../../../../shared/config/theme/ThemeContext";


const ThemeProvider:FC = ({children}) => {

    const appTheme  = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

    const [theme, setTheme] = useState<Theme>(appTheme);

    

    const defuoltProps = useMemo(()=> ({
        theme,
        setTheme,
    }),[theme])

    return (
        <ThemeContext.Provider value={defuoltProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;