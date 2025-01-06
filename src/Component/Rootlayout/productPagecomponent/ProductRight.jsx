import React, { useState } from 'react'
import ProductCard from './../../commonComponents/ProductCard';
import { useGetAllProductQuery } from '../../../feature/Allslice/Api/productApi';


const ProductRight = () => {
     const { data, error, isaLoading } = useGetAllProductQuery();
     const [page, setpage] = useState(3);
     const [pagePershow, setpagePershow] = useState(9);
     let totalPage = data?.limit / 9

     //   pagination funtionality
     const handlePerItem = (index) => {
          if (index > 0 && index <= Math.ceil(totalPage)) {
               setpage(index);
          }
     };
     console.log(data)
     return (
          <div className='w-[70%]  items-end pr-3'>
               <div className=" flex gap-x-2 items-center  justify-end">
                    <h2 className='text-4 font-poppins font-normal text-text_000000'>Show :</h2>
                    <select name="" id="" className='border rounded-sm px-4 py-1'>
                         <option value="9">9</option>
                         <option value="18">18</option>
                         <option value="36">36</option>
                    </select>

               </div>
               {/* ProductCard */}
               <div className=" flex flex-wrap justify-between">
                    {data?.products?.slice(page * pagePershow - 9, page * pagePershow).map((item) => (
                         <div className="w-[30%]">
                              <ProductCard itemData={item} />

                         </div>

                    ))}



               </div>

               <div
                    aria-label="Page navigation example"
                    className=" flex justify-center items-center mt-[42px]">
                    <ul class="inline-flex -space-x-px text-sm">
                         <li>
                              <span
                                   href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-default"
                                   onClick={() => handlePerItem(page - 1)}

                              >Previous</span>
                         </li>
                         {[...new Array(Math.ceil(totalPage || 8))].map((_, index) => (
                              <li>
                                   <span href="#" className={
                                        index + 1 === page
                                             ? "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-red-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer "
                                             : " flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer "}
                                        onClick={() => handlePerItem(index + 1)}
                                   >
                                        {index + 1}
                                   </span>
                              </li>
                         ))}
                         <li>
                              <spaspan href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-default"
                              onClick={() => handlePerItem(page + 1)}
                              >Next</spaspan>
                         </li>
                    </ul>
               </div>



          </div>
     )
}

export default ProductRight