import React from 'react';

const Pagination = ({ 
  currentPage, 
  totalComments,
  commentsPerPage,
  paginate
}) => {

  const pageNumbers = [];
  for (let i = 1; i < (totalComments / commentsPerPage) + 1; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="my-8 flex justify-center">
      { pageNumbers.map(pageNumber => (
        <button
          key={pageNumber}
          onClick={() => paginate(pageNumber)}
          className={`mr-5 p-4 ${currentPage === pageNumber ? 'bg-primary text-white' : ''}`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
