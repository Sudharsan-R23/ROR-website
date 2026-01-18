import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import UnderDev from './UnderDev'
import Redeem from './components/Redeem'
import Home from './components/Home'


const path =createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/event',
    element:<UnderDev/>
  },
  {
    path:'/dev',
    element:<UnderDev/>
  },
  {
    path:'/redeem',
    element:<UnderDev/>
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={path}></RouterProvider>
  </StrictMode>
)
