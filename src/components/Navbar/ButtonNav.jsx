import Link from "next/link"
import React from "react"

const ButtonNav = ({ title, link, active }) => {
  return (
    <Link
      href={`/${link}`}
      className={`${
        active === "true"
          ? "block py-2 px-3 text-color-primary bg-color-accent dark:bg-color-secondary dark:md:bg-transparent rounded md:bg-transparent md:text-color-accent dark:text-color-dark md:dark:text-color-secondary"
          : "block py-2 px-3 text-color-dark rounded hover:bg-color-primary md:border-0 md:hover:text-color-accent dark:text-color-primary md:dark:hover:text-color-secondary dark:hover:bg-color-dark dark:hover:text-color-primary"
      }`}
    >
      {title}
    </Link>
  )
}

export default ButtonNav
