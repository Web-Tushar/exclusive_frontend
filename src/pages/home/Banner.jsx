import React from 'react'
import { category } from '../../../DATA/data'
import { FaAngleRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import BannerImg from "../../assets/images/Frame 560.jpg"
function Banner() {
     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          appendDots: dots => (
               <div
                 style={{
                   backgroundColor: "#ddd",
                   borderRadius: "10px",
                   padding: "10px"
                 }}
               >
                 <ul style={{ margin: "0px" }}> {dots} </ul>
               </div>
             ),
             customPaging: i => (
               <div
                 style={{
                   width: "30px",
                   color: "blue",
                   border: "1px blue solid"
                 }}
               >
                 {i + 1}
               </div>
             )
     };
     
     return (
          <div className='container '>
               <div className='flex justify-between '>
                    <div className='w-[23%] bg-white_color  border-r-text_7D8184 border-r-[1.5px]'>
                         <ul className='pt-[30px]'>
                              {category?.map((item) => (
                                   <div className='flex  justify-between items-center duration-500 hover:bg-gray-400 hover:pl-4'>
                                        <li className='font-poppins text-base not-italic py-4 font-normal leading-6'>{item.cetegory}</li>
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
                                        <div key={index}>
                                             <img src={BannerImg} alt="BannerImg" className='w-full h-full object-cover' />
                                        </div>

                                   ))
                                   }




                              </Slider>
                         </div>
                    </div>
               </div>

               <h3 className='banner bg-orange-700'> eita banner pages</h3>
          </div>
     )
}

export default Banner