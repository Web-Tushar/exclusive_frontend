// import React from 'react'
import React, { useRef } from "react";
import Heading from '../../Component/commonComponents/Heading';
import Timer from '../../Component/commonComponents/Timer';
import Slider from "react-slick";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import Skeletone from '../../helpers/Skeletone';

const ProductComponentLayout = ({
  ProductCard = () => {
    <Skeletone />
  },
  TimeStamp = false,
  isArrowsTrue = false,
  TimeofOffer = 0,
  heading = "Today's",
  description = "Flash sales",
  partialItemShow = 4,
  copmonentData = [],
  isLoading = false,
  viewButton = false,
  rows = 1,


  // partialItemShow= 4

}) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: partialItemShow,
    slidesToScroll: 4,
    rows: rows

  };
  const next = () => {
    sliderRef.current.slickPrev()
  }
  const prev = () => {
    sliderRef.current.slickNext()
  }

  return (

    <div className='container '>
      <div className="flex justify-between items-center">
        <div className='  gap-x-[87px] flex items-end'>
          <div >
            <Heading title={heading} description={description} />
          </div>
          <div>{TimeStamp && <Timer TimeofOffer={TimeofOffer} />}</div>
        </div>
        {isArrowsTrue && (
          <div className="flex items-center gap-x-4">
            <h1
              onClick={next}
              className="cursor-pointer w-[46px] h-[46px] bg-white_5F5 rounded-full flex items-center justify-center hover:bg-black738 hover:text-white_FFFFFF transition"
            >
              <span className="text-xl">
                <IoMdArrowBack />
              </span>
            </h1>
            <h1
              onClick={prev}
              className="cursor-pointer w-[46px] h-[46px] bg-white_5F5 rounded-full flex items-center justify-center hover:bg-black738 hover:text-white_FFFFFF transition"
            >
              <span className="text-xl">
                <IoArrowForward />

              </span>
            </h1>
          </div>
        )}
        {viewButton && (
          <div className="bg-red_DB4444 font-poppins text-[16px] font-medium text-white px-12 py-4 rounded cursor-pointer hover:opacity-75">View All</div>
        )}
      </div>


      <div >
        {/* <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {isLoading
              ? [...new Array(8)]?.map((index) => (
                <div  className={partialItemShow > 4 ? "pr-8" : "pr-6"} key={index.key}>
                  <Skeletone />
                </div>
              ))

              : copmonentData?.map((item, index) => (
                <div className={partialItemShow > 4 ? "pr-8" : "pr-6"} key={item.key}>
                  <ProductCard itemData={item ? item : {}} />
                </div>
              ))


            }
          </Slider> */}
        {/* </div> */}
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {isLoading
              ? [...new Array(8)]?.map((_, index) => ( // Use `index` as the unique key for the skeletons
                <div className={partialItemShow > 4 ? "pr-8" : "pr-6"} key={`skeleton-${index}`}>
                  <Skeletone />
                </div>
              ))
              : copmonentData?.map((item, index) => (
                <div
                  className={partialItemShow > 4 ? "pr-8" : "pr-6"}
                  key={item?.id || `item-${index}`} // Use a unique identifier like `item.id` if available, fallback to index
                >
                  <ProductCard itemData={item || {}} />
                </div>
              ))}
          </Slider>
        </div>

      </div>

    </div>

  );
};

export default ProductComponentLayout