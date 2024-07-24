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
        className={`transition-all Color ${page === 1 ? "font-bold Text" : ""}`}
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
          className={`transition-all font-bold Text`}
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
          className={`transition-all Color ${
            lastPage === page ? "font-bold Text" : ""
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
    <div className="z-50 fixed flex items-center justify-center gap-4 px-4 py-3 -translate-x-1/2 rounded-xl bottom-1 left-1/2 Border bg-opacity-80 dark:bg-opacity-80 backdrop-blur">
      {page > 1 && (
        <button className="transition-all Color" onClick={handlePrevPage}>
          Prev
        </button>
      )}
      {renderPageNumbers()}
      {page < lastPage && (
        <button className="transition-all Color" onClick={handleNextPage}>
          Next
        </button>
      )}
    </div>
  )
}

export default Pagination
