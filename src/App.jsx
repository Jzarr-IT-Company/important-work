import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Category from "./Pages/Category";
import DetailPage from "./Pages/DetailPage";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/products",
      element:<DetailPage/>
    },
    {
      path:"/category",
      element:<Category/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App