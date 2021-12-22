import React from 'react';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`py-2 px-2 opacity-100 hover:opacity-75 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
