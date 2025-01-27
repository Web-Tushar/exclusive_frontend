import React from 'react'
import { BreadCrumb } from '../commonComponents/BreadCrumbs'
import { useGetAllProductQuery,useGetProductBycategoryQuery } from '../../feature/Allslice/Api/productApi'
import Slider from "react-slick";
import ProductCard from '../commonComponents/ProductCard';
import Heading from '../commonComponents/Heading';

const Wishlist = () => {
  const { data, error, isLoading } = useGetAllProductQuery()
const justForYou = useGetProductBycategoryQuery('smartphones')

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
  };
  return (
    <div>
      <div className='container mt-[80px] mb-[140px]'>
        <BreadCrumb />
        {/*   wishlist */}
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className='font-poppins text-[20px] font-normal text-text_000000'>Wishlist <span>(4)</span></h3>
          </div>
          <div className="">
            <button className='font-poppins text-4 font-medium
 border-[2px] border-b-slate-600 px-[48px] py-4'>Move All To Bag</button>
          </div>
        </div>

        <div className=" mt-[60px]">
          <Slider {...settings}>
            {
              data?.products.map((item) => (
                <div className="px-2">
                  <  ProductCard itemData={item} />
                </div>
              ))
            }
          </Slider>
        </div>
        {/*   wishlist */}

        {/*   just fort  */}
        <div className="mt-[60px]">
          <div className="flex justify-between items-center">
            <Heading title="Just For You" />

            <div className="">
              <button className='font-poppins text-4 font-medium
 border-[2px] border-b-slate-600 px-[48px] py-4'>See All</button>
            </div>
          </div>
          <div className=" mt-[0px]">
            <Slider {...settings}>
              {
                justForYou?.data?.products.map((item) => (
                  <div className="px-2">
                    <  ProductCard itemData={item} />
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

export default Wishlist