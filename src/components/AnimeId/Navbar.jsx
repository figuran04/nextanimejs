import Link from "next/link"

const Navbar = ({ id, detail, gambar, karakter, rekomendasi, ulasan }) => {
  const links = [
    { href: ``, label: "Detail", active: detail },
    { href: `gambar`, label: "Gambar", active: gambar },
    { href: `karakter`, label: "Karakter", active: karakter },
    { href: `ulasan`, label: "Ulasan", active: ulasan },
    { href: `rekomendasi`, label: "Rekomendasi", active: rekomendasi },
  ]

  return (
    <nav className="flex flex-row gap-3 mb-2 overflow-x-auto text-lg font-semibold flex-nowrap text-color-dark dark:text-color-primary no-scrollbar">
      {links.map(({ href, label, active }) => (
        <Link
          key={href}
          href={`/anime/${id}/${href}`}
          className={`rounded-md px-3 py-1 ${
            active
              ? "dark:text-color-darkDark text-color-white dark:bg-color-white bg-color-dark hover:bg-color-darkHover dark:hover:bg-color-grey2"
              : "border dark:border-color-grey border-color-grey2 dark:bg-color-darkDark bg-color-white dark:hover:bg-color-darkHover hover:bg-color-grey2"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
