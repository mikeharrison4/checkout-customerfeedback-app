import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import content from '../../../data/ratingTrends.json';

const chartColours = ['#CCDBDC', '#9AD1D4', '#80CED7', '#007EA7', '#0C1142'];

const BarGraph = ({ ratings }) => {
  const chartLabels = Object.keys(ratings);
  const chartData = Object.values(ratings);

  return (
    <figure>
      <figcaption className='mb-3'>{content.ratingTrendsDescription}</figcaption>
      <Doughnut
        height={400}
        width={600}
        data={{
          labels: chartLabels,
          datasets: [{
            label: 'Ratings',
            backgroundColor: chartColours,
            data: chartData,
          }]
        }}
      />
    </figure>
  );
};

export default BarGraph;
