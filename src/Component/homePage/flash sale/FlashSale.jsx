import React from 'react'
import { ImImage } from 'react-icons/im'
import ProductComponentLayout from "../../commonComponents/ProductComponentLayout";
import ProductCard from '../../commonComponents/ProductCard';

const FlashSale = () => {
  return (
    <div className='container'>
      <div>
        <ProductComponentLayout 
        ProductCard = {ProductCard}   
        TimeStamp = {true}
        TimeofOffer = {1}
        isArrowsTrue ={true}
        heading = "Today's"   
        description ="  Flash sales"  
        />
        <div className="pb-20 ">
          <button className="px-[48px] py-4 bg-redDB4444 rounded text-md font-popins font-medium text-white_FFFFFF hover:opacity-75 cursor-pointer ">
            View All Products
          </button>
        </div>


      </div>
    </div>
  )
}

export default FlashSale