import React from 'react'

const UseCalculateIDiscount = (orginalPrice , discountPercentage) => {
     const discountAmount = (orginalPrice*discountPercentage)/100
     const discountPrice = ( orginalPrice - discountAmount)


  return discountPrice
    
  
}

export default UseCalculateIDiscount