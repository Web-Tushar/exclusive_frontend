import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import image from '../../assets/images/remoot.png';
import { FiEye } from "react-icons/fi";
import UseCalculateIDiscount from '../../Hooks/UseCalculateIDiscount';
import Star from './Star';
import { Link,useNavigate } from 'react-router-dom';

const ProductCard = ({ itemData }) => {

     return (
          <div>
               <Link to={`/ProductDetails/${itemData.id}`}>
               <div className='w-full '>
                    <div className="w-full px-3 rounded-[2px] h-[250px] bg-white_5F5 mt-[31px] pt-3 pb-[49px] group  cursor-pointer">
                         <div className='flex justify-between    '>
                              {itemData?.discountPercentage && (
                                   <span className='bg-red_DB4444 py-[4px] text-text_white font-poppins text-[12px] px-[12px] font-normal rounded-[4px] block'>-{itemData ? itemData.discountPercentage : 0}%

                                   </span>
                              )}

                              <span className=' text-[20px] w-[34px] h-[34px] bg-white_FFFFFF flex justify-center items-center rounded-full cursor-pointer hover:bg-red-400 hover:text-white'><FaRegHeart /></span>
                         </div>
                         <div className='mt-[11px]  flex justify-between'>
                              <div className="w-[172px]   h-[152px] flex-1">
                                   <img
                                        src={itemData ? itemData.thumbnail : image}
                                        alt={image}
                                        className='h-full w-full object-contain cursor-pointer'
                                   />
                              </div>
                              <span className='  text-[20px] w-[34px] h-[34px] bg-white_FFFFFF flex justify-center items-center rounded-full cursor-pointer hover:bg-red-400 hover:text-white'>
                                   <FiEye />
                              </span>

                         </div>
                         <div className="overlay opacity-0 cursor-pointer h-[41px] font-poppins font-medium text-[16px] w-full bg-button_000000 items-center capitalize  text-white flex justify-center duration-500   group-hover:opacity-100">
                              <h3>add to cart</h3>
                         </div>
                    </div>
                    <div className='w-full mt-[16px]'>
                         <h2 className='text-text_000000 font-poppins text-[16px] cursor-pointer font-medium truncate	'>{itemData ? itemData.title : "data"}</h2>
                         <div className='flex gap-x-3 mt-2'>
                              <span className='text-red_DB4444 font-poppins text-[16px] font-medium cursor-pointer	'>
                                   ${
                                        UseCalculateIDiscount(
                                             itemData?.price,
                                             itemData?.discountPercentage
                                        ).toFixed(2)}
                              </span>
                              <span className='text-text_000000 opacity-[0.5] font-poppins text-[16px] font-medium cursor-pointer	 line-through'>
                                   ${itemData ? itemData.price.toFixed(2) : 0}
                              </span>
                         </div>
                         <div className='flex items-center gap-x-2 mt-2 cursor-pointer'>

                              <div className='flex gap-x-1'>
                                   <Star rating={itemData && itemData.rating} />
                                   <h2>{`(${itemData?.reviews?.length})`}</h2>
                              </div>


                         </div>
                    </div>
               </div>
               </Link>

          </div>
     )
}

export default ProductCard