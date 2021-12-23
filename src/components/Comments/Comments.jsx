import React, { useState } from 'react';
import axios from 'axios';
import RatingTrends from './RatingTrends/RatingTrends';
import LatestComments from './LatestComments/LatestComments';
import LoadingSpinner from '../Util/LoadingSpinner';
import content from '../../data/comments.json';
import Error from '../Util/Error';
import { useFetchComments } from './useFetchComments';

const generateRatings = (comments) => comments.reduce((prev, current) => ({
  ...prev,
  [current.rating]: (prev[current.rating] || 0) + 1
}), []);

const Comments = () => {
  const [comments, setComments] = React.useState([]);

  const { isLoading, isError } = useFetchComments(setComments);

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
