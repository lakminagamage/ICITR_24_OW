import React, { useState, useEffect } from 'react';

function ClockFace({ number, text }) {
  return (
    <div className= 'w-16 md:w-32 ml-2 md:ml-6'>
      <div className='border-solid border-2 border-white rounded-lg h-14 md:h-28 flex justify-center items-center'>
        <div className='text-white text-center text-2xl md:text-6xl'>
          {number}
        </div>
      </div>
      <div className='text-white text-center text-xs md:text-xl'>
        {text}
      </div>
    </div>
  )
}

function Colon() {
  return (
    <div className='text-white text-center text-2xl md:text-6xl mt-3 md:mt-7 ml-2 md:ml-6'>:</div>
  )
}

export default function Clock() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0); // Add seconds state

  useEffect(() => {
    const countdown = setInterval(() => {
      const currentDate = new Date();
      const targetDate = new Date('2025-12-05T08:59:59'); // Replace with your target date and time

      const timeDifference = targetDate - currentDate;

      if (timeDifference > 0) {
        const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const remainingSeconds = Math.floor((timeDifference % (1000 * 60)) / 1000); // Calculate remaining seconds

        setDays(remainingDays);
        setHours(remainingHours);
        setMinutes(remainingMinutes);
        setSeconds(remainingSeconds); // Set seconds state
      } else {
        clearInterval(countdown);
      }
    }, 1000); // 1 second

    return () => {
      clearInterval(countdown);
    };
  }, []);

  return (
    <div className='bg-gradient-to-br from-blue-primary to-blue-400 w-full'>
      <div className="px-5 py-7 flex justify-center">
        <ClockFace number={days.toString().padStart(2, '0')} text='Days' />
        <Colon />
        <ClockFace number={hours.toString().padStart(2, '0')} text='Hours' />
        <Colon />
        <ClockFace number={minutes.toString().padStart(2, '0')} text='Minutes' />
        <Colon />
        <ClockFace number={seconds.toString().padStart(2, '0')} text='Seconds' />
      </div>
    </div>
  );
}
