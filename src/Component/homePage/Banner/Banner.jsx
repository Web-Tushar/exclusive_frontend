import React, { useState } from 'react'
import { category } from "../../../../Data/data";
import { FaAngleRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import BannerImg from "../../../assets/images/Frame 560.jpg"

function Banner() {
     const [currentSlide, setCurrentSlide] = useState(0)
     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          appendDots: (dots) => (
               <div
                    style={{
                         position: 'absolute',
                         bottom: "1%",
                         left: "0%",
                         transform: "translateY(-50%)",
                         // backgroundColor: "#ddd",
                         borderRadius: "10px",
                         padding: "10px"
                    }}
               >
                    <ul style={{ margin: "0px", display: "flex", alignItems: "center", justifyContent: "center" }}> {dots} </ul>
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
                         border: "3px white solid",
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
                         background: "#FFFFFF",
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
          <div className='container '>
               <div className='flex justify-between '>
                    <div className='w-[23%] bg-white_color  border-r-text_7D8184 border-r-[1.5px]'>
                         <ul className='pt-[40px]'>
                              {category?.map((item) => (
                                   <div key={item} className='flex  justify-between items-center duration-500 hover:bg-gray-400 hover:pl-4'>
                                        <li className=' font-poppins text-base py-2 font-normal'>{item.cetegory}</li>
                                        {
                                             item.subcetegory && (
                                                  <span className='pr-5 text-xl'><FaAngleRight /></span>

                                             )
                                        }

                                   </div>
                              ))}

                         </ul>
                    </div>
                    <div className=' w-[77%]  pl-11 pt-[45px]'>
                         <div className="slider-container">
                              <Slider {...settings}>
                                   {[...new Array(10)].map((_, index) => (
                                        <div key={index} className='w-[892px] h-[344px] '>
                                             <img src={BannerImg} alt="BannerImg" className='w-full h-full object-content' />
                                        </div>

                                   ))
                                   }
                              </Slider>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Banner