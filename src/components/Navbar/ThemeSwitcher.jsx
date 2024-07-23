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
        className="px-3 pt-3 pb-2 flex items-center"
      >
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  )
}

export default ThemeSwitcher
