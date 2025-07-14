// src/components/MovieDetailsSkeleton.jsx
const MovieDetailsSkeleton = () => {
  return (
    <div className="animate-pulse px-6 md:px-12 lg:px-32 xl:px-52 pt-20 pb-24 bg-gradient-to-b from-[#0d0d0d] via-black to-[#1a1a1a] text-gray-300">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
        <div className="h-[14rem] w-[10rem] bg-gray-700 rounded-lg" />
        <div className="flex flex-col flex-1 space-y-3">
          <div className="h-4 w-24 bg-gray-700 rounded" />
          <div className="h-8 w-3/4 bg-gray-700 rounded" />
          <div className="h-4 w-2/3 bg-gray-600 rounded" />
          <div className="flex gap-4 mt-2">
            <div className="h-8 w-20 bg-gray-700 rounded" />
            <div className="h-8 w-20 bg-gray-700 rounded" />
            <div className="h-8 w-8 bg-gray-700 rounded-full" />
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-3">
        <div className="h-4 w-32 bg-gray-700 rounded" />
        <div className="h-4 w-64 bg-gray-600 rounded" />
        <div className="h-4 w-40 bg-gray-700 rounded" />
      </div>

      <div className="mt-12 max-w-4xl mx-auto space-y-4">
        <div className="h-6 w-40 bg-gray-700 rounded" />
        <div className="h-4 w-full bg-gray-700 rounded" />
        <div className="h-4 w-full bg-gray-700 rounded" />
        <div className="h-4 w-full bg-gray-700 rounded" />
      </div>
    </div>
  );
};

export default MovieDetailsSkeleton;