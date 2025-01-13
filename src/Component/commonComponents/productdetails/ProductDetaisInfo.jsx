import React from 'react'
import Star from '../Star'

const ProductDetaisInfo = () => {
  const sizes = [
    { id: 1, size: "XS" },
    { id: 1, size: "S" },
    { id: 1, size: "M" },
    { id: 1, size: "L" },
    { id: 1, size: "XL" },

  ]
  return (
    <div>
      <div className="">
        <h2 className='font-Inter text-[24px] font-semibold text-text_000000'>Havic HV G-92 Gamepad</h2>
        <div className="flex items-center  gap-x-3 mt-4" >
          <Star rating={3} />
          <span className='font-poppins text-[16px] font-normal opacity-50'>(120 Reviews)</span>
          <span>|</span>
          <p className='text-green-500 inline-block font-normal font-poppins text-[14px]'>in stock</p>
        </div>
        <div className="mt-4">
          <p className='font-Inter text-[24px] font-normal'>price: 450 $</p>
          <h4 className='mt-6 font-normal font-poppins text-[14px] w-[373px] border-b-[1.5px] border-b-gray-300 pb-6'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</h4>
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
              sizes.map((s) => (
                <span key={s} className='w-[32px] h-[32px] rounded-[4px] flex justify-center items-center  font-poppins text-[14px] font-medium  border-2 border-black opacity-50 '>{s.size}</span>

              ))
            }


          </div>
        </div>
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
      </div>
    </div>
  )
}

export default ProductDetaisInfo