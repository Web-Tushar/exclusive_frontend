import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import image from '../../assets/images/remoot.png'
import { FiEye } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";

const ProductCard = () => {
     return (
          <div>
               <div>
                    <div className="w-[270px] h-[250px] bg-white_5F5  pt-3 pb-[49px]">
                         <div className='flex justify-between px-3   '>
                              <span className='bg-red_DB4444 py-[4px] text-text_white font-poppins text-[12px] px-[12px] font-normal rounded-[4px] block'>-40%</span>

                              <span className=' text-[20px] w-[34px] h-[34px] bg-white_FFFFFF flex justify-center items-center rounded-full cursor-pointer hover:bg-red-400 hover:text-white'><FaRegHeart /></span>
                         </div>
                         <div className='mt-[11px] mx-[49px]  flex h-[152px] w-[172px] object-cover relative '>
                              <img
                                   src={image}
                                   alt={image}
                                   className='h-full w-full object-contain cursor-pointer'
                              />
                              <span className=' absolute text-[20px] top-[0px] right-[-36px] w-[34px] h-[34px] bg-white_FFFFFF flex justify-center items-center rounded-full cursor-pointer hover:bg-red-400 hover:text-white'><FiEye /></span>

                         </div>
                    </div>
                    <div className='w-[270px] mt-[16px]'>
                         <h2 className='text-text_000000 font-poppins text-[16px] font-medium	'>HAVIT HV-G92</h2>
                         <div className='flex gap-x-3 mt-2'>
                              <span className='text-red_DB4444 font-poppins text-[16px] font-medium	'>$120</span>
                              <span className='text-text_000000 opacity-[0.5] font-poppins text-[16px] font-medium	'>$160</span>
                         </div>
                         <div className='flex items-center gap-x-2 mt-2'>
                              <div className='flex '>
                                   <span className='text-star'><GoStarFill /></span>
                                   <span className='text-star'><GoStarFill /></span>
                                   <span className='text-star'><GoStarFill /></span>
                                   <span className='text-star'><GoStarFill /></span>
                                   <span className='text-star'><GoStarFill /></span>

                              </div>
                              <div>
                                   <span>(88)</span>
                              </div>

                         </div>
                    </div>
               </div>

          </div>
     )
}

export default ProductCard