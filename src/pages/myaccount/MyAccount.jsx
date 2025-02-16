import React from 'react'
import { BreadCrumb } from '../../Component/commonComponents/BreadCrumbs'
import Inputfield from '../../Component/commonComponents/Inputfield'

const MyAccount = () => {
     return (
          <div className='container pb-[140px]'>
               <div className="flex justify-between items-center">
                    <BreadCrumb />
                    <h2 className='accountstyle'>Welcome! <span className='text-red-400'>Md Rimel</span> </h2>
               </div>
               <div className="flex ">
                    <div className="w-[30%] ">
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

                    {/* Edit Your Profile section */}
                    <div className="w-full py-[40px] px-[80px] shadow-">
                         <h2 className=' mb-4 font-poppins text-[20px] font-medium text-red_DB4444'>Edit Your Profile</h2>
                         <div className="flex flex-wrap  gap-x-[50px]">

                              <Inputfield widthfull={false}
                                   label={"First Name"}
                                   placeholder={"tushar"}
                                   id={"firstName"}
                              />
                              <Inputfield widthfull={false}
                                   label={"Last Name"}
                                   placeholder={"imran"}
                                   id={"LastName"}

                              />
                              <Inputfield widthfull={false}
                                   label={"Email"}
                                   placeholder={"rimel1111@gmail.com"}
                                   id={"Email"}

                              />
                              <Inputfield widthfull={false}
                                   label={"Address"}
                                   placeholder={"Kingston, 5236, United State"}
                                   id={"Address"}
                              />
                         </div>
                         {/* passweord  changes */}
                         <div className="">
                              <h3 className='accountstyl text-4 font-normal mb-3'> Password Changes</h3>
                              <Inputfield widthfull={true}
                                   label={"Current Passwod"}
                                   placeholder={"Current Passwod"}
                                   id={"CurrentPasswod"}
                                   ispassword={true}

                              />
                              <Inputfield widthfull={true}
                                   label={"New Passwod"}
                                   placeholder={"New Passwod"}
                                   id={"NewPassword"}
                                   ispassword={true}

                              />
                              <Inputfield widthfull={true}
                                   label={"Confirm New Passwod"}
                                   placeholder={"Confirm New Passwod"}
                                   id={"ConfirmNewPasswod"}
                                   ispassword={true}

                              />
                         </div>
                         {/* passweord  changes */}

                         <div className="flex w-[910px] justify-end ">
                              <div className="flex gap-x-2 items-center ">
                                   <h3 className='accountstyl text-4'>Cancel</h3>
                                   <button className=' border text-white_5F5 rounded bg-red_DB4444  py-4 px-12 '>Save Changes</button>
                              </div>
                         </div>

                    </div>

               </div>


          </div>
     )
}

export default MyAccount