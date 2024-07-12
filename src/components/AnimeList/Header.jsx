import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center py-4">
      <h1 className="text-2xl font-bold dark:text-color-primary text-color-dark capitalize">
        <p>{title}</p>
      </h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="lg:text-xl md:text-lg text-base hover:underline dark:hover:text-color-secondary hover:text-color-accent transition-all dark:text-color-primary text-color-dark"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  )
}
export default Header
