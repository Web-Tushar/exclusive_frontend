import React from 'react'
import Experienceimg from "../../../assets/images/jbl_box.png"

const Experience = () => {
     return (
          <div className='container  mt-[140px] '>
               <div className="bg-black flex  ">
                    <div className='w-1/2 py-[69px] pl-[56px] pr-[43px]'>
                         <h3 className='text-[#0F6] font-poppins text-[16px] font-semibold'>Categories</h3>
                         <h2 className='text-text_white font-Inter text-[48px] font-semibold leading-[60px] tracking-[1.92px]'>Enhance Your Music Experience</h2>
                         <div className=" flex gap-6 mt-8">
                              <div className="w-[62px] h-[62px] flex justify-center items-center bg-white rounded-[50%]">
                                   <div className="flex flex-col items-center gap-x-[-10px]">
                                        <span className='text-text_000000 font-poppins font-semibold'>23</span>
                                        <span className='text-text_000000 font-poppins font-normal	' >hours</span>
                                   </div>
                              </div>
                              <div className="w-[62px] h-[62px] flex justify-center items-center bg-white rounded-[50%]">
                                   <div className="flex flex-col items-center gap-x-[-10px]">
                                        <span className='text-text_000000 font-poppins font-semibold	'>23</span>
                                        <span className='text-text_000000 font-poppins font-normal	' >hours</span>
                                   </div>
                              </div>
                              <div className="w-[62px] h-[62px] flex justify-center items-center bg-white rounded-[50%]">
                                   <div className="flex flex-col items-center gap-x-[-10px]">
                                        <span className='text-text_000000 font-poppins font-semibold	'>23</span>
                                        <span className='text-text_000000 font-poppins font-normal	' >hours</span>
                                   </div>
                              </div>
                              <div className="w-[62px] h-[62px] flex justify-center items-center bg-white rounded-[50%]">
                                   <div className="flex flex-col items-center gap-x-[-10px]">
                                        <span className='text-text_000000 font-poppins font-semibold	'>23</span>
                                        <span className='text-text_000000 font-poppins font-normal	' >hours</span>
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