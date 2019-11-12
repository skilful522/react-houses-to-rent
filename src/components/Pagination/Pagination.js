import React from "react";
import style from "./Pagination.module.css";

const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
  portionNumber,
  setPortionNumber,
  portionSize = 10
}) => {
  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(totalPages / portionSize);

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  const handlePageClick = page => setCurrentPage(page);
  return (
    <nav id={style["pagination"]}>
      {portionNumber > 1 && (
        <button
          id={style["navigation-button"]}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          Back
        </button>
      )}
      {pages
        .filter(
          page =>
            page >= leftPortionPageNumber && page <= rightPortionPageNumber
        )
        .map(page => (
          <button
            className={currentPage === page ? style.activePage : style.page}
            key={page}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}
      {portionCount > portionNumber && (
        <button
          id={style["navigation-button"]}
          onClick={() => setPortionNumber(portionNumber + 1)}
        >
          Next
        </button>
      )}
    </nav>
  );
};

export { Pagination };
