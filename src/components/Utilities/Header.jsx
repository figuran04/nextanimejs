import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center py-4">
      <span className="capitalize Textxl font-bold">{title}</span>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="Color transition-all">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  )
}
export default Header
