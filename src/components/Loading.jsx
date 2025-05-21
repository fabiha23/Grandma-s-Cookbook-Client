import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

const Loading = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/Main Scene.json') // make sure it's exactly this path in public
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div className='w-40 mx-auto'>
      {animationData && (
        <Lottie animationData={animationData} loop={true} />
      )}
    </div>
  );
};

export default Loading;
