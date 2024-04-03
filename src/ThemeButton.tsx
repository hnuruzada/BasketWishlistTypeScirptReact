import React from 'react'
import { useTheme } from './ThemeContext'
import "./ThemeButton.css"

const ThemeButton = () => {
    const ThemeBtn=useTheme()



  return (
    <div>
        <p className={ThemeBtn?.theme==="light" ? "light" : "dark"}>Lorem ipsum dolor sit amet.</p>
        <button onClick={ThemeBtn?.ToggleTheme} >Change Mode</button>

    </div>
  )
}

export default ThemeButton