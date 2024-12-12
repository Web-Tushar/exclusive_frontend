import React from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Homepage from './pages/home/Homepage';
import RootlayoutMain from './Component/Rootlayout/RootlayoutMain';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<RootlayoutMain />}>
        <Route index element={<Homepage />}></Route>
      </Route>
    </Route>
  )
)


const App = () => {
  return <RouterProvider router={router} />

}

export default App