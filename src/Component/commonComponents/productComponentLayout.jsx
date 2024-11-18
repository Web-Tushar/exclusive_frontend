import React, { useRef } from 'react'
import Heading from '../../commonComponents/Heading'
import Timer from '../../commonComponents/Timer'
import Slider from "react-slick";

const productComponentLayout = ({
  ProductCard= () => {

  } , 
  TimeStamp =false,
  isArrowsTrue =false,
  TimeofOffer = 0,
  heading = "Today's" ,  
  description ="  Flash sales" ,
}) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />

  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
  return (

    <div className='container mt-[140px] mb-[60px]'>
      <div className='  gap-x-[87px] flex items-end'>
        <div >
          <Heading title={heading} description={description} />
        </div>
        <div>{TimeStamp && <Timer TimeofOffer={TimeofOffer}/>}</div>
      </div>
      <div >
        <Slider className="flex gap-2"  {...settings}>
          {[...new Array(6)].map((_, index) => (
            <div className='pr-8'>
              <ProductCard />

            </div>
         ))}


        </Slider>
      </div>
      
    </div>

  )
}

export default productComponentLayout