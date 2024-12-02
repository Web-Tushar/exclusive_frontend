import React from 'react'
import ProductComponentLayout from '../../commonComponents/productComponentLayout'
// import ProductCard from '../../commonComponents/ProductCard'
import ProductCard from './../../commonComponents/ProductCard';
import { useBestSellingProductQuery } from '../../../feature/Allslice/Api/productApi';

const BestSelling = () => {
  const { data, error, isLoading } = useBestSellingProductQuery();
  console.log(data);
  return (
    <div>
      <ProductComponentLayout
        heading={"This Month"}
        description={"Best Selling Products"}
        ProductCard={ProductCard}
        TimeStamp={false}
        TimeofOffer={2}
        isArrowsTrue={false}
        partialItemShow={4}
        copmonentData={data?.products}
        isLoading={isLoading}
        viewButton={true}
      />
    </div>
  )
}

export default BestSelling