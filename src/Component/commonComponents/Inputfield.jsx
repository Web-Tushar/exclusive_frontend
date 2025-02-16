import React from 'react'

const Inputfield = ({ widthfull = false, label, placeholder, ispassword }) => {
     return (
          <div className='flex flex-col gap-y-2 mb-5 '>
               <label htmlFor="firstName" className='accountstyle text-[16px]'>{label}</label>

               <input
                    type={ispassword? "password" : "text"}
                    placeholder={placeholder}
                    id='firstName'
                    className={widthfull ? "bg-white_5F5 px-4 py-[13px] w-[910px] " : "bg-white_5F5 px-4 py-[13px] w-[430px]"} />
          </div>
     )
}

export default Inputfield