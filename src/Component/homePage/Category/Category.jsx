import React from 'react'
import ProductComponentLayout from '../../commonComponents/productComponentLayout'
import CategoryItems from '../../commonComponents/CategoryItems'
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { PiHeadphonesThin } from "react-icons/pi";
import { LuGamepad } from 'react-icons/lu';

const categoryBrowser = [
     {
          id: 1,
          name: "Mobile",
          img: <CiMobile4 />
     },
     {
          id: 2,
          name: "Computers",
          img: <HiOutlineComputerDesktop />

     },
     {
          id: 3,
          name: "SmartWatch",
          img: <BsSmartwatch />

     },
     {
          id: 4,
          name: "Camera ",
          img: <CiCamera />
     },
     {
          id: 5,
          name: "HeadPhones",
          img: <PiHeadphonesThin />
     },
     {
          id: 6,
          name: "Gaming",
          img: <LuGamepad />
     }
]

const Category = () => {
     return (
          <div className='container pb-[70px] border-b-[2px] border-b-gray-300 mt-[140px] mb-[70px]'>
               <ProductComponentLayout
                    heading={"Categories"}
                    description={"Browse By Category"}
                    isArrowsTrue={true}
                    ProductCard={CategoryItems}
                    partialItemShow={6}
                    copmonentData={categoryBrowser}
                    slidesToScroll={6}

               />

          </div>
     )
}

export default Category