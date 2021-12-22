import React from 'react';
import RATING_COUNT from '../../../constants/ratingCount';

const Comment = ({
  name,
  email,
  rating,
  comment
}) => {
  return (
    <>
      <div className="my-8">
        <div className="font-bold">
          <p>{comment}</p>
        </div>
        <div className="pt-4 flex items-baseline justify-between">
          <div className="italic text-xs">
            <span className="font-extrabold">{name}</span>
            {' | '}
            <span className="text-slate-500">{email}</span>
          </div>
          <div>
            <span>{`${rating}/${RATING_COUNT}`}</span>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Comment;
