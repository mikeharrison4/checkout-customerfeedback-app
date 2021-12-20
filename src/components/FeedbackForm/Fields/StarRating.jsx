import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({
  value,
  setFieldValue, 
  ratingCount,
  activeColor,
  inactiveColor
}) => {
  const [hoverRating, setHoverRating] = useState(value);
  const stars = Array.from({ length: ratingCount },
    () => <FontAwesomeIcon icon={faStar} />
  );

  const handleStarClick = rating => {
    setFieldValue('rating', rating + 1);
  };

  return (
    <div className="py-3 text-2xl">
      { stars.map((star, idx) => {
        let starColor = inactiveColor;
        if (idx < value || idx < hoverRating) {
          starColor = activeColor;
        }
        return (
          <span
            key={idx}
            className={`mr-2 cursor-pointer ${starColor} hover:${activeColor}`}
            onMouseEnter={() => setHoverRating(idx + 1)}
            onMouseLeave={() => setHoverRating(value)}
            onClick={() => handleStarClick(idx)}
          >
            {star}
          </span>
        );
      }) }
    </div>
  );
};

export default StarRating;
