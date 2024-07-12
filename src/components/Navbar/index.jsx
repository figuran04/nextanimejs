"use client"
import Link from "next/link"
import InputSearch from "./InputSearch"
import ThemeSwitcher from "../ThemeSwitcher"
import ButtonNav from "./ButtonNav"
import { useState } from "react"

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <header className="dark:bg-color-secondary bg-color-accent dark:text-color-dark text-color-primary">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2 md:items-center">
        <div className="flex justify-between flex-row w-full md:w-1/2 items-center">
          <Link
            href="/"
            className="font-bold text-2xl flex flex-row items-center gap-1"
          >
            <span>NEXTANIME</span>
            <span className="px-2 py-1 dark:bg-color-dark dark:text-color-secondary bg-color-primary text-color-accent rounded-lg">
              JS
            </span>
          </Link>
          <button
            onClick={toggleNav}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm hover:bg-color-primary hover:dark:bg-color-dark bg-color-accent dark:bg-color-secondary rounded-lg md:hidden hover:text-color-accent dark:hover:text-color-secondary focus:outline-none focus:ring-2 focus:ring-color-primary dark:focus:ring-color-dark"
            aria-label="menu"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`w-full md:block md:w-auto ${isNavOpen ? "" : "hidden"}`}
        >
          <div className="font-medium flex flex-col p-4 md:p-0 md:px-2 mt-4 border border-color-primary rounded-lg bg-color-primary md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-color-dark dark:border-color-dark md:bg-color-primary dark:md:bg-color-dark ">
            <ButtonNav title="Beranda" link="" active="true" />
            <ButtonNav title="Anime" link="anime" />
            <ButtonNav title="Genre" link="genre" />
            <ButtonNav title="Musim" link="musim" />
            <ButtonNav title="Review" link="reviews" />
            <ThemeSwitcher />
          </div>
        </div>
        <InputSearch />
      </div>
    </header>
  )
}

export default Navbar
