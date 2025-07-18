import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { dummyShowsData, dummyDateTimeData } from '../assets/assets';
import BlurCircle from '../components/BlurCircle';
import timeFormat from '../lib/timeFormat';
import ReactPlayer from 'react-player';
import { Heart } from 'lucide-react';
import DateSelect from '../components/DateSelect';
import MovieCard from '../components/MovieCard';
import Tilt from 'react-parallax-tilt';
import { ArrowRight } from 'lucide-react';
import { scrollTo } from '../utils/scrollTo';
import { useNavigate } from 'react-router-dom';
import MovieDetailsSkeleton from '../components/MovieDetailsSkeleton';




const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(null);
  const [error, setError] = useState(null);
  const [playTrailer, setPlayTrailer] = useState(false);

  useEffect(() => {
    const match = dummyShowsData.find((movie) => String(movie._id) === String(id));
    if (!match) return setError('Movie not found.');
    setShow({ movie: match, dateTime: dummyDateTimeData });
  }, [id]);

  const scrollToDateSelect = () => {
  const section = document.getElementById('dateSelect');
  if (section) {
    const offset = section.getBoundingClientRect().top + window.scrollY - 100; // scroll 100px above
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }
  };

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-[#0d0d0d] via-black to-[#1a1a1a]">
        <p className="text-red-500 text-lg font-semibold">{error}</p>
      </div>
    );
  }

  if (!show?.movie) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-[#0d0d0d] via-black to-[#1a1a1a]">
        <p className="text-gray-300 text-lg font-semibold animate-pulse">Loading movie details...</p>
      </div>
    );
  }

  const { movie } = show;

  if (!show?.movie && !error) {
  return <MovieDetailsSkeleton />;
  }
   else return(
    <div className="relative px-6 md:px-12 lg:px-32 xl:px-52 pt-20 pb-24 bg-gradient-to-b from-[#0d0d0d] via-black to-[#1a1a1a] text-gray-300 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <BlurCircle top="-80px" left="-60px" size="220px" color="rgba(255, 0, 0, 0.15)" />
      <BlurCircle top="400px" right="-100px" size="240px" color="rgba(255, 100, 100, 0.12)" />
      <BlurCircle top="100px" left="60%" size="160px" color="rgba(255, 255, 255, 0.08)" />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto relative z-10 pt-14">
        <img
          src={movie.poster_path}
          alt={movie.title}
          className="rounded-xl shadow-lg transition-transform duration-500 h-[14rem] w-auto"
        />
        <div className="flex flex-col">
          <p className="text-sm text-red-500 uppercase tracking-wide">Language: {movie.original_language}</p>
          <h1 className="text-4xl font-bold text-white leading-snug">{movie.title}</h1>
          <p className="text-gray-400 italic text-md">{movie.tagline}</p>
          <div className="flex items-center gap-4 mt-2 text-sm">
            <span className="text-red-400 font-semibold text-lg">{movie.vote_average.toFixed(1)}</span>
            <span className="text-gray-400">● {movie.vote_count.toLocaleString()} votes</span>
          </div>
          <div className="flex gap-4 mt-4 flex-wrap">
            <button
              onClick={() => setPlayTrailer(true)}
              className="px-5 py-2 bg-indigo-500 hover:bg-indigo-400 rounded-md text-sm text-white font-medium transition"
            >
              Watch Trailer
            </button>
            <button
              onClick={scrollToDateSelect}
              className="px-5 py-2 bg-red-500 hover:bg-red-400 rounded-md text-sm text-white font-medium transition"
            >
              Buy Now
            </button>
            <button className="bg-gray-700 p-2.5 rounded-full transition cursor-pointer active:scale-95">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Metadata */}
      <div className="mt-2 ml-10 mx-auto text-sm text-gray-400 space-y-3 relative z-10">
        <p>
          <span className="font-semibold text-white">Release:</span>{' '}
          {new Date(movie.release_date).toLocaleDateString()}
        </p>
        <p>
          <span className="font-semibold text-white">Genres:</span>{' '}
          {movie.genres.map((g) => g.name).join(', ')}
        </p>
        <p>
          <span className="font-semibold text-white">Runtime:</span>{' '}
          {timeFormat(movie.runtime)}
        </p>
      </div>

      {/* Overview */}
      <div className="mt-12 max-w-4xl mx-auto relative z-10">
        <h2 className="text-xl font-semibold text-white mb-3 border-b border-gray-700 pb-2">Overview</h2>
        <p className="text-gray-300 leading-relaxed tracking-wide">{movie.overview}</p>
      </div>

      {/* Trailer Section */}
      {playTrailer && (
        <div className="mt-16 max-w-5xl mx-auto relative z-10">
          <h2 className="text-xl text-white font-semibold mb-4">{movie.title} – Trailer</h2>
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${movie._id}`}
              width="100%"
              height="480px"
              controls
              className="bg-black"
            />
          </div>
        </div>
      )}

      {/* Cast Section */}
      {movie.casts && Array.isArray(movie.casts) && (
        <div className="mt-20 relative z-10">
          <h2 className="text-xl font-semibold text-white mb-6 text-center">Cast</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {movie.casts.map((cast, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <img
                  src={cast.profile_path}
                  alt={cast.name}
                  className="w-24 h-24 object-cover rounded-full border border-gray-600 mb-2 shadow-md hover:scale-105 transition"
                />
                <p className="text-sm font-medium text-gray-300">{cast.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Date Select Section */}
      <DateSelect dateTime={show.dateTime} id={id} />
      
      {/* Recommended Movies Section */}
{dummyShowsData.length > 0 && (
  <div className="mt-32 relative z-10 px-6 md:px-16 lg:px-24 xl:px-44">
    <BlurCircle top="0" right="-100px" />
    <BlurCircle top="300px" left="-80px" />
    <div className="flex items-center justify-between pb-10">
      <p className="text-gray-200 font-semibold text-xl tracking-wide pl-2">Recommended Movies</p>
      <button
        onClick={() => {
          navigate('/movies');
          scrollTo(0, 0);
        }}
        className="group flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-all duration-50 cursor-pointer"
      >
        View All
        <ArrowRight className="group-hover:translate-x-1 transition-transform w-4.5 h-4.5" />
      </button>
    </div>

    <div className="flex flex-wrap justify-center gap-6">
      {dummyShowsData.slice(1, 5).map((movie) => (
        <Tilt
          key={movie._id}
          glareEnable={true}
          glareMaxOpacity={0.1}
          glareColor="#ffffff"
          tiltMaxAngleX={2}
          tiltMaxAngleY={2}
          scale={1.01}
          transitionSpeed={2000}
          className="rounded-xl shadow-xl hover:shadow-red-500/20 duration-300"
        >
          <MovieCard movie={movie} />
        </Tilt>
      ))}
    </div>

    <div className="flex justify-center mt-14">
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
)}


    </div>
  );

};

export default MovieDetails;