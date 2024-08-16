import React from 'react';
import './Animations.css'; 

const AnimatedBackground = () => {
  return (
    <div className="background">
      {[...Array(20)].map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
  );
};

export default AnimatedBackground;
