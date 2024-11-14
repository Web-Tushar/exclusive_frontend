import React from 'react'
import Header from '../../Component/Header/Header'
import Navbar from '../../Component/navber/Navbar'
import Banner from '../../Component/homePage/Banner/Banner'
import FlashSale from '../../Component/homePage/flash sale/FlashSale'

const Homepage = () => {
     return <div>
          <Header />
          <Navbar />
          <Banner />
          <FlashSale/>
     </div>

}

export default Homepage