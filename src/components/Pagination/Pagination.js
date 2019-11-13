import React from "react";
import style from "./Pagination.module.css";
import { useCallback } from "react";

const Pagination = React.memo(
  ({
    totalPages,
    currentPage,
    setCurrentPage,
    portionNumber,
    setPortionNumber,
    portionSize = 10
  }) => {
    let pages = [];
    let portionCount = Math.ceil(totalPages / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    const handlePageClick = useCallback(
      page => {
        setCurrentPage(page);
      },
      [setCurrentPage]
    );
    const increasePortionNumber = useCallback(() => {
      setPortionNumber(portionNumber => portionNumber + 1);
    }, [setPortionNumber]);
    const decreasePortionNumber = useCallback(() => {
      setPortionNumber(portionNumber => portionNumber - 1);
    }, [setPortionNumber]);
    return (
      <nav id={style["pagination"]}>
        {portionNumber > 1 && (
          <button
            id={style["navigation-button"]}
            onClick={decreasePortionNumber}
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
            onClick={increasePortionNumber}
          >
            Next
          </button>
        )}
      </nav>
    );
  }
);

export { Pagination };
