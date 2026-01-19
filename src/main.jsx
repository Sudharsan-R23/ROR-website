import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import UnderDev from './UnderDev'
import Redeem from './components/Redeem'
import Home from './components/Home'
import Store from './components/Store'


const path =createBrowserRouter([
  {
    path:'/',
    element:<Redeem/>
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
    element:<Redeem/>
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={path}></RouterProvider>
  </StrictMode>
)
