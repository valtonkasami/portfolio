'use client';
import React, {useEffect} from 'react'
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons' 
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    const faPropIcon = faMoon as IconProp;
    
    useEffect(() => {
      if (theme === "system") {
        const prefersDarkMode = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDarkMode ? "dark" : "light");
      } else {
        setTheme(theme === "dark" ? "dark" : "light");
      }
    }, [])

  return (
    <div>

<div onClick={() => {if (theme === 'dark') {
  setTheme('light')
} else {
  setTheme('dark')
}
}} className='dark:bg-[#555555] bg-[silver] hover:bg-green-500 dark:hover:bg-green-500 hover:text-[white] cursor-pointer rounded-full h-10 w-10 flex justify-center items-center'><FontAwesomeIcon className='text-[23px] hidden dark:block' icon={faPropIcon}/><FontAwesomeIcon className='text-[23px] dark:hidden' icon={faSun}/></div>

    </div>
  )
}

export default ThemeSwitcher
