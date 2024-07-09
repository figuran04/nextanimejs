import Link from "next/link"

const Navbar = ({ id, detail, gambar, karakter, rekomendasi }) => {
  return (
    <nav className="flex flex-nowrap gap-4 overflow-x-auto flex-row text-color-primary text-xl underline">
      <Link href={`/anime/${id}`} className={`${detail}`}>
        Detail
      </Link>
      <Link href={`/anime/${id}/gambar`} className={`${gambar}`}>
        Gambar
      </Link>
      <Link href={`/anime/${id}/karakter`} className={`${karakter}`}>
        Karakter
      </Link>
      <Link href={`/anime/${id}/rekomendasi`} className={`${rekomendasi}`}>
        Rekomendasi
      </Link>
    </nav>
  )
}

export default Navbar
