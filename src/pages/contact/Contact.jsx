import React from 'react'
import { BreadCrumb } from '../../Component/commonComponents/BreadCrumbs'
import { FiPhone } from "react-icons/fi";

const Contact = () => {
     return (
          <div className='container'>
               <div className="">
                    <BreadCrumb />
               </div>
               <div className="flex justify-between items-start">
                    <div className="mb-[140px] max-w-[30%] py-[41px] px-[35px] shadow-lg">
                         <div className="flex items-center gap-x-2">
                              <div className="w-[40px] h-[40px] rounded-full bg-red_DB4444 flex justify-center items-center text-white text-[20px]">
                                   <FiPhone />
                              </div>
                              <h3 className='font-poppins text-4 font-medium'>Call To Us</h3>
                         </div>
                         <div className="mt-6 border-b-4 inline-block border-gray-600">
                              <h5 className='font-poppins text-[14px] font-normal'>
                                   We are available 24/7, 7 days a week.
                              </h5>
                              <a href="callto: +8801611112222" className='mt-4 mb-4 font-poppins text-[14px] font-normal'>Phone: +8801611112222</a>
                         </div>

                         <div className=" mt-8 flex items-center gap-x-2">
                              <div className="w-[40px] h-[40px] rounded-full bg-red_DB4444 flex justify-center items-center text-white text-[20px]">
                                   <FiPhone />
                              </div>
                              <h3 className='font-poppins text-4 font-medium'>Call To Us</h3>
                         </div>
                         <div className="mt-6 ">
                              <p className='font-poppins text-[14px] font-normal'>
                                   Fill out our form and we will contact you within 24 hours.
                              </p>
                              <a href='mailto:customer@exclusive.com' className='mt-4 mb-4 font-poppins text-[14px] font-normal'>Emails: customer@exclusive.com</a>
                              <a href='mailto:support@exclusive.com' className='mt-4 mb-4 font-poppins text-[14px] font-normal'>Emails: support@exclusive.com</a>
                         </div>

                    </div>

                    <div className="max-w-[65%] px-[32px] py-[40px] border rounded shadow-md">
                         <div className=" flex gap-x-3  ">
                              <input type="text" placeholder='name' className='border rounded bg-gray-100 py-[13px] px-[16px]' />
                              <input type="text" placeholder='name' className='border rounded bg-gray-100 py-[13px] px-[16px]' />
                              <input type="text" placeholder='name' className='border rounded bg-gray-100 py-[13px] px-[16px]' />
                         </div>
                         <div className="">
                              <textarea className=' p-5 block  mt-2 bg-gray-100 border w-[100%] h-[300px]' name="message" id="message" rows={4} placeholder='Your Massage '></textarea>
                         </div>

                    </div>

               </div>
          </div>
     )
}

export default Contact