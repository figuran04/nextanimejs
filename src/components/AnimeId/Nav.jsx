import Link from "next/link"

const Nav = ({ condition, link, title }) => {
  return (
    <Link
      href={`/${link}`}
      className={`group shadow p-2 transition-all rounded-lg flex justify-center ${
        condition ? "dark:bg-color-secondary bg-color-accent" : ""
      }`}
    >
      <p
        className={`cursor-pointer text-lg md:text-xl font-semibold line-clamp-2 text-center ${
          condition
            ? "dark:text-color-dark text-color-primary"
            : "group-hover:dark:text-color-secondary group-hover:text-color-accent "
        }`}
      >
        {title}
      </p>
    </Link>
  )
}

export default Nav
