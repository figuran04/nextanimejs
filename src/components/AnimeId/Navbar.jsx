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
    <nav className="flex flex-row gap-3 mb-4 overflow-x-auto flex-nowrap no-scrollbar">
      {links.map(({ href, label, active }) => (
        <Link
          key={href}
          href={`/anime/${id}/${href}`}
          className={`rounded-md px-3 py-1 ${
            active ? "ButtonActive" : "Button"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
