import Link from "next/link"

const Nav = ({ condition, link, title }) => {
  return (
    <Link
      href={`/${link}`}
      className={`rounded-md px-3 py-1 font-semibold flex cursor-pointer line-clamp-2 justify-center ${
        condition ? "ButtonActive" : "Button"
      }`}
    >
      {title}
    </Link>
  )
}

export default Nav
