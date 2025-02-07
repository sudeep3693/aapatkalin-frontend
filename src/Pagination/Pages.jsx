import React, { useState, useEffect } from "react";
import '../App.css';

function Pagination({ totalPages, changePage }) {
  const [currentPage, setCurrentPage] = useState(1);

  // UseEffect to call changePage whenever currentPage updates
  useEffect(() => {
    changePage(currentPage);
  }, [currentPage, changePage]); 

  // Function to generate page numbers dynamically
  const generatePageNumbers = () => {
    const pages = [];
    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pagination">
      <button onClick={prevPage} disabled={currentPage === 1}>
        {"<"}
      </button>

      {generatePageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={index} className="ellipsis">...</span>
        ) : (
          <button
            key={index}
            className={page === currentPage ? "active" : ""}
            onClick={() => handlePage(page)}
          >
            {page}
          </button>
        )
      )}

      <button onClick={nextPage} disabled={currentPage === totalPages}>
        {">"}
      </button>
    </div>
  );
}

export default Pagination;
