import Link from "next/link"

const Navbar = ({ id, detail, gambar, karakter, rekomendasi, ulasan }) => {
  return (
    <nav className="flex flex-nowrap gap-3 overflow-x-auto flex-row text-color-dark dark:text-color-primary text-lg font-semibold no-scrollbar mb-2">
      <Link
        href={`/anime/${id}`}
        className={`rounded px-3 py-1 ${
          detail
            ? "bg-color-accent dark:bg-color-secondary shadow-md text-color-primary dark:text-color-dark"
            : "hover:text-color-accent hover:dark:text-color-secondary"
        }`}
      >
        Detail
      </Link>
      <Link
        href={`/anime/${id}/gambar`}
        className={`rounded px-3 py-1 ${
          gambar
            ? "bg-color-accent dark:bg-color-secondary shadow-md text-color-primary dark:text-color-dark"
            : "hover:text-color-accent hover:dark:text-color-secondary"
        }`}
      >
        Gambar
      </Link>
      <Link
        href={`/anime/${id}/karakter`}
        className={`rounded px-3 py-1 ${
          karakter
            ? "bg-color-accent dark:bg-color-secondary shadow-md text-color-primary dark:text-color-dark"
            : "hover:text-color-accent hover:dark:text-color-secondary"
        }`}
      >
        Karakter
      </Link>
      <Link
        href={`/anime/${id}/ulasan`}
        className={`rounded px-2 py-1 ${
          ulasan
            ? "bg-color-accent dark:bg-color-secondary shadow-md text-color-primary dark:text-color-dark"
            : "hover:text-color-accent hover:dark:text-color-secondary"
        }`}
      >
        Ulasan
      </Link>
      <Link
        href={`/anime/${id}/rekomendasi`}
        className={`rounded px-2 py-1 ${
          rekomendasi
            ? "bg-color-accent dark:bg-color-secondary shadow-md text-color-primary dark:text-color-dark"
            : "hover:text-color-accent hover:dark:text-color-secondary"
        }`}
      >
        Rekomendasi
      </Link>
    </nav>
  )
}

export default Navbar
