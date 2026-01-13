import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Web from './Web'


const path =createBrowserRouter([
  {
    path:'/',
    element:<Web/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={path}></RouterProvider>
  </StrictMode>
)
