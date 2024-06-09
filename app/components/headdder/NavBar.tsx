"use client";

import { GlobeAltIcon, MenuIcon, SunIcon, UserCircleIcon, MoonIcon} from "@heroicons/react/solid"
import { useState } from "react"

const NavBar = () => {
   
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  }

  return (
    <div className="flex space-x-4 items-center justify-end text-gray-500 dark:text-white" >
        <p className="hidden md:inline cursor-pointer" >Book a host </p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex space-x-2 border-2 p-2 rounded-full cursor-pointer bg-black" onClick={handleDarkMode} >
            { darkMode ? <MoonIcon className="h-6 text-white"/> : <SunIcon className="h-6 text-yellow-600"/> }
        </div>
    </div>
  )
}

export default NavBar