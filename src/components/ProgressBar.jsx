import React, { useEffect, useRef } from 'react';

const ProgressBar = ({ loaderFinished }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    const handleAnimationEnd = () => {
      if (loaderFinished) {
        loaderFinished();
      }
    };

    progressRef.current.addEventListener('animationend', handleAnimationEnd);

    return () => {
      progressRef.current.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  return (
    <div className="progress-bar">
      <div ref={progressRef}
        className="h-full bg-primary70 rounded-[5px]" style={{ animation: 'progress-animation 4s linear' }}
      ></div>
    </div>
  );
};

export default ProgressBar;
