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
        key={1}
        className={`transition-all hover:text-color-accent ${
          page === 1 ? "font-bold text-color-accent" : ""
        }`}
        onClick={() => handlePageClick(1)}
      >
        1
      </button>
    )

    const startPage = Math.max(2, page - 2)
    const endPage = Math.min(lastPage, page + 2)

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`transition-all hover:text-color-accent ${
            i === page ? "font-bold text-color-accent" : ""
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      )
    }

    // Tambahkan halaman terakhir jika tidak termasuk dalam rentang
    if (endPage < lastPage) {
      pageNumbers.push(
        <button
          key={lastPage}
          className={`transition-all hover:text-color-accent ${
            lastPage === page ? "font-bold text-color-accent" : ""
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
    <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-xl font-bold bg-color-dark shadow-md">
      {page > 1 && (
        <button
          className="transition-all hover:text-color-accent"
          onClick={handlePrevPage}
        >
          Prev
        </button>
      )}
      {renderPageNumbers()}
      {page < lastPage && (
        <button
          className="transition-all hover:text-color-accent"
          onClick={handleNextPage}
        >
          Next
        </button>
      )}
    </div>
  )
}

export default Pagination
