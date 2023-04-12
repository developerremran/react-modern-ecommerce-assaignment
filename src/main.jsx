import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './Components/Home'
import AppliedJobs from './Components/AppliedJobs'
import Blog from './Components/Blog'
import Statistics from './Statistics'
import StartApplied from './Components/StartApplied'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/applied-jobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/Statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/start-applied',
        element:<StartApplied></StartApplied>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}>
    
 </RouterProvider>
)
