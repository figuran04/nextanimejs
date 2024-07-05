import Link from "next/link"

const Header = ({ title, api, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center py-4">
      <h1 className="text-2xl font-bold text-color-primary capitalize">
        {api ? (
          <p className="capitalize">{`Anime ${api.data[0].season} ${api.data[0].year}`}</p>
        ) : (
          <p>{title}</p>
        )}
      </h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="lg:text-xl md:text-lg text-base underline hover:text-color-accent transition-all text-color-primary"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  )
}
export default Header
