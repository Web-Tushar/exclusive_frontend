import React from 'react'
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import profileimg1 from "../../../assets/images/about/profileimg1.png"
const ProfileCart = () => {
     return (
          <div>
               <div className="  w-[320px] rounded-lg  ">
                    <div className="bg-white_5F5 pt-[39px]  px-[67px] ">
                         <img
                              className="w-full h-64 object-contain rounded-lg "
                              src={profileimg1}
                              alt="Profile"
                         />
                    </div>
                    <h2 className="mt-[32px] text-2xl font-semibold">Tom Cruise</h2>
                    <p className="text-gray-600">Founder & Chairman</p>
                    <div className="flex  mt-3 space-x-4 text-gray-600">
                         <a href="#" className="hover:text-blue-500">
                              <FaTwitter size={20} />
                         </a>
                         <a href="#" className="hover:text-pink-500">
                              <FaInstagram size={20} />
                         </a>
                         <a href="#" className="hover:text-blue-700">
                              <FaLinkedin size={20} />
                         </a>
                    </div>
               </div>
          </div>
     )
}

export default ProfileCart