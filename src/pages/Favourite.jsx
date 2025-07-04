import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlurCircle from '../components/BlurCircle';
import { scrollTo } from '../utils/scrollTo';
import { dummyShowsData } from '../assets/assets';
import MovieCard from '../components/MovieCard';
import Tilt from 'react-parallax-tilt';

const Movies = () =>  {
  const navigate = useNavigate();

  return dummyShowsData.length > 0 ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden bg-gradient-to-b from-[#0d0d0d] via-black to-[#1a1a1a]">
      <div className="relative flex items-center justify-between pt-20 pb-10">
        <BlurCircle top="0" right="-80px" />
        <p className="text-gray-200 pt-16 pl-10 font-semibold text-xl tracking-wide">
          Now Showing
        </p>
        <button
          onClick={() => navigate('/movies')}
          className="group flex items-center gap-2 pt-14 text-sm text-gray-300 hover:text-white transition-all duration-50 cursor-pointer"
        >
          View All
          <ArrowRight className="group-hover:translate-x-1 transition-transform w-4.5 h-4.5" />
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {dummyShowsData.slice(0, 4).map((show) => (
          <Tilt
            key={show._id}
            glareEnable={true}
            glareMaxOpacity={0.1}
            glareColor="#ffffff"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.03}
            transitionSpeed={400}
            className="rounded-xl shadow-xl hover:shadow-red-500/20 duration-300"
          ><MovieCard movie={show} />
          </Tilt>
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <button
          onClick={() => {
            navigate('/movies');
            scrollTo(0, 0);
          }}
          className="px-10 py-3 text-sm bg-red-500 hover:bg-red-600 transition-all rounded-md shadow-md hover:shadow-red-400/40 font-medium cursor-pointer"
        >
          Show More
        </button>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-[#0d0d0d] via-black to-[#1a1a1a]">
      <p className="text-gray-300 text-lg font-semibold">
        No movies available at the moment.
      </p>
    </div>
  );
};

export default Movies;