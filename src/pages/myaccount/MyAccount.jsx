import React from 'react'
import { BreadCrumb } from '../../Component/commonComponents/BreadCrumbs'

const MyAccount = () => {
     return (
          <div className='container'>
               <div className="flex justify-between items-center">
                    <BreadCrumb />
                    <h2 className='accountstyle'>Welcome! <span className='text-red-400'>Md Rimel</span> </h2>

               </div>
               <div className="">
                    <h1 className='accountstyle text-[16px] font-medium'>Manage My Account</h1>
                    <ul className='accountstyle text-[15px] opacity-50  font-normal flex flex-col items-start gap-y-2 mt-4 ml-6'>
                         <li className='active:text-red-300 cursor-pointer hover:text-green-500'>My Profile</li>
                         <li className='active:text-red-300 cursor-pointer hover:text-green-500'>Address Book</li>
                         <li className='active:text-red-300 cursor-pointer hover:text-green-500'>My Payment Options</li>
                    </ul>

                    <h1 className='accountstyle text-[16px] font-medium mt-4'>My Orders</h1>
                    <ul className='accountstyle text-[15px] opacity-50  font-normal flex flex-col items-start gap-y-2 mt-4 ml-6'>
                         <li className='active:text-red-300 cursor-pointer hover:text-green-500'>My Returns</li>
                         <li className='active:text-red-300 cursor-pointer hover:text-green-500'>My Cancellations</li>
                         <li className='active:text-red-300 cursor-pointer hover:text-green-500'>My Payment Options</li>
                    </ul> 
                    <h1 className='accountstyle text-[16px] font-medium mt-4'>My WishList</h1>

               </div>


          </div>
     )
}

export default MyAccount