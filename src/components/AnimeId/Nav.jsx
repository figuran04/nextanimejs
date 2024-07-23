import Link from "next/link"

const Nav = ({ condition, link, title }) => {
  return (
    <Link
      href={`/${link}`}
      className={`group p-2 transition-all rounded-lg flex justify-center sm:px-4 ${
        condition
          ? "dark:bg-color-white bg-color-dark hover:bg-color-darkHover dark:hover:bg-color-grey2"
          : "border dark:border-color-grey border-color-grey2 dark:bg-color-darkDark bg-color-white dark:hover:bg-color-darkHover hover:bg-color-grey2"
      }`}
    >
      <p
        className={`cursor-pointer text-lg md:text-xl font-semibold line-clamp-2 text-center ${
          condition ? "dark:text-color-darkDark text-color-white" : ""
        }`}
      >
        {title}
      </p>
    </Link>
  )
}

export default Nav
