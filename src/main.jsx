import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Web from './Web'
import Development from './components/Development'
import Redeem from './components/Redeem'

const path =createBrowserRouter([
  {
    path:'/',
    element:<Web/>
  },
  {
    path:'/develpment',
    element:<Development/>
  },
  {
    path:'/event',
    element:<Event/>
  },
  {
    path:'/',
    element:<Redeem/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={path}></RouterProvider>
  </StrictMode>
)
