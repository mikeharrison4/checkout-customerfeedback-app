import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import RatingTrends from './RatingTrends/RatingTrends';
import LatestComments from './LatestComments/LatestComments';
import LoadingSpinner from '../Util/LoadingSpinner';
import content from '../../data/comments.json';
import Error from "../Util/Error";

const generateRatings = (comments) => comments.reduce((prev, current) => ({
  ...prev,
  [current.rating]: (prev[current.rating] || 0) + 1
}), []);

const fetchComments = async () => await axios.get('http://localhost:3001/comments');

const Comments = () => {
  const [comments, setComments] = useState([]);

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
    return (
      <div className="flex justify-center items-center">
        <Error errorMessage={content.loadError} />
      </div>
    );
  }

  return (
    <>
      <RatingTrends commentRatings={generateRatings(comments)} />
      <LatestComments comments={comments} />
    </>
  );
};

export default Comments;
