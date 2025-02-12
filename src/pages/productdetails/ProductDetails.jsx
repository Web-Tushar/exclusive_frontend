import React from 'react'
import { BreadCrumb } from '../../Component/commonComponents/BreadCrumbs'
import ImageGalary from '../../Component/commonComponents/productdetails/ImageGalary'
import ProductDetaisInfo from '../../Component/commonComponents/productdetails/ProductDetaisInfo'
import { useParams } from 'react-router-dom'
import ProductDetailsSkeleton from '../../Component/Skeleton/ProductDetailsSkeleton'
import Heading from '../../Component/commonComponents/Heading'
import Slider from "react-slick";
import { useGetSingleProductQuery, useGetProductBycategoryQuery } from '../../feature/Allslice/Api/productApi.js'
import ProductCard from '../../Component/commonComponents/ProductCard'
// import ProductComponentLayout from '../../Component/commonComponents/productComponentLayout'

const ProductDetails = () => {
     const params = useParams();
     const { data, error, isLoading } = useGetSingleProductQuery(parseInt(params?.id));
    
     /**
   * todo : useGetProductByCategoryQuery query invoked
   */

     

     const catagoryData = useGetProductBycategoryQuery(data?.category)
     
     var settings = {
          dots: true,
          infinite: false,
          isArrowsTrue: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 0,
          responsive: [
               {
                    breakpoint: 1024,
                    settings: {
                         slidesToShow: 3,
                         slidesToScroll: 3,
                         infinite: true,
                         dots: true
                    }
               },
               {
                    breakpoint: 600,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                         initialSlide: 2
                    }
               },
               {
                    breakpoint: 480,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1
                    }
               }
          ]
     };

     return (
          <div>
               <div className="container">

                    {isLoading ? (<ProductDetailsSkeleton />) : (<div className="">
                         <BreadCrumb />
                         <div className="grid  grid-cols-2 mb-2 gap-x-[70px]">
                              <div className=" ">
                                   <ImageGalary image={data?.images} />
                              </div>
                              <div className="w-full"><ProductDetaisInfo productDetailsData={data} /></div>
                         </div>
                    </div>)

                    }

                    {/* releted product */}
                    <div className="">
                         <Heading
                              title="Related Item"
                              description={false}
                         />
                         <div className="slider-container">
                              <Slider {...settings}>
                                   {catagoryData?.data?.products.map((item) => (
                                        <div key={item} className="px-[40px]">
                                             <ProductCard key={item} itemData={item} />

                                        </div>
                                   ))}
                              </Slider>
                         </div>
                    </div>
                    {/* releted product */}

               </div>
          </div>
     )
}

export default ProductDetails