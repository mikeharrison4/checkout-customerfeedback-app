import React from 'react';

const LoadingSpinner = ({ className }) => (
  <div className={`border-r-transparent animate-spin inline-block w-8 h-8 border-4 rounded-full ${className}`} role="status" />
);

export default LoadingSpinner;
