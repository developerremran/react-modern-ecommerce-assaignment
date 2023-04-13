import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './Components/Home'
import Blog from './Components/Blog'
import Shop from './Components/Shop'
import Cart from './Components/Cart'
import About from './About'
import Error from './Components/Error'
import getLocalCartData from './Components/Loader/CartDataLoader'
import { Toaster } from 'react-hot-toast';




const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<Error></Error>,
    loader: getLocalCartData,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/shop',
        element:<Shop></Shop>,
        // loader: ()=> fetch('/public/data/products.json')
        
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/cart',
        element:<Cart></Cart>,
        loader: getLocalCartData,

      },
      {
        path:'/about-us',
        element:<About></About>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <>
 <Toaster></Toaster>
 <RouterProvider router={router}></RouterProvider>
 </>
)
