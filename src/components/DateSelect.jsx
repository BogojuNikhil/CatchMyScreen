import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import BlurCircle from './BlurCircle';
import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { scrollTo } from '../utils/scrollTo';


const DateSelect = ({ id }) => {
  const [dateTIme, setDateTIme] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const dates = {};
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i);
      const key = futureDate.toISOString().split('T')[0];
      dates[key] = true;
    }

    setDateTIme(dates);
  }, []);

  const onBookHandler = () => {
    if (!selectedDate) {
      toast.error('Please select a date before booking!');
      return;
    }
    navigate(`/movies/${id}/${selectedDate}`);
    scrollTo(0, 0);
  };

  const hasDates = dateTIme && typeof dateTIme === 'object' && Object.keys(dateTIme).length > 0;

  return (
    <div id='dateSelect' className='pt-30'>
      <Toaster />
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative p-8 mt-10 bg-black border border-red-500 rounded-lg shadow-[0_10px_30px_#ef2222]">
        <BlurCircle top='-100px' left='-100px' />
        <BlurCircle top='100px' left='0px' />

        <div className="w-full">
          <p className='text-lg font-semibold text-white'>Choose Date</p>
          <div className="flex items-center gap-6 text-sm mt-5">
            <ChevronLeftIcon width={28} className="text-white" />
            <div className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4'>
              {hasDates ? (
                Object.keys(dateTIme).map((date) => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded cursor-pointer bg-black border ${
                      selectedDate === date ? 'bg-red-300' : 'border-red-500 border-red-400 scale-105 ring-2 ring-red-300'
                    } shadow hover:scale-105 transition-all text-white border-red-500`}
                  >
                    <span className="font-semibold">{new Date(date).getDate()}</span>
                    <span className={`text-xs ${selectedDate === date ? 'text-white/80' : 'text-muted'}`}>
                      {new Date(date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                  </button>
                ))
              ) : (
                <div className="text-center text-sm text-gray-300 font-medium p-4 border rounded bg-black border-red-100 shadow">
                  No dates available. Please check again later.
                </div>
              )}
            </div>
            <ChevronRightIcon width={28} className="text-white" />
          </div>
        </div>

        <div className="w-auto md:w-auto text-right">
          <button
            onClick={onBookHandler}
            className='bg-red-500 text-white px-14 py-2 rounded-md mt-6 hover:bg-red-400 transition-all cursor-pointer'
          >
            BookNow
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateSelect;