"use client"
import Link from "next/link"
import InputSearch from "./InputSearch"
import ThemeSwitcher from "./ThemeSwitcher"
import ButtonNav from "./ButtonNav"
import { useEffect, useState } from "react"
import MenuIcon from "../Icons/MenuIcon"

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleNav = (event) => {
    event.stopPropagation()
    setIsNavOpen(!isNavOpen)
  }

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // scroll down
        setShow(false)
      } else {
        // scroll up
        setShow(true)
      }
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar)

      return () => {
        window.removeEventListener("scroll", controlNavbar)
      }
    }
  }, [lastScrollY])

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navElement = document.getElementById("navbar")
      const toggleButton = document.getElementById("toggle-button")
      if (
        navElement &&
        !navElement.contains(event.target) &&
        toggleButton &&
        !toggleButton.contains(event.target)
      ) {
        setIsNavOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-color-white dark:bg-color-darkDark border-b dark:border-color-grey border-color-grey2 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-col justify-between gap-2 p-4 md:flex-row md:items-center xl:px-0 xl:container">
        <div className="flex flex-row items-center justify-between w-full md:w-1/2">
          <div className="flex flex-col w-full md:flex-row">
            <div className="flex justify-between w-full">
              <Link href="/" className="flex flex-row items-center gap-1">
                <div className="relative ml-2 mr-6 font-bold text-color-whiteGradient ">
                  <span className="text-xl">NEXTANIME</span>
                  <span className="absolute -right-5 bottom-0 text-sm">JS</span>
                </div>
              </Link>
              <div className="flex">
                <ThemeSwitcher />
                <button
                  id="toggle-button"
                  onClick={toggleNav}
                  className="inline-flex items-center justify-center w-10 h-10 p-2 rounded-lg md:hidden"
                  aria-label="menu"
                >
                  <MenuIcon />
                </button>
              </div>
            </div>
            <div
              id="navbar"
              className={`w-full md:block md:w-auto md:bg-transparent dark:md:bg-transparent Bg mt-6 md:mt-0 rounded-lg md:rounded-none p-4 md:p-0 ${
                isNavOpen ? "" : "hidden"
              }`}
            >
              <div className="flex flex-col gap-3 md:gap-2 md:p-0 md:px-2 md:flex-row">
                <ButtonNav title="Beranda" link="" active="true" />
                <ButtonNav title="Anime" link="anime/page/1" />
                <ButtonNav title="Genre" link="genre" />
                <ButtonNav title="Musim" link="musim/sekarang/page/1" />
                <ButtonNav title="Review" link="reviews" />
              </div>
            </div>
          </div>
        </div>

        <InputSearch />
      </div>
    </header>
  )
}

export default Navbar
