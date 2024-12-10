import React from 'react'
import { IoSendOutline } from "react-icons/io5";
import Qrcode from "../../../assets/images/footer/Qrcode 1.png"

import AppStore from "../../../assets/images/footer/AppStore.png"
import playStore from "../../../assets/images/footer/playstor.png"
import { RiFacebookLine } from 'react-icons/ri';
import { CiTwitter } from 'react-icons/ci';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
     return (
          <div className='pt-20 pb-[60px] bg-text_000000'>
               <div className="container flex justify-between items-start pb-20">
                    <div className="Exclusive ">
                         <div className="">
                              <h1 className='text-text_white font-inter text-6 font-bold leading-6 traking-[0.72px] mb-6'>Exclusive</h1>

                              <h2 className='text-text_white font-poppins text-5 font-semibold leading-6 mb-6'>Subscribe</h2>
                              <p className='text-text_white font-poppins text-4 font-normal leading-6 mb-4'>Get 10% off your first order</p>
                         </div>
                         <div className="relative">
                              <input
                                   type="text"
                                   placeholder='Enter your email'
                                   className="py-2 rounded-md bg-transparent border-[2px] border-white px-3"
                              />
                              <span className=' text-text_white inline-block absolute top-1/2 -translate-y-1/2 left-[180px]'> <IoSendOutline /></span>
                         </div>

                    </div>
                    <div className="Support ">
                         <div className="">
                              <h1 className='text-text_white font-inter text-6 font-semibold leading-6 traking-[0.72px] mb-6'>Support</h1>
                         </div>
                         <div className="mt-[64px]">
                              <p className='text-text_white font-poppins text-4 font-normal leading-6 mb-4'>exclusive@gmail.com</p>
                              <span className='text-text_white font-poppins text-4 font-normal leading-6'>+88015-88888-9999</span>
                         </div>


                    </div>
                    <div className="Account text-white flex flex-col items-start gap-y-4">
                         <h1 className="font-normal font-popins text-[20px] ">Account</h1>
                         <p> Account</p>
                         <a href="#">Login / Register</a>
                         <a href="#">Cart</a>
                         <a href="#">Wishlist</a>
                         <a href="#">Shop</a>
                    </div>
                    {/* Quick Link */}
                    <div className="Quick Link">
                         <div className="text-white flex flex-col items-start gap-y-4">
                              <h2 className="font-inter text-[20px] font-medium text-white_FFFFFF cursor-pointer">
                                   Quick Link
                              </h2>
                              <p className="font-normal font-popins text-[16px] ">
                                   Privacy Policy
                              </p>
                              <a className="font-normal font-popins text-md">Terms Of Use</a>
                              <a href="#">FAQ</a>
                              <a href="#">Contact</a>
                         </div>
                    </div>
                    {/* Quick Link */}

                    {/* Download  App */}
                    <div className="text-white flex flex-col items-start gap-y-4">
                         <h2 className="font-inter text-[20px] font-medium text-white_FFFFFF cursor-pointer">
                              Download App
                         </h2>
                         <p className="font-normal font-popins text-[14px] opacity-75 ">
                              Save $3 with App New User Only
                         </p>
                         <div className="flex w-full ">
                              <div className="w-1/2 ">
                                   <img src={Qrcode} alt={Qrcode} />
                              </div>
                              <div className="w-1/2  h-full flex flex-col gap-y-2 ">
                                   <div className="w-full h-1/2">
                                        <img src={playStore} alt="playStore" />
                                   </div>
                                   <div className="w-full h-1/2">
                                        <img src={AppStore} alt="AppStore" />
                                   </div>
                              </div>
                         </div>
                         {/* icons */}
                         <div className="flex  items-center gap-x-6 mt-6">
                              <span className="text-xl">
                                   <RiFacebookLine />
                              </span>
                              <span className="text-xl">
                                   <CiTwitter />
                              </span>
                              <span className="text-xl">
                                   <FaInstagram />
                              </span>

                              <span className="text-xl">
                                   <FaLinkedinIn />
                              </span>
                         </div>
                         {/* icons */}
                    </div>
                    {/*  Download  App */}
               </div>
          </div>
     )
}

export default Footer