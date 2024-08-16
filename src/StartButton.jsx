import React from 'react';

const StartButton = () => {
  const handleClick = () => {
    console.log('Test Started');
  };

  return (
    <button className="start-button" onClick={handleClick}>
      Start Test
    </button>
  );
};

export default StartButton;
