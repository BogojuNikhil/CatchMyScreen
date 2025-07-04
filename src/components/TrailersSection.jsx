import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import BlurCircle from "./BlurCircle";
import ReactPlayer from "react-player";
import { PlayCircleIcon } from "@heroicons/react/24/outline";

// Filter to remove duplicates based on videoUrl
const uniqueTrailers = dummyTrailers.filter(
  (trailer, index, self) =>
    index === self.findIndex((t) => t.videoUrl === trailer.videoUrl)
);

const TrailersSection = () => {
  const [currentTrailer, setcurrentTrailer] = useState(uniqueTrailers[0]);

  return (
    <div className="px-6 md:px-16 lg:px-44 py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <p className="text-gray-100 font-semibold text-xl tracking-wide text-center">
        Trailers
      </p>

      <div className="relative mt-10 flex justify-center items-center min-h-[500px]">
        <BlurCircle top="100px" right="100px" />
        <ReactPlayer
          src={currentTrailer.videoUrl}
          controls
          width="960px"
          height="540px"
          className="mx-auto rounded-xl shadow-md"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 max-w-6xl mx-auto">
        {uniqueTrailers.map((trailer, index) => (
          <div
            key={index}
            onClick={() => setcurrentTrailer(trailer)}
            className={`relative transition-all duration-300 cursor-pointer rounded-xl overflow-hidden ${
              currentTrailer.videoUrl === trailer.videoUrl
                ? "ring-2 ring-indigo-500"
                : "hover:brightness-105 hover:scale-[1.02]"
            }`}
          >
            <img
              src={trailer.image}
              alt={`Trailer ${index + 1}`}
              className="w-full h-full object-cover brightness-75 transition-all duration-300"
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailersSection;