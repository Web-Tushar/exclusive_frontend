import React, { useEffect } from 'react'
import ProductComponentLayout from "../../../Component/commonComponents/productComponentLayout";
import ProductCard from '../../../Component/commonComponents/ProductCard';
import { useGetAllProductQuery } from '../../../feature/Allslice/Api/productApi';

const FlashSale = () => {

  const { data, error, isLoading } = useGetAllProductQuery();

  return (
    <div className='container'>
      <div className='flex flex-col items-center border-b-[2px] border-b-black738 mt-[140px] mb-[60px]' >
        <ProductComponentLayout
          ProductCard={ProductCard}
          TimeStamp={true}
          TimeofOffer={2}
          isArrowsTrue={true}
          heading="Today's"
          description="  Flash sales"
          partialItemShow={4}
          copmonentData={data?.products}
          isLoading = {isLoading}
        />
        <div className="pb-20 pt-[60px]">
          <button className="px-[48px] py-4 bg-red_DB4444 rounded text-md font-popins font-medium text-white_FFFFFF hover:opacity-75 cursor-pointer ">
            View All Products
          </button>
        </div>


      </div>
    </div>
  )
}

export default FlashSale