import React, { useEffect, useRef } from 'react';

const LoadPage = ({ loaderFinished }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    const handleAnimationEnd = () => {
      if (loaderFinished) {
        loaderFinished();
      }
    };

    progressRef.current.addEventListener('animationend', handleAnimationEnd);

    return () => {
      progressRef.current?.removeEventListener('animationend', handleAnimationEnd);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      {/* logo */}
      <img src="/images/Logo.svg" />
      {/* progress bar */}
      <div className="progress-bar">
        <div ref={progressRef}
          className="h-full bg-primary70 rounded-[5px]" style={{ animation: 'progress-animation 3s linear' }}
        ></div>
      </div>
    </div>
  );
};

export default LoadPage;
