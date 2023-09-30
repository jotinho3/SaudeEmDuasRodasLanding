import React, { useState, useEffect } from 'react';
import './NumberAnimation.css';

interface NumberAnimationProps {
  startNumber: number;
  finalNumber: number;
}

const NumberAnimation: React.FC<NumberAnimationProps> = ({ startNumber, finalNumber }) => {
  const [number, setNumber] = useState(startNumber);

  useEffect(() => {
    const interval = setInterval(() => {
      if (number < finalNumber) {
        setNumber(prevNumber => prevNumber + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [number, finalNumber]);

  return (
  
   
      <div className="number">{number}</div>
  
  );
};

export default NumberAnimation;
