import React, { useState } from 'react'
import { BreadCrumb } from '../../Component/commonComponents/BreadCrumbs'
import aboutimg from '../../assets/images/about/aboutimg_1.png'
import { CiShop } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import ProfileCart from '../../Component/commonComponents/aboutprofileCart/ProfileCart';
import "slick-carousel/slick/slick.css";

import Slider from 'react-slick';

import { array } from 'yup';
import CustomerService from '../../Component/homePage/customerService/CustomerService';



const About = () => {
  const reviewsobject = [
    {
      id: 1,
      title: "10.5k ",
      summery: "Sallers active our site",
      icon: <CiShop />,
    },
    {
      id: 2,
      title: "33k ",
      summery: "Mopnthly Produduct Sale",
      icon: <RiMoneyDollarCircleLine />,

    },
    {
      id: 3,
      title: "45.5k ",
      summery: "Customer active in our site",
      icon: <CiShop />,
    },
    {
      id: 4,
      title: "25k ",
      summery: "Anual gross sale in our site",
      icon: <CiShop />,
    }

  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          bottom: "-20%",
          left: "0%",
          transform: "translateY(-50%)",
          // backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{
          margin: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      i == currentSlide ? (<div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          // display:"flex",
          // alignItems:"center",
          // justifyContent:"center",
          background: "#DB4444",
          gap: "2px",
          // opacity:"0.5",
          border: "3px gray solid",
          cursor: "pointer"

        }}
      >

      </div>) : (<div
        style={{
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          // display:"flex",
          // alignItems:"center",
          // justifyContent:"center",
          background: "gray",
          gap: "2px",
          opacity: "0.5",
          cursor: "pointer"
        }}
      >

      </div>)

    ),
    afterChange: function (currentSlide) {
      setCurrentSlide(currentSlide)
    }
  };

  return (
    <div className='container'>
      <BreadCrumb />
      <div className=" mb-[140px] flex justify-between items-center">
        <div className="w-[525px]">
          <h2 className='font-Inter text-[54px] font-semibold text-black'>Our Story</h2>
          <p className=' mt-10 font-poppins text-4 font-normal text-black738  '>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>

          <p className=' mt-6 
          font-poppins text-4 font-normal text-black738 '>xclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div className="w-[600px] h-[500px]">
          <img src={aboutimg} alt="img_not_found" className='w-[100%] h-[100%] object-cover' />
        </div>
      </div>
      {/* reviewsobject */}
      <div className="flex justify-between">
        {reviewsobject?.map((item) => (
          <div className="flex flex-col items-center justify-center p-6 bg-white border rounded-lg shadow-md cursor-pointer group hover:bg-red-400 " key={item.id}>
            <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gray-200 rounded-full group-hover:bg-red-200 ">
              <div className=" h-[45px] w-[45px] flex justify-center items-center text-[38px] text-white  group-hover:bg-white group-hover:text-black  bg-black rounded-full">{item.icon}</div>
            </div>
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-gray-600">{item.summery}</p>
          </div>
        ))}

      </div>

      <div className="  mt-[140px] mb-[140px]  slider-container ">
        <Slider {...settings}>
          {[...new Array(10)].map((_, index) => (
            <div key={index}>
              <ProfileCart />
            </div>

          ))
          }
        </Slider>
      </div>
      {/* profile cart */}

      {/* CustomerService */}
      <div className="">
        <CustomerService />
      </div>
      {/* CustomerService */}
    </div>
  )
}

export default About