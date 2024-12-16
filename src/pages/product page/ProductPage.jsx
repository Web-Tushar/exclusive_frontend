import React from 'react'
import { BreadCrumb } from './../../Component/commonComponents/BreadCrumbs';
import ProductLeft from '../../Component/Rootlayout/productPagecomponent/ProductLeft';
import ProductRight from '../../Component/Rootlayout/productPagecomponent/ProductRight';
import { useGetAllProductCategoryListQuery } from '../../feature/Allslice/Api/productApi';
const ProductPage = () => {
  const { data, error, isLoading } = useGetAllProductCategoryListQuery();
  console.log(data);
  return (
    <div className='container py-20'>
      <BreadCrumb />
      <div className="flex justify-between">
        <ProductLeft CategoryData={data} isLoading={isLoading} error={error} />
        <ProductRight />
      </div>
    </div>
  )
}

export default ProductPage