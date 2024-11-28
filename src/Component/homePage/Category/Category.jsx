import React from 'react'
import ProductComponentLayout from '../../commonComponents/productComponentLayout'
import CategoryItems from '../../commonComponents/CategoryItems'
import { categoryBrowser } from '../../../../Data/data'

const Category = () => {
     return (
          <div className='container pb-[70px]'>
               <ProductComponentLayout
                    heading={"Categories"}
                    description={"Browse By Category"}
                    isArrowsTrue={true}
                    ProductCard={CategoryItems}
                    partialItemShow={6}
                    copmonentData={categoryBrowser}

               />

          </div>
     )
}

export default Category