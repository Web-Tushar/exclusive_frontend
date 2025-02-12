import React from 'react'
import { BreadCrumb } from './../../Component/commonComponents/BreadCrumbs';
import cartimgtelevison from "../../../src/assets/images/cart/televission.png"
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { array } from 'yup';


const AddToCart = () => {
     return (
          <div className='container'>
               <BreadCrumb />
               <div className=" mb-[140px]">
                    <div className="flex justify-between border rounded-[4px] shadow py-[24px] px-[40px]">
                         <div className="flex-1 ">
                              <h2 className=' text-text_000000 font-poppins text-4 font-normal'>Product</h2>
                         </div>
                         <div className=" flex-1 ">
                              <h2 className='text-text_000000 font-poppins text-4 font-normal'>Price</h2>
                         </div>
                         <div className="flex-1 flex justify-center   ">
                              <h2 className='text-text_000000 font-poppins text-4 font-normal'>Quantity</h2>
                         </div>
                         <div className="flex-1  text-end">
                              <h2 className='text-text_000000 font-poppins text-4 font-normal'>Subtotal</h2>
                         </div>

                    </div>
                    <div className=" w-full h-[500px] overflow-y-scroll scrollbar">
                         {[...Array(12)].map((_) => (
                              <div className=" mt-10 flex justify-between items-center border rounded-[4px] shadow py-[24px] px-[40px]">
                                   <div className=" flex items-center gap-x-5 flex-1 relative ">
                                        <img src={cartimgtelevison} alt="cartimgtelevison" />
                                        <span className='w-[24px] h-[24px] flex justify-center items-center rounded-full bg-red_DB4444 text-white absolute font-bold top-[-12px] left-[-12px] cursor-pointer hover:opacity-70'>X</span>
                                        <h2 className='text-text_000000 font-poppins text-4 font-normal'>H1 Gamepad</h2>
                                   </div>
                                   <div className="flex-1 ">
                                        <h2 className='text-text_000000 font-poppins text-4 font-normal'>$650</h2>
                                   </div>
                                   <div className="flex-1 flex justify-center">
                                        {/* <h2 className='text-text_000000 font-poppins text-4 font-normal'>Quantity</h2> */}

                                        <div className="w-[70px]  flex items-center justify-center border border-gray-500 rounded-[8px] gap-x-3">
                                             <input type="text" value={"89"} className='w-[25px] text-text_000000 font-poppins text-4 font-normal' />
                                             <div className="flex flex-col gap-y-[-182px] justify-center items-center">
                                                  <span><MdOutlineKeyboardArrowUp className='inline-block' /></span>
                                                  <span><MdOutlineKeyboardArrowDown className='inline-block' /></span>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="flex-1  text-end">
                                        <h2 className='text-text_000000 font-poppins text-4 font-normal'>$650</h2>
                                   </div>

                              </div>

                         ))}

                    </div>
                    {/* button  */}
                    <div className=" flex justify-between mt-6">
                         <button className='px-[48px] py-[16px] rounded-sm text-black font-poppins text-[16px] font-semibold border border-gray-600'>
                              Return To Shop
                         </button>
                         <button className='px-[48px] py-[16px] rounded-sm text-black font-poppins text-[16px] font-semibold border border-gray-600'>
                              Update Cart
                         </button>
                    </div>
                    {/* button  */}

                    {/* subtotal and cupon */}
                    <div className=" mt-[80px] flex justify-between items-start ">
                         <div className="flex gap-x-4">
                              <input type="text " className=' py-4 pl-6 pr-[164px] border rounded  border-gray-500' placeholder='Coupon Code' />
                              <button className=' border  border-gray-500 rounded bg-red_DB4444  py-4 px-12 '>Apply Coupon</button>
                         </div>
                         <div>
                              <div class="w-[470px] px-4 py-6 text-gray-900 bg-white border border-gray-200 rounded-lg">
                                   <h1 className="pl-3 font-popins font-normal text-text_000000 text-[20px] mb-3">
                                        Cart Total
                                   </h1>

                                   <div className="justify-between   relative inline-flex items-center w-full px-4 py-2 font-popins font-normal text-text-text_000000 text-[16px border-b border-gray-200 rounded-t-lg hover:bg-gray-100">
                                        <button type="button">Subtotal:</button>
                                        <span className="inline-block font-popins font-normal text-text-text_000000 text-[16px]">
                                             {" "}
                                             $1750
                                        </span>
                                   </div>

                                   <div className="justify-between   relative inline-flex items-center w-full px-4 py-2 font-popins font-normal text-text_000000 text-[16px border-b border-gray-200 rounded-t-lg hover:bg-gray-100">
                                        <button type="button">Shipping:</button>
                                        <span className="inline-block font-popins font-normal text-text_000000 text-[16px]">
                                             {" "}
                                             $1750
                                        </span>
                                   </div>

                                   <div className="justify-between   relative inline-flex items-center w-full px-4 py-2 font-popins font-normal text-text_000000 text-[16px rounded-t-lg hover:bg-gray-100">
                                        <button type="button">Total:</button>
                                        <span className="inline-block font-popins font-normal text-text_000000 text-[16px]">
                                             {" "}
                                             $1750
                                        </span>
                                   </div>
                              </div>
                              <div className="w-full  flex justify-center mt-10">
                                   <button className="px-[48px] py-[12px] bg-red_DB4444  text-text_white text-[18px] font-medium font-popins rounded">
                                        Procees to checkout
                                   </button>
                              </div>
                         </div>

                    </div>
                    {/* subtotal and cupon */}


               </div>
          </div>
     )
}

export default AddToCart