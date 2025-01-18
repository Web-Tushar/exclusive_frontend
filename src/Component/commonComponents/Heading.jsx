import React from 'react'
const Heading = ({ title, description = true }) => {
  return (
    <div>
      <div className='container'>

        <div className='flex gap-x-4 items-center'>
          <span className='w-[20px] h-[40px] bg-red_DB4444 block rounded-[5px]'></span>
          <span className='text-red_DB4444  font-poppins text-[12px] font-semibold'>{title = title}</span>
        </div>
        <div className='mt-6'>
          <h1 className='font-Inter text-[36px] font-semibold text-text_000000'>{description = description}</h1>

        </div>
      </div>
    </div>
  )
}

export default Heading