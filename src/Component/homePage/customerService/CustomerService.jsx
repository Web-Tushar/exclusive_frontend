import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";


const CustomerService = () => {
     const service = [
          {
               id: 1,
               icons: (<TbTruckDelivery className='p-[5px] w-[40px] h-[40px] bg-text_000000 text-white_FFFFFF  rounded-full ' />),
               title: "FREE AND FAST DELIVERY",
               description: "Free delivery for all orders over $140"

          },
          {
               id: 2,
               icons: (<TbTruckDelivery className='p-[5px] w-[40px] h-[40px] bg-text_000000 text-white_FFFFFF  rounded-full ' />),
               title: "24/7 CUSTOMER SERVICE",
               description: "Friendly 24/7 customer support"

          },
          {
               id: 3,
               icons: (<TbTruckDelivery className='p-[5px] w-[40px] h-[40px] bg-text_000000 text-white_FFFFFF  rounded-full ' />),
               title: "MONEY BACK GUARANTEE",
               description: "We reurn money within 30 days"

          },

     ]
     return (
          <div className='container my-[140px]'>
               <div className="flex justify-around items-center">
                    {

                         service?.map((item) => (
                              <div className='flex flex-col items-center' >
                                   <span className="w-[80px] h-[80px] flex justify-center items-center rounded-full bg-gray-500">
                                        {item.icons}
                                   </span>
                                   <h1 className='mt-6 text-text_000000 font-poppins text-5 font-semibold'>{item.title}</h1>
                                   <h3 className='mt-[4px] text-text_000000 font-poppins text-[14px] font-normal'>{item.description}</h3>
                              </div>

                         ))
                    }
               </div>


          </div>
     )
}

export default CustomerService