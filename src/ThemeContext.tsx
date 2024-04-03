import { createContext, useContext, useState } from "react"


interface ThemeContextType{
    theme:string,
    ToggleTheme:()=>void
}



const ThemeContext=createContext<ThemeContextType | undefined>(undefined)


export const ThemeProvider=({children}:any)=>{
    const [theme,setTheme]=useState<string>("light")

    const ToggleTheme=()=>{
        setTheme(theme==="light" ? "dark" : "light")
    }


    return(
        <ThemeContext.Provider value={{theme,ToggleTheme}}>
        {children}
        </ThemeContext.Provider>
    )
}

export const useTheme=()=>useContext(ThemeContext)


