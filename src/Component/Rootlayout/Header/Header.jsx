import React from 'react'

const Header = () => {
     return (
          <div className='bg-text_000000 py-3'>
               <div className='container'>
                    <div className='flex justify-between items-center '>
                         <div>
                              <h2></h2>
                         </div>
                         <div>
                              <h2 className='text-text_white font-poppins text-sm font-normal	leading-5	 capitalize  '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h2>
                         </div>
                         <div>
                              <select name="" id="" className='bg-transparent text-white_color font-poppins text-sm font-normal	leading-5	 capitalize'>
                                   <option value="English">English</option>
                                   <option value="English">Bangla</option>
                                   <option value="English">Spanish</option>
                                   <option value="English">Italian</option>
                                   <option value="English">Hindi</option>
                              </select>
                         </div>

                    </div>

               </div>

          </div>
     )
}

export default Header