import React from 'react';

const Card = ({ width, children }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md ${width}`}>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default Card;
