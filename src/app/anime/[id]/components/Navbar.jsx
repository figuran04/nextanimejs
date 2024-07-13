import Link from "next/link"

const Navbar = ({ id, detail, gambar, karakter, rekomendasi, ulasan }) => {
  return (
    <nav className="flex flex-nowrap gap-3 overflow-x-auto flex-row text-color-dark dark:text-color-primary text-lg font-semibold no-scrollbar">
      <Link href={`/anime/${id}`} className={`rounded px-3 py-1 ${detail}`}>
        Detail
      </Link>
      <Link
        href={`/anime/${id}/gambar`}
        className={`rounded px-3 py-1 ${gambar}`}
      >
        Gambar
      </Link>
      <Link
        href={`/anime/${id}/karakter`}
        className={`rounded px-3 py-1 ${karakter}`}
      >
        Karakter
      </Link>
      <Link
        href={`/anime/${id}/ulasan`}
        className={`rounded px-2 py-1 ${ulasan}`}
      >
        Ulasan
      </Link>
      <Link
        href={`/anime/${id}/rekomendasi`}
        className={`rounded px-2 py-1 ${rekomendasi}`}
      >
        Rekomendasi
      </Link>
    </nav>
  )
}

export default Navbar
