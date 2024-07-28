import Link from "next/link"
import React from "react"

const ButtonNav = ({ title, link, active }) => {
  return (
    <Link
      href={`/${link}`}
      className={`my-2 mx-2 rounded transition-all ${
        active === "true" ? "text-color-blue" : "Color"
      }`}
    >
      {title}
    </Link>
  )
}

export default ButtonNav
