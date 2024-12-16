import React from 'react'
import ProductCard from './../../commonComponents/ProductCard';
import { useGetAllProductQuery } from '../../../feature/Allslice/Api/productApi';

const ProductRight = () => {
     const { data, error, isaLoading } = useGetAllProductQuery();
     console.log(data)
     return (
          <div className='w-[70%] bg-slate-500 items-end'>
               <div className=" flex gap-x-2 items-center  justify-end">
                    <h2 className='text-4 font-poppins font-normal text-text_000000'>Show :</h2>
                    <select name="" id="" className='border rounded-sm px-4 py-1'>
                         <option value="9">9</option>
                         <option value="18">18</option>
                         <option value="36">36</option>
                    </select>

               </div>
               {/* ProductCard */}
               {data?.products?.map((item) => (
                         <ProductCard itemData={item} />

                    ))}
          </div>
     )
}

export default ProductRight