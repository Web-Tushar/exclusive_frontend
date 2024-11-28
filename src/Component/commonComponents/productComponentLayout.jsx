// import React from 'react'
import React, { useRef } from "react";
import Heading from '../../Component/commonComponents/Heading';
import Timer from '../../Component/commonComponents/Timer';
import Slider from "react-slick";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
// import Skeletone from '../../helpers/Skeletone';

const ProductComponentLayout = ({
  ProductCard = () => {

  },
  TimeStamp = false,
  isArrowsTrue = false,
  TimeofOffer = 0,
  heading = "Today's",
  description = "Flash sales",
  partialItemShow = 4,
  copmonentData = {}
  // partialItemShow= 4

}) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: partialItemShow,
    slidesToScroll: 10,



  };
  const next = () => {
    sliderRef.current.slickNext()
  }
  const prev = () => {
    sliderRef.current.slickPrev()
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

      </div>
      {/* {viewButton && (
        <div className="bg-redDB4444  text-md font-popins font-medium text-white_FFFFFF px-[48px] py-4 rounded cursor-pointer hover:opacity-75">
          View All
        </div>
      )} */}
      <div >
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {[... new Array(partialItemShow || 4)].map((_, index) => (
              <div className={partialItemShow > 4 ? "pr-8" : "pr-6"}>
                <ProductCard copmonentData={copmonentData ? copmonentData : {}} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

    </div>

  );
};

export default ProductComponentLayout