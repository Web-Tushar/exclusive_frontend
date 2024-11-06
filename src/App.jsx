import React, { createElement } from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Homepage from './pages/home/Homepage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Homepage/>} />
    </Route>
  )
)


const App = () => {
  return <RouterProvider router={router} />
  
}

export default App