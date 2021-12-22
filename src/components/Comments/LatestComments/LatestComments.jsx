import React, { useState } from 'react';
import content from '../../../data/comments.json';
import Comment from './Comment';
import Pagination from './Pagination';

const LatestComments = ({ comments }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const commentsPerPage = 5;
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments
    .slice(indexOfFirstComment, indexOfLastComment);

  return (
    <div>
      <h1 className="text-5xl text-primary font-bold tracking-wider pb-4">
        {content.title}
      </h1>
      <div>
        { currentComments
          .map(({ id, name, email, rating, comment }) => (
            <Comment
              key={id}
              name={name}
              email={email}
              rating={rating}
              comment={comment}
            />
          ))
        }
      </div>
      <Pagination
        currentPage={currentPage}
        totalComments={comments.length}
        commentsPerPage={commentsPerPage}
        paginate={paginate}
      />
    </div>
  );
};

export default LatestComments;
