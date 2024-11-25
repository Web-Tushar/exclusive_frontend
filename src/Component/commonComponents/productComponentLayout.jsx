// import React from 'react'
import React, { useRef } from "react";
import Heading from '../../Component/commonComponents/Heading';
import Timer from '../../Component/commonComponents/Timer';
import Slider from "react-slick";
import Skeletone from '../../helpers/Skeletone';
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";

const ProductComponentLayout = ({
  ProductCard = () => <Skeletone />,
  TimeStamp = false,
  isArrowsTrue = false,
  TimeofOffer = 0,
  heading = "Today's",
  description = "  Flash sales",
  partialItemShow = 4
}) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: partialItemShow,
    slidesToScroll: partialItemShow - 1,
    // autoplay: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />

  };
  const next = () => {
    sliderRef.current.slickNext()
  }
  const prev = () => {
    sliderRef.current.slickPrev()
  }

  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "red" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "green" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  return (

    <div className='container mt-[140px] mb-[60px]'>
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
            className="cursor-pointer w-[46px] h-[46px] bg-white_F5F5F5 rounded-full flex items-center justify-center hover:bg-black_363738 hover:text-white_FFFFFF transition"
          >
            <span className="text-xl">
              <IoMdArrowBack />
            </span>
          </h1>
          <h1
            onClick={prev}
            className="cursor-pointer w-[46px] h-[46px] bg-white_F5F5F5 rounded-full flex items-center justify-center hover:bg-black_363738 hover:text-white_FFFFFF transition"
          >
            <span className="text-xl">
              <IoArrowForward />

            </span>
          </h1>
        </div>
      )}
      {viewButton && (
        <div className="bg-redDB4444  text-md font-popins font-medium text-white_FFFFFF px-[48px] py-4 rounded cursor-pointer hover:opacity-75">
          View All
        </div>
      )}
      <div >
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {isLoading
              ? [...new Array(6)]?.map((_, index) => (
                <div
                  className={partialItemShow > 4 ? "pr-8" : "pr-6"}
                  key={index}
                >
                  <ProductSkeleton />
                </div>
              ))
              : componentData?.map((item, index) => (
                <div
                  className={partialItemShow > 4 ? "pr-8" : "pr-6"}
                  key={item.key}
                >
                  <ProductCard itemData={item ? item : {}} />
                </div>
              ))}
          </Slider>
        </div>
      </div>

    </div>

  );
};

export default ProductComponentLayout