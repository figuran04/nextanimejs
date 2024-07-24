import Link from "next/link"

const Nav = ({ condition, link, title }) => {
  return (
    <Link
      href={`/${link}`}
      className={`group p-2 transition-all rounded-lg flex justify-center sm:px-4 ${
        condition ? "ButtonActive" : "Button"
      }`}
    >
      <p className="cursor-pointer line-clamp-2 text-center">{title}</p>
    </Link>
  )
}

export default Nav
