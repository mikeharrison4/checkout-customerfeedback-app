import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const chartColours = ['#CCDBDC', '#9AD1D4', '#80CED7', '#007EA7', '#0C1142'];

const BarGraph = ({ ratings }) => {
  const chartLabels = Object.keys(ratings);
  const chartData = Object.values(ratings);

  return (
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
  );
};

export default BarGraph;
