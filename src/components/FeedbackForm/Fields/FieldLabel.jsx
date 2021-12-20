import React from 'react';
import FieldError from './FieldError';

const FieldLabel = ({ 
  label,
  name,
  hasErrorOccurred,
  error,
  className
}) => (
  <label
    htmlFor={name}
    className={className}
  >
    <span>{label}</span>
    { hasErrorOccurred
      && (
        <FieldError error={error} />
      )
    }
  </label>
);

export default FieldLabel;
