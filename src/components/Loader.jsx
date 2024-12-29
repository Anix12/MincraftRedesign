import React, { useEffect, useState } from "react";
import { mojang } from '../assets/index';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const simulateProgress = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 5;
        if (nextProgress >= 100) {
          clearInterval(simulateProgress);
          setIsLoading(false);
          return 100;
        }
        return nextProgress;
      });
    }, 100); // Interval duration (you can adjust this value)

    return () => clearInterval(simulateProgress);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'; // Hide scrollbar
    } else {
      document.body.style.overflow = 'auto'; // Show scrollbar
    }
  }, [isLoading]);

  return (
    isLoading && (
      <div
        id="loader-container"
        className="w-full fixed flex items-center justify-between flex-col z-[999999] h-screen bg-[#ef323d] p-10"
      >
        <div className="w-full flex flex-col h-full gap-3">
          <img
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            className="md:block hidden w-full h-full"
            alt=""
          />
          <img
            src={mojang}
            className="md:hidden block w-full h-full"
            alt=""
          />
        </div>

        <h1 className="font-[minecraftSeven] text-[10vh] invisible text-white">
          0%
        </h1>
        <div className="md:w-[50%] w-full p-2 border-4 border-white">
          <div
            id="progress-bar"
            className="p-3 bg-white"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <h1
          id="progress-text"
          className="font-[minecraftSeven] text-[10vh] text-white"
        >
          {progress}%
        </h1>
      </div>
    )
  );
};

export default Loader;
