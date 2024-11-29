import React from 'react'

const CategoryItems = ({ itemData }) => {
  return (
    <div className=''>
      <div className='w- full h-[145px] bg-white_FFFFFF text-text_000000  mt-[60px] border-[1px] border-text_7D8184 flex items-center justify-center hover:bg-red_DB4444 hover:text-white_FFFFFF duration-500 rounded cursor-pointer  '>
        <div className='flex flex-col items-center gap-4 '>
          <span className=' text-[30px] '>
            {itemData.img}
          </span>
          <h2 className=' font-poppinsm text-[16px] font-normal'>{itemData.name}</h2>

        </div>
      </div>
    </div>
  )
}

export default CategoryItems