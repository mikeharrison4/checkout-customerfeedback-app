import React from 'react';

const Button = ({ id, children, className, ...props }) => {
  return (
    <button
      id={id}
      className={`py-2 px-2 opacity-100 hover:opacity-75 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
