import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center py-4">
      <h3 className="h3 capitalize">{title}</h3>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="hover:text-color-darkDark dark:hover:text-color-white text-color-grey transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  )
}
export default Header
