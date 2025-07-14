import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import Loading from '../components/Loading';

const Seatlayout = () => {
   
  const {id, date} = useParams();
  const[selectedSeats, setSelectedSeats] = useState([]);
  const[selectedtime, setSelectedTime] = useState('');
  const[show, setShow] = useState({});

  const navigate = useNavigate();
  const getshow=async () => {
     const show=dummyShowsData.find((show) => show._id === id);
     if(show) {
      setShow({
        movie: show,
        dateTime:dummyDateTimeData
     }) 
  }
}

  useEffect(() => {
    getshow();
  }, []);

  return show ? (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 px-6 py-30 md:pt-50">
       <div className="w-60 bg-red-200 border border-red-100 rounded-lg py-10 h-max md:sticky md:top-30">
         <p className='text-lg font-semibold px-6'>Available Timings </p>
         <div className="mt-5 space-y-1">
          {show.dateTime[date].map((item) => (
            <div className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition ${selectedTime ?.time === item.time ? 'bg-red-300' : 'bg-red-200'} hover:bg-red-300'}`}>
            </div>
          ))}
         </div>
       </div>     
    </div>
  ) : (
    <Loading/>
  );
}

export default Seatlayout
