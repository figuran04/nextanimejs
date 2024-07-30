import Link from "next/link"

const Navbar = ({
  id,
  detail,
  episode,
  gambar,
  karakter,
  rekomendasi,
  statistik,
  ulasan,
}) => {
  const links = [
    { href: ``, label: "Detail", active: detail },
    { href: `episode`, label: "Episode", active: episode },
    { href: `gambar`, label: "Gambar", active: gambar },
    { href: `karakter`, label: "Karakter", active: karakter },
    { href: `rekomendasi`, label: "Rekomendasi", active: rekomendasi },
    { href: `statistik`, label: "Statistik", active: statistik },
    { href: `ulasan`, label: "Ulasan", active: ulasan },
  ]

  return (
    <nav className="flex flex-row gap-3 mb-3 overflow-x-auto flex-nowrap no-scrollbar">
      {links.map(({ href, label, active }) => (
        <Link
          key={href}
          href={`/anime/${id}/${href}`}
          className={`rounded-md px-3 py-1 font-semibold ${
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
