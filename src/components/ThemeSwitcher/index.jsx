"use client"
import { MoonIcon } from "@/components/Icons/MoonIcon"
import { SunIcon } from "@/components/Icons/SunIcon"
import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react"

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <div>
      <button
        onClick={handleTheme}
        className="px-3 pt-3 pb-2 text-gray-900 rounded hover:bg-color-primary md:hover:bg-transparent md:border-0 md:hover:text-color-accent dark:text-color-primary md:dark:hover:text-color-secondary dark:hover:bg-color-dark dark:hover:text-color-primary md:dark:hover:bg-transparent flex items-center"
      >
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  )
}

export default ThemeSwitcher
