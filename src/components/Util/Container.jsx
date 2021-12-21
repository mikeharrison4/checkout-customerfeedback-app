import React from 'react';

// this component restricts the width of the content
const Container = ({ className = '', children }) => {
  return (
    <div className={`${className} flex flex-col items-center py-20`}>
      <div className="w-2/5">
        {children}
      </div>
    </div>
  );
};

export default Container;
