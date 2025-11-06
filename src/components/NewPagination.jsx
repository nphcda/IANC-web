import React, { useState } from "react";

const NewPagination = ({ pagination, onPageChange }) => {
  //alert(pagination?.pageNumber);
  const [currentPage, setCurrentPage] = useState(pagination?.pageNumber || 1);
  // If there are no pages or only one page, don't render the pagination
  const maxPagesToShow = 10;
  if (pagination?.totalPages <= 1) {
    return null;
  }

  const handlePageChange = (page) => {
    if (page < 1 || page > pagination?.totalPages) return;
    setCurrentPage(page);
    onPageChange(page);
  };
  const getPageRange = () => {
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > pagination?.totalPages) {
      endPage = pagination?.totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    return { startPage, endPage };
  };
  const renderPageNumbers = () => {
    const { startPage, endPage } = getPageRange();
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          style={{
            margin: "0 5px",
            padding: "5px 10px",
            backgroundColor: currentPage === i ? "#027D52" : "#fff",
            color: currentPage === i ? "#fff" : "#000",
            border: "1px solid #ddd",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          padding: "5px 10px",
          margin: "0 5px",
          backgroundColor: "#2FCF97",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Previous
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === pagination?.totalPages}
        style={{
          padding: "5px 10px",
          margin: "0 5px",
          backgroundColor: "#2FCF97",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Next
      </button>
    </div>
  );
};

export default NewPagination;
