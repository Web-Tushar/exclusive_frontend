import React from 'react'
import Star from '../Star'
import { TbTruckDelivery } from "react-icons/tb";
import UseCalculateIDiscount from '../../../Hooks/UseCalculateIDiscount';

const ProductDetaisInfo = ({productDetailsData}) => {

  const {
    title,
    description,
    rating,
    price,
    stock,
    warrantyInformation,
    returnPolicy,
    discountPercentage,
    reviews,
  } = productDetailsData || {};

  const sizes = [
    { id: 1, size: "XS" },
    { id: 2, size: "S" },
    { id: 3, size: "M" },
    { id: 4, size: "L" },
    { id: 5, size: "XL" },

  ]
  return (
    <div>
      <div className="">
        <h2 className='font-Inter text-[24px] font-semibold text-text_000000'>{title}</h2>
        <div className="flex items-center  gap-x-3 mt-4" >
          <Star rating={rating} />
          <span className='font-poppins text-[16px] font-normal opacity-50'> {reviews?.length} Review</span>
          <span>|</span>
          <p className='text-green-500 inline-block font-normal font-poppins text-[14px]'>{stock}</p>
        </div>
        <div className="mt-4">
          <p className='font-Inter text-[24px] font-normal'>
             $ {Math.round(UseCalculateIDiscount(price, discountPercentage)) || 0}</p>

          <h4 className='mt-6 font-normal font-poppins text-[14px] w-[373px] border-b-[1.5px] border-b-gray-300 pb-6'>{description}</h4>
        </div>
      </div>
      {/* card and size components */}
      <div className="">
        <div className=" mt-6 flex items-center gap-x-6">
          <h2 className='text-[20px] font-Inter font-normal '>Colours:</h2>
          <div className="flex gap-x-2">
            <span className='w-[20px] h-[20px] rounded-full bg-orange-400 inline-block border-2 border-black '></span>
            <span className='w-[20px] h-[20px]  rounded-full bg-orange-400 inline-block border-2 border-black'></span>

          </div>

        </div>
      </div>
      {/* size */}
      <div className="">
        <div className=" mt-6 flex items-center gap-x-6">
          <h2 className='text-[20px] font-Inter font-normal '>Size:</h2>
          <div className="flex gap-x-2">
            {
              sizes.map((item) => (
                <span key={item.id} className='w-[32px] h-[32px] rounded-[4px] flex justify-center items-center  font-poppins text-[14px] font-medium  border-2 border-black opacity-50 '>{item.size}</span>

              ))
            }
          </div>
        </div>
        {/* button */}
        <div className="mt-6 flex gap-x-6">
          <div className="flex  items-center  ">
            <span className='py-[10px] px-[15px] rounded-l-lg border-[1px] border-black  hover:bg-red-400 hover:text-white'>-</span>
            <span className='py-[7px] px-[30px] font-poppins text-[20px] font-semibold border-[1px] border-black'>3</span>
            <span className='py-[10px] px-[15px] cursor-pointer rounded-r-lg border-[1px] border-black hover:bg-red-400 hover:text-white'>+</span>
          </div>
          <div className=" flex gap-x-6 items-center">
            <button className='py-[10px] px-[48px] bg-orange-500 text-white rounded-lg font-poppins text-[16px] font-semibold'>Buy Now</button>
            <span className=' py-2 px-5 border-[1px] rounded-lg  border-black'>❤️</span>

          </div>
        </div>
        {/* button  end*/}
        {/* delevery condition */}
        <div className="mt-10 w-[399px] ">
          <div className=" p-4 flex gap-x-4 items-center border border-gray-400">
            <span className='text-[35px]'><TbTruckDelivery /></span>
            <div className="">
              <h2 className='font-poppins text-[16px] font-semibold  text-text_000000 '>Free Delivery</h2>
              <p className=' mt-2 font-poppins text-[12px] font-semibold text-text_000000'>Enter your postal code for Delivery Availability</p>
            </div>
          </div>
          <div className=" p-4 flex gap-x-4 items-center border border-gray-400">
            <span className='text-[35px]'><TbTruckDelivery /></span>
            <div className="">
              <h2 className='font-poppins text-[16px] font-semibold  text-text_000000 '>Return Delivery</h2>
              <p className=' mt-2 font-poppins text-[12px] font-semibold text-text_000000'>{returnPolicy}</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default ProductDetaisInfo