import React from 'react'
import { NavLink } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";

const Navbar = () => {
     const navItem = [
          {
               id: 1,
               item: "Home"
          },
          {
               id: 2,
               item: "Contact"
          },
          {
               id: 3,
               item: "About"
          },
          {
               id: 4,
               item: "Sign Up"
          }
     ]
     return (
          <div className='pt-10 pb-4 border-b-[2px] border-b-text_000000'>
               <div className='container '>
                    <div className='flex items-center justify-between'>
                         <div>
                              <h2 className='text-text_000000 font-Inter text-2xl	font-bold	leading-6	tracking-[0.72px] cursor-pointer'>Exclusive</h2>
                         </div>
                         <div>
                              <ul className='flex gap-12 	'>
                                   {
                                        navItem?.map((nav) => (
                                             <li key={nav.id} className='menuunderline'>
                                                  <NavLink
                                                       to={`/${nav.item}`}
                                                       className={({ isActive, isPending }) =>
                                                            isPending
                                                                 ? "text-text_000000 font-poppins text-base	font-normal leading-6"
                                                                 : isActive
                                                                      ? "text-red-700 font-poppins text-base	font-normal leading-6"
                                                                      : "text-text_000000 font-poppins text-base	font-normal leading-6"
                                                       }
                                                  >
                                                       {nav.item}
                                                  </NavLink>
                                             </li>
                                        ))
                                   }

                              </ul>
                         </div>
                         <div className='basis-1/3  relative'>
                              <input
                                   type="text"
                                   className='py-2 pl-5 pr-[70px] rounded  bg-white_5F5' placeholder='What are you looking for?'
                              />
                              <span className='absolute top-1/2 -translate-y-1/2 text-xl right-[48%]'><RiSearchLine /></span>
                         </div>
                         {/* <div className='basis-1/3 bg-amber-500 flex items-center'>
                              <input type="text" className='py-[10px] px-5 rounded  bg-white_5F5' placeholder='What are you looking for?' />
                              <span><RiSearchLine/></span>
                         </div> */}
                    </div>

               </div>

          </div>
     )
}

export default Navbar