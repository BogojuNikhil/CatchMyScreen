import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-red-500 font-sans">
      <div className="animate-spin border-4 border-red-500 border-t-transparent rounded-full w-14 h-14"></div>
      <p className="mt-4 text-lg tracking-wide">Loading...</p>
    </div>
  );
};

export default Loading;