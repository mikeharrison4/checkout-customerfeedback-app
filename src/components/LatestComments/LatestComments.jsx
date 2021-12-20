import React from 'react';
import content from '../../data/latestComments.json';
import { useQuery } from 'react-query';
import axios from 'axios';
import Comment from './Comment';

const fetchComments = async () => await axios.get('http://localhost:3001/comments');

const LatestComments = () => {
  const {
    data: comments,
    isLoading,
    isError,
  } = useQuery('comments', fetchComments, {
    retry: 1,
  });

  if (isLoading) {
    return 'loading...'; // loading spinner to go here
  }

  if (isError) {
    return content.loadError;
  }

  return (
    <div>
      <h1 className="text-5xl text-primary font-bold tracking-wider pb-4">
        {content.title}
      </h1>
      <div>
        { comments.data
          .reverse()
          .map(({ id, name, email, rating, comment }) => (
            <Comment
              key={id}
              name={name}
              email={email}
              rating={rating}
              comment={comment}
            />
          )) }
      </div>
    </div>
  );
};

export default LatestComments;
