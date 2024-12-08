import React from 'react'
import ProductComponentLayout from '../../commonComponents/productComponentLayout'
import PlayStation from "../../../assets/images/arival/PlayStation 5.png"
import Womensimg from "../../../assets/images/arival/Women’s Collections.png"
import Speakersimg from "../../../assets/images/arival/Speakers.png"
import Perfumeimg from "../../../assets/images/arival/Perfume.png"
const NewArrival = () => {
     return (
          <div>

               <div className=" container">
                    <ProductComponentLayout
                         heading="Featured"
                         description="New Arrival"
                    />
                    <div className="flex mt-[60px] h-[600px] justify-between">
                         <div className="w-[58%] h-full">
                              <img
                                   src={PlayStation}
                                   alt="not_found"
                                   className='object-cover w-full h-full rounded-sm' />
                         </div>
                         <div className="w-[40%] flex flex-col items-start gap-y-[30px]">
                              <div className="h-[285px] w-full">
                                   <img
                                        src={Womensimg}
                                        alt="not_foud"
                                        className='w-full h-full object-cover rounded-sm' />
                              </div>
                              <div className="flex gap-x-[30px] h-[285px] w-full">
                                   <div className="w-[292px]">
                                        <img
                                             src={Speakersimg}
                                             alt="not_found"
                                             className='w-full h-full object-cover rounded-sm' />
                                   </div>
                                   <div className="w-[292px]">
                                        <img
                                             src={Perfumeimg}
                                             alt="not_found"
                                             className='w-full h-full object-cover rounded-sm' />
                                   </div>
                              </div>
                         </div>

                    </div>
               </div>


          </div>
     )
}

export default NewArrival