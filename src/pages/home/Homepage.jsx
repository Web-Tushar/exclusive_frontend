import React from 'react'
import Header from '../../Component/Header/Header'
import Navbar from '../../Component/navber/Navbar'
import Banner from '../../Component/homePage/Banner/Banner'
import FlashSale from '../../Component/homePage/flash sale/FlashSale'
import Category from '../../Component/homePage/Category/Category'
import ProductComponentLayout from '../../Component/commonComponents/productComponentLayout'
import BestSelling from '../../Component/homePage/Bestselling/BestSelling'
import Experience from '../../Component/homePage/Experience/Experience'

const Homepage = () => {
     return <div>
          <Header />
          <Navbar />
          <Banner />
          <FlashSale/>
          <Category/>
          <BestSelling/>
          <Experience/>
     
     </div>

}

export default Homepage