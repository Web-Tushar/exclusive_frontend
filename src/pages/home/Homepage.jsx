import React from 'react'
import Header from '../../Component/Header/Header'
import Navbar from '../../Component/navber/Navbar'
import Banner from '../../Component/homePage/Banner/Banner'
import FlashSale from '../../Component/homePage/flash sale/FlashSale'
import Category from '../../Component/homePage/Category/Category'

const Homepage = () => {
     return <div>
          <Header />
          <Navbar />
          <Banner />
          <FlashSale/>
          <Category/>
     
     </div>

}

export default Homepage