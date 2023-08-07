import React, { useState, useEffect } from 'react';
const useNumberAnimation = (shouldStart, targetValue, step, intervalDuration = 50) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let interval;

    if (shouldStart) {
      interval = setInterval(() => {
        if (currentValue < targetValue) {
          setCurrentValue((prevValue) => Math.min(prevValue + step, targetValue));
        } else {
          clearInterval(interval);
        }
      }, intervalDuration);
    }

    return () => {
      clearInterval(interval);
    };
  }, [currentValue, targetValue, step, intervalDuration, shouldStart]);

  return currentValue;
};
export default useNumberAnimation;