// постраничная навигация: показывает стрелки и номера страниц, о выборе сообщает родителю
function Pagination({ currentPage, totalPages, onChangePage }) {
  // одна страница — навигация не нужна
  if (totalPages <= 1) {
    return null
  }

  // [1, 2, 3, ...] — номера всех страниц
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <div className="pagination">
      <button
        type="button"
        className="arrow left"
        onClick={() => onChangePage(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <img src="/img/icons/arrow-left.svg" alt="" />
      </button>

      <div className="pages">
        {pages.map((page) => (
          <button
            type="button"
            className={page === currentPage ? 'page active' : 'page'}
            key={page}
            onClick={() => onChangePage(page)}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="arrow right"
        onClick={() => onChangePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <img src="/img/icons/arrow-right.svg" alt="" />
      </button>
    </div>
  )
}

export default Pagination
