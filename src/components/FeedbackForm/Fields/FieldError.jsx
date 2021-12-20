import React from 'react';

const FieldError = ({ error }) => (
  <span className="absolute text-xs right-0 text-pink-500">
    {error}
  </span>
);

export default FieldError;
