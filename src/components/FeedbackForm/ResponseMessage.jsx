import React, { useEffect, useState } from 'react';

const ResponseMessage = ({ message, isError }) => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  }, []);
  
  if (showPopup) {
    return (
      <div className={`absolute top-0 right-0 m-3 text-white ${isError ? 'bg-pink-500' : 'bg-green-500'}`}>
        <div className="flex justify-between p-3">
          { message }
        </div>
      </div>
    );
  }

  return null;
};

export default ResponseMessage;
