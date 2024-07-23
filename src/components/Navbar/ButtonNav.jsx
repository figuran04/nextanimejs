import Link from "next/link"
import React from "react"

const ButtonNav = ({ title, link, active }) => {
  return (
    <Link
      href={`/${link}`}
      className={`py-2 px-2 rounded transition-all ${
        active === "true"
          ? "text-color-blue"
          : "text-color-grey hover:text-color-dark dark:hover:text-color-whiteDark"
      }`}
    >
      {title}
    </Link>
  )
}

export default ButtonNav
