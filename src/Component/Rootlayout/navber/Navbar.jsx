import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";
import { IoMdLogOut } from "react-icons/io";



const Navbar = () => {
     const navItem = [
          {
               id: 1,
               item: "Home",
               pathRoute: "/"
               
          },
          {
               id: 2,
               item: "Contact",
               pathRoute: "/Contact",

          },
          {
               id: 3,
               item: "Product",
               pathRoute: "/ProductPage",

          },
          {
               id: 4,
               item: "Sign Up",
               pathRoute: "/Signup",

               

          }
     ]
     const [account, setaccount] = useState(false)
     // const userAccountRef = useRef(null) 
     const handleClick = () => {
          setaccount(!account)
          // console.log(userAccountRef.current);
     }

     // useEffect(()=>{
     //      window.addEventListener("click",(event)=>{
     //           if( userAccountRef.current.contains(event.target)){
     //                setaccount(!account);
     //           }else{

     //                setaccount(false)
     //           }

     //           // console.log(event.target);
     //      })
     // },[userAccountRef])
     return (
          <div className='pt-10 pb-4 border-b-[2px] border-b-text_000000'>
               <div className='container '>
                    <div className='flex  items-center justify-between'>
                         <div>
                              <h2 className='text-text_000000 font-Inter text-2xl	font-bold	leading-6	tracking-[0.72px] cursor-pointer'>Exclusive</h2>
                         </div>
                         <div>
                              <ul className='flex gap-12 	'>
                                   {
                                        navItem?.map((nav) => (
                                             <li key={nav.id} className='menuunderline'>
                                                  <NavLink
                                                       to={`${nav.pathRoute}`}
                                                       className={({isPending , isActive }) =>
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
                         <div className='basis-1/3 flex justify-between bg-transparent relative'>
                              <input
                                   type="text"
                                   className='py-2 pl-5 pr-[70px] rounded  bg-white_5F5' placeholder='What are you looking for?'
                              />
                              <span className='absolute top-1/2 -translate-y-1/2 text-xl right-[39%]'><RiSearchLine /></span>
                              <div className='flex items-center gap-x-4 '>
                                   <span className='text-text_000000 text-2xl cursor-pointer'><FaRegHeart />
                                   </span>
                                   <span className='text-text_000000 text-2xl amount cursor-pointer'><GrCart /></span>


                                   <span className='text-text_000000  rounded-full bg-red_DB4444 text-xl p-2 cursor-pointer relative'
                                        onClick={handleClick}
                                   // ref={userAccountRef}
                                   ><FaRegUser /></span>
                                   {account && (
                                        <div className='absolute right-[8px] top-[42px] z-30  bg-[rgba(0,0,0,0.66)] p-4'>
                                             <div className='flex  gap-2 items-center mb-2 cursor-pointer duration-300 hover:bg-orange-600 p-1'>
                                                  <span><FiUser />
                                                  </span>
                                                  <h2 className='text-white_FEFAF1 text-xl font-normal font-poppins '>Manage my account</h2>
                                             </div>
                                             <div className='flex gap-2 items-center mb-2 cursor-pointer duration-300 hover:bg-orange-600 p-1'>
                                                  <span>
                                                       <IoBagHandleOutline />
                                                  </span>
                                                  <h2 className='text-white_FEFAF1 text-xl font-normal font-poppins '>My order</h2>
                                             </div>
                                             <div className='flex gap-2 items-center mb-2 cursor-pointer duration-300 hover:bg-orange-600 p-1'>
                                                  <span>
                                                       <ImCancelCircle />
                                                  </span>
                                                  <h2 className='text-white_FEFAF1 text-xl font-normal font-poppins '>My cancellations</h2>
                                             </div>
                                             <div className='flex gap-2 items-center mb-2 cursor-pointer duration-300 hover:bg-orange-600 p-1'>
                                                  <span>
                                                       <FaRegStar />
                                                  </span>
                                                  <h2 className='text-white_FEFAF1 text-xl font-normal font-poppins '>My reviews</h2>
                                             </div>
                                             <div className='flex gap-2 items-center mb-2 cursor-pointer duration-300 hover:bg-orange-600 p-1'>
                                                  <span>
                                                       <IoMdLogOut />
                                                  </span>
                                                  <h2 className='text-white_FEFAF1 text-xl font-normal font-poppins '>Log out</h2>
                                             </div>
                                        </div>
                                   )}





                              </div>
                         </div>

                    </div>

               </div>

          </div>
     )
}

export default Navbar