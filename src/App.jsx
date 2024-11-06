import React, { createElement } from 'react';
import Header from './Component/Header/Header';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/home' element={<Header/>} />
    </Route>
  )
)


const App = () => {
  return <RouterProvider router={router} />
  
}

export default App