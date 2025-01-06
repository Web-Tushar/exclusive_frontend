import React from 'react'
import { BreadCrumb } from '../../Component/commonComponents/BreadCrumbs'
import ImageGalary from '../../Component/commonComponents/productdetails/ImageGalary'
import { useGetSingleProductQuery } from '../../feature/Allslice/Api/productApi'  


const ProductDetails = () => {
     const { data, error, isaLoading } = useGetSingleProductQuery(parseInt(1));
     
     return (
          <div>
               <div className="container">
                    <BreadCrumb />
                    <div className="grid  grid-cols-2 mb-2 gap-x-4">
                         <div className=" ">
                              <ImageGalary image ={data?.images}/>
                         </div>
                         <div className="w-full bg-red-200">2</div>
                    </div>

               </div>
          </div>
     )
}

export default ProductDetails