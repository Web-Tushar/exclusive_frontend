import React from 'react'
import { BreadCrumb } from '../commonComponents/BreadCrumbs'

const Wishlist = () => {
  return (
    <div>
      <div className='container mt-[80px] mb-[140px]'>
        <BreadCrumb />
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className='font-poppins text-[20px] font-normal text-text_000000'>Wishlist <span>(4)</span></h3>
          </div>
          <div className="">
            <button className='font-poppins text-4 font-medium
 border-[2px] border-b-slate-600 px-[48px] py-4'>Move All To Bag</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist