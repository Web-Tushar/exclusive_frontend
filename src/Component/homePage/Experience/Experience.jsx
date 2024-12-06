import React, { useEffect, useState } from 'react'
import Experienceimg from "../../../assets/images/jbl_box.png"

const Experience = ({timeDuration = 1 }) => {
     const [Time, setTime] = useState(timeDuration * 24 * 60 * 60 * 1000 || 0);

     useEffect(() => {
          const worker = new Worker(
               new URL("../../../../CountDownWorker.js", import.meta.url)
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
          <div className='container  mt-[140px] '>
               <div className="bg-black flex  ">
                    <div className='w-1/2 py-[69px] pl-[56px] pr-[43px]'>
                         <h3 className='text-[#0F6] font-poppins text-[16px] font-semibold'>Categories</h3>
                         <h2 className='text-text_white font-Inter text-[48px] font-semibold leading-[60px] tracking-[1.92px]'>Enhance Your Music Experience</h2>
                         <div className=" flex gap-6 mt-8">
                              <div className="w-[62px] h-[62px] flex justify-center items-center bg-white rounded-[50%]">
                                   <div className="flex flex-col items-center gap-x-[-10px]">
                                        <span className='text-text_000000 font-poppins font-semibold'>{Days?Days:0}</span>
                                        <span className='text-text_000000 font-poppins font-normal	' >Days</span>
                                   </div>
                              </div>
                              <div className="w-[62px] h-[62px] flex justify-center items-center bg-white rounded-[50%]">
                                   <div className="flex flex-col items-center gap-x-[-10px]">
                                        <span className='text-text_000000 font-poppins font-semibold	'>{hours?hours:0}</span>
                                        <span className='text-text_000000 font-poppins font-normal	' >hours</span>
                                   </div>
                              </div>
                              <div className="w-[62px] h-[62px] flex justify-center items-center bg-white rounded-[50%]">
                                   <div className="flex flex-col items-center gap-x-[-10px]">
                                        <span className='text-text_000000 font-poppins font-semibold	'>{minutes?minutes:0}</span>
                                        <span className='text-text_000000 font-poppins font-normal	' >minutes</span>
                                   </div>
                              </div>
                              <div className="w-[62px] h-[62px] flex justify-center items-center bg-white rounded-[50%]">
                                   <div className="flex flex-col items-center gap-x-[-10px]">
                                        <span className='text-text_000000 font-poppins font-semibold	'>{second?second:0}</span>
                                        <span className='text-text_000000 font-poppins font-normal	' >second</span>
                                   </div>
                              </div>
                         </div>
                         <div className=" mt-[40px] bg-[#0F6] text-md font-popins font-medium text-white_FFFFFF px-[48px] py-4 rounded cursor-pointer hover:opacity-75 inline-block">
                              Buy Now!
                         </div>

                    </div>

                    <div className=' w-1/2  flex items-center justify-center imgShadow pr-11'>
                         <img
                              className='w-full h-full object-contain z-10  '
                              src={Experienceimg}
                              alt="Experienceimg" />
                         {/* <div className="w-[504px] h-[500px]  rounded-[504px] bg-[#D9D9D9] opacity-[0.3] blur-[100px]">
                         </div> */}
                    </div>
               </div>
          </div>
     )
}

export default Experience