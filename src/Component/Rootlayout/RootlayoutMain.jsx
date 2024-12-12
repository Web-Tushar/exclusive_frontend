import React from 'react'
import Header from './Header/Header'
import Footer from './footer/Footer'
import Navbar from './navber/Navbar'
import { Outlet } from 'react-router-dom'

const RootlayoutMain = () => {
     return (
          <div>
               <Header />
               <Navbar />
               <Outlet />
               <Footer />
          </div>
     )
}

export default RootlayoutMain