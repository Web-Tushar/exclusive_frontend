import React from 'react'
import Heading from '../../commonComponents/Heading'
import Timer from '../../commonComponents/Timer'
import ProductCard from '../../commonComponents/ProductCard'

const FlashSale = () => {
  return (
    <div className='container mt-[140px] mb-[60px]'>
      <div className='  gap-x-[87px] flex items-end'>
        <div >
          <Heading title={"Today’s"} description={"Flash Sales"} />
        </div>
        <div><Timer /></div>
      </div>
      <div>
        <ProductCard />
      </div>
    </div>

  )
}

export default FlashSale