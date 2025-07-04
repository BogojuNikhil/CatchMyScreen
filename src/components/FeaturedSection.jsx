import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlurCircle from './BlurCircle';
import { scrollTo } from '../utils/scrollTo';
import { dummyShowsData } from '../assets/assets';
import MovieCard from './MovieCard';
import Tilt from 'react-parallax-tilt';

const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
      <div className='relative flex items-center justify-between pt-20 pb-10'>
        <BlurCircle top='0' right='-80px' />
        <p className='text-gray-300 font-medium text-lg'>Now showing</p>
        <button
          onClick={() => navigate('/movies')}
          className='cursor-pointer group flex items-center gap-2 text-sm text-gray-300'
        >
          View All
          <ArrowRight className='group-hover:translate-x-0.5 transition w-4.5 h-4.5' />
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {dummyShowsData.slice(0, 4).map((show) => (
          <Tilt
            key={show._id}
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.03}
            transitionSpeed={250}
            className="rounded-lg"
          >
            <MovieCard movie={show} />
          </Tilt>
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <button
          onClick={() => {
            navigate('/movies');
            scrollTo(0, 0);
          }}
          className='px-10 py-3 text-sm bg-red-500 hover:bg-primary-dull transition rounded-md border-radius-10 font-medium cursor-pointer'
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;