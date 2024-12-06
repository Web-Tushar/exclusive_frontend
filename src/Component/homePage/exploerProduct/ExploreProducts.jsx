import React from 'react'
import ProductComponentLayout from '../../commonComponents/productComponentLayout'
import ProductCard from '../../commonComponents/ProductCard'
import { useGetAllProductQuery } from '../../../feature/Allslice/Api/productApi';
const ExploreProducts = () => {
     const { data, error, isLoading } = useGetAllProductQuery();

     return (
          <div className='container mt-[71px] flex flex-col items-center border-b-[2px] border-b-black738  mb-[60px]'>
               <div className="">
                    <ProductComponentLayout
                         heading="Our Products"
                         description="Explore Our Products"
                         isArrowsTrue={true}
                         ProductCard={ProductCard}
                         copmonentData={data?.products}
                         rows={2}
                         autoplay={true}
                         isLoading ={isLoading}
                    />

               </div>

               <div className="pb-20 pt-[60px] items-center">
                    <button className="px-[48px] py-4 bg-red_DB4444 rounded text-md font-popins font-medium text-white_FFFFFF hover:opacity-75 cursor-pointer ">
                         View All Products
                    </button>
               </div>

          </div>
     )
}

export default ExploreProducts