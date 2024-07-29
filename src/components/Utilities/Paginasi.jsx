import Link from "next/link"

const Paginasi = ({ halaman, page, lastPage }) => {
  const pages = parseInt(page)
  return (
    <div className="z-50 fixed flex items-center justify-center gap-4 px-4 py-3 -translate-x-1/2 rounded-xl bottom-1 left-1/2 Border bg-opacity-80 dark:bg-opacity-80 backdrop-blur">
      {pages > 1 && (
        <Link
          className="transition-all Color "
          href={`/${halaman}/page/${pages - 1}`}
        >
          Prev
        </Link>
      )}
      {pages === 1 ? null : (
        <Link className="transition-all Color " href={`/${halaman}/page/1`}>
          1
        </Link>
      )}
      <Link
        className="transition-all textActive "
        href={`/${halaman}/page/${pages}`}
      >
        {pages}
      </Link>
      {pages === lastPage ? null : (
        <Link
          className="transition-all Color "
          href={`/${halaman}/page/${lastPage}`}
        >
          {lastPage}
        </Link>
      )}
      {pages < lastPage && (
        <Link
          className="transition-all Color "
          href={`/${halaman}/page/${pages + 1}`}
        >
          Next
        </Link>
      )}
    </div>
  )
}

export default Paginasi
