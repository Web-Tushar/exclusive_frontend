import React from 'react'
import ProductComponentLayout from "../../../Component/commonComponents/productComponentLayout";
import ProductCard from '../../../Component/commonComponents/ProductCard';

const FlashSale = () => {
  return (
    <div className='container'>
      <div className='flex flex-col items-center' >
        <ProductComponentLayout
          ProductCard={ProductCard}
          TimeStamp={true}
          TimeofOffer={1}
          isArrowsTrue={true}
          heading="Today's"
          description="  Flash sales"
        />
        <div className="pb-20 ">
          <button className="px-[48px] py-4 bg-red_DB4444 rounded text-md font-popins font-medium text-white_FFFFFF hover:opacity-75 cursor-pointer ">
            View All Products
          </button>
        </div>


      </div>
    </div>
  )
}

export default FlashSale