import React, { useState } from 'react';
import Button from '../../Util/Button';
import BarGraph from './BarGraph';
import content from '../../../data/ratingTrends.json';

const RatingTrends = ({ commentRatings }) => {
  const [showChart, setShowChart] = useState(false);

  return (
    <div className='mb-20'>
      <Button
        className="bg-primary text-white"
        onClick={() => setShowChart(!showChart)}
      >
        {content.ratingTrendsBtnText}
      </Button>
      <div className="my-8">
        { showChart
          && (
            <BarGraph ratings={commentRatings} />
          )
        }
      </div>
    </div>
  );
};

export default RatingTrends;
