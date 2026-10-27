const pages = [1, 2, 3]

function Pagination() {
  const currentPage = 1

  return (
    <div className="pagination">
      <div className="arrow left">
        <img src="/img/icons/arrow-left.svg" alt="previous page" />
      </div>
      <div className="pages">
        {pages.map((page) => (
          <div className={page === currentPage ? 'page active' : 'page'} key={page}>
            {page}
          </div>
        ))}
      </div>
      <div className="arrow right">
        <img src="/img/icons/arrow-right.svg" alt="next page" />
      </div>
    </div>
  )
}

export default Pagination
