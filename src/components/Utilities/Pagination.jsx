const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({ behavior: "smooth", top: 0 })
  }

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1)
    scrollTop()
  }

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1)
    scrollTop()
  }

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber)
    scrollTop()
  }

  const renderPageNumbers = () => {
    const pageNumbers = []

    // Tambahkan halaman pertama
    pageNumbers.push(
      <button
        key={`page-${1}`}
        className={`transition-all hover:text-color-accent hover:dark:text-color-secondary ${
          page === 1
            ? "font-bold text-color-dark dark:text-color-whiteDark"
            : ""
        }`}
        onClick={() => handlePageClick(1)}
      >
        1
      </button>
    )

    // Tambahkan halaman saat ini
    if (page !== 1 && page !== lastPage) {
      pageNumbers.push(
        <button
          key={`page-${page}`}
          className={`transition-all font-bold text-color-dark dark:text-color-whiteDark`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      )
    }

    // Tambahkan halaman terakhir
    if (lastPage !== 1) {
      pageNumbers.push(
        <button
          key={`page-${lastPage}`}
          className={`transition-all hover:text-color-accent hover:dark:text-color-secondary ${
            lastPage === page
              ? "font-bold text-color-dark dark:text-color-whiteDark"
              : ""
          }`}
          onClick={() => handlePageClick(lastPage)}
        >
          {lastPage}
        </button>
      )
    }

    return pageNumbers
  }

  return (
    <div className="z-50 fixed flex items-center justify-center gap-4 px-4 py-3 -translate-x-1/2 border rounded-xl bottom-1 left-1/2 bg-color-white dark:bg-color-darkDark dark:border-color-grey border-color-grey2 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm text-color-grey">
      {page > 1 && (
        <button
          className="transition-all hover:text-color-dark dark:hover:text-color-whiteDark"
          onClick={handlePrevPage}
        >
          Prev
        </button>
      )}
      {renderPageNumbers()}
      {page < lastPage && (
        <button
          className="transition-all hover:text-color-dark dark:hover:text-color-whiteDark"
          onClick={handleNextPage}
        >
          Next
        </button>
      )}
    </div>
  )
}

export default Pagination
