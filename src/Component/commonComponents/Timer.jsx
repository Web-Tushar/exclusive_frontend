import React, { useEffect, useState } from 'react'

const Timer = ({ TimeofOffer }) => {
     const [Time, setTime] = useState(TimeofOffer * 24 * 60 * 60 * 1000 || 0);

     useEffect(() => {
          const worker = new Worker(
               new URL("../../../CountDownWorker.js", import.meta.url)
          );
          worker.postMessage(Time);
          worker.onmessage = (e) => {
               setTime(e.data);
          };
     }, []);

     // useEffect(()=>{
     //      setTimeout(() => {
     //           setTime(time - 1000)
     //      }, 1000);
     // }, [time])
     const formateDate = (milisecond) => {
          let total_second = parseInt(Math.floor(milisecond / 1000));
          let total_minutes = parseInt(Math.floor(total_second / 60));
          let total_hours = parseInt(Math.floor(total_minutes / 60));
          let Days = parseInt(Math.floor(total_hours / 24));
          let second = parseInt(Math.floor(total_second % 60));
          let minutes = parseInt(Math.floor(total_minutes % 60));
          let hours = parseInt(Math.floor(total_hours % 60));
          return { Days, second, minutes, hours };

     }
     const { Days, hours, minutes, second } = formateDate(Time)
     return (
          <div className='container'>
               <div className='flex items-center  gap-x-[17px]'>

                    <div>
                         <span className='font-poppins text-[12px] font-medium text-text_000000'>Days</span>
                         <h2 className='text-text_000000 font-Inter text-[32px] font-bold	'>
                              {Days < 10 && `0${Days}`}

                         </h2>
                    </div>
                    <span className='text-red-700 text-[40px]'>:</span>
                    <div>
                         <span className='font-poppins text-[12px] font-medium text-text_000000'>Hours</span>
                         <h2 className='text-text_000000 font-Inter text-[32px] font-bold	'>{hours && hours}</h2>
                    </div>
                    <span className='text-red-700 text-[40px]'>:</span>

                    <div>
                         <span className='font-poppins text-[12px] font-medium text-text_000000'>Minutes</span>
                         <h2 className='text-text_000000 font-Inter text-[32px] font-bold	'>{minutes && minutes}</h2>
                    </div>
                    <span className='text-red-700 text-[40px]'>:</span>

                    <div>
                         <span className='font-poppins text-[12px] font-medium text-text_000000'>Seconds</span>
                         <h2 className='text-text_000000 font-Inter text-[32px] font-bold	'>{second && second}</h2>
                    </div>
               </div>
          </div>
     )
}

export default Timer