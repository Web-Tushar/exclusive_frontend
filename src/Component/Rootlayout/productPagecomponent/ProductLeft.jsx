import React from 'react'

const ProductLeft = ({ CategoryData, isLoading }) => {
     return (
          <div className='w-[23%] '>
               <h1 className='text-shop_color font-poppins text-[20px] font-bold mb-3 cursor-pointer'>Shop by Category</h1>
               {isLoading ? (
                    <ul>
                         {/* Simulate 5 loading skeleton items */}
                         {Array(10)
                              .fill("")
                              .map((_, index) => (
                                   <div
                                        key={index}
                                        className="flex items-center justify-between hover:bg-gray-200 transition-all"
                                   >
                                        <li className="flex animate-pulse bg-gray-300 rounded w-full py-4 my-3"></li>
                                   </div>
                              ))}
                    </ul>
               ) : (
                    <ul className=''>
                         {CategoryData?.map((item, index) => (
                              <div key={index} className='flex justify-between items-center duration-500 hover:bg-gray-400 hover:pl-4 cursor-pointer'>
                                   <li className='font-poppins text-base py-2 font-normal capitalize'>
                                        {item}
                                   </li>
                              </div>
                         ))}
                    </ul>
               )}
               <div className="">
                    <h1 className='text-shop_color font-poppins text-[20px] font-bold mb-3 mt-10 cursor-pointer'>Shop by Color</h1>

                    <ul className=''>
                         <li className='font-poppins text-base py-2 font-normal capitalize duration-500 hover:bg-gray-400 hover:pl-4'>
                              <div className=" flex items-center gap-x-4">
                                   <span className='inline-block w-5 h-5 bg-red-400 rounded-full'></span>
                                   <p>Color 1</p>
                              </div>
                         </li>

                         <li className='font-poppins text-base py-2 font-normal capitalize duration-500 hover:bg-gray-400 hover:pl-4'>
                              <div className=" flex items-center gap-x-4">
                                   <span className='inline-block w-5 h-5 bg-red-400 rounded-full'></span>
                                   <p>Color 1</p>
                              </div>
                         </li>
                         <li className='font-poppins text-base py-2 font-normal capitalize duration-500 hover:bg-gray-400 hover:pl-4'>
                              <div className=" flex items-center gap-x-4">
                                   <span className='inline-block w-5 h-5 bg-red-400 rounded-full'></span>
                                   <p>Color 1</p>
                              </div>
                         </li>
                    </ul>
               </div>
          </div>
     )
}

export default ProductLeft