import React from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Homepage from './pages/home/Homepage';
import RootlayoutMain from './Component/Rootlayout/RootlayoutMain';
import ProductPage from './pages/product page/ProductPage';
import ProductDetails from './pages/productdetails/ProductDetails';
import Login from './pages/auth/Login/Login';
import Wishlist from './pages/wishlist/Wishlist';
import AddToCart from './pages/Add to cart/AddToCart';
import MyAccount from './pages/myaccount/MyAccount';
import About from './pages/aboute/About';
import Contact from './pages/contact/Contact';
import Page404 from './pages/404page/Page404';
import Signup from './pages/sign up/Signup';
import Forget_pasword from './pages/forget password/Forget_pasword';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<RootlayoutMain />}>
        <Route index element={<Homepage />}></Route>
        <Route path='/ProductPage' element={<ProductPage />}></Route>
        <Route path='/ProductDetails/:id' element={<ProductDetails />}></Route>
        <Route path='/ProductDetails' element={<ProductPage />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Wishlist' element={<Wishlist />}></Route>
        <Route path='/AddToCart' element={<AddToCart />}></Route>
        <Route path='/MyAccount' element={<MyAccount />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Forget_pasword' element={<Forget_pasword />}></Route>
        <Route path='*' element={<Page404 />}></Route>
      </Route>
    </Route>
  )
)


const App = () => {
  return <RouterProvider router={router} />

}

export default App