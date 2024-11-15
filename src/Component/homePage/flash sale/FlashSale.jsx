import React from 'react'
import Heading from '../../commonComponents/Heading'
import Timer from '../../commonComponents/Timer'

const FlashSale = () => {
  return (
    <div className='mt-[140px] mb-[60px]'>
      <div className='container  gap-x-[87px] flex items-end'>
        <div >
          <Heading title={"Today’s"} description={"Flash Sales"} />
        </div> 
        <div><Timer /></div>
      </div>
    </div>

  )
}

export default FlashSale