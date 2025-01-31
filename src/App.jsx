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
      </Route>
    </Route>
  )
)


const App = () => {
  return <RouterProvider router={router} />

}

export default App