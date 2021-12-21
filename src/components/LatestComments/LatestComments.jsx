import React, { useState } from 'react';
import content from '../../data/latestComments.json';
import { useQuery } from 'react-query';
import axios from 'axios';
import Comment from './Comment';
import LoadingSpinner from '../Util/LoadingSpinner';
import Pagination from './Pagination';

const fetchComments = async () => await axios.get('http://localhost:3001/comments');

const LatestComments = () => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const {
    isLoading,
    isError,
  } = useQuery('comments', fetchComments, {
    retry: 1,
    onSuccess: (comments) => setComments([...comments.data.reverse()]),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return content.loadError;
  }

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
