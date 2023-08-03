import React, { useState, useEffect } from 'react';

const useNumberAnimation = (targetValue, step, intervalDuration = 50) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentValue < targetValue) {
        setCurrentValue((prevValue) => Math.min(prevValue + step, targetValue));
      } else {
        clearInterval(interval); // Detener el intervalo cuando alcanza el valor objetivo
      }
    }, intervalDuration);

    return () => {
      clearInterval(interval); // Limpieza del intervalo al desmontar el componente
    };
  }, [currentValue, targetValue, step, intervalDuration]);

  return currentValue;
};

export default useNumberAnimation;