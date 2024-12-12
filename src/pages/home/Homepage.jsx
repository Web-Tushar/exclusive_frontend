import React from 'react'
import Banner from '../../Component/homePage/Banner/Banner'
import FlashSale from '../../Component/homePage/flash sale/FlashSale'
import Category from '../../Component/homePage/Category/Category'
import ProductComponentLayout from '../../Component/commonComponents/productComponentLayout'
import BestSelling from '../../Component/homePage/Bestselling/BestSelling'
import Experience from '../../Component/homePage/Experience/Experience'
import ExploreProducts from '../../Component/homePage/exploerProduct/ExploreProducts'
import NewArrival from '../../Component/homePage/NewArrival/NewArrival'
import CustomerService from '../../Component/homePage/customerService/CustomerService'


const Homepage = () => {
     return <div>
          
          <Banner />
          <FlashSale />
          <Category />
          <BestSelling />
          <Experience timeDuration={5} />
          <ExploreProducts />
          <NewArrival />
          <CustomerService />
     

     </div>

}

export default Homepage