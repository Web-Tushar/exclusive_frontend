import React from 'react'
import { ImImage } from 'react-icons/im'
import ProductComponentLayout from "../../commonComponents/productComponentLayout"
import ProductCard from './../../commonComponents/ProductCard';

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


      </div>
    </div>
  )
}

export default FlashSale