import React from 'react'
import ReactDOM from 'react-dom/client'
// import dotenv from 'dotenv'
// dotenv.config();
import './index.css'
import { RouterProvider } from 'react-router-dom'
import frontend_router from '../src/router/frontend_router.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={frontend_router}></RouterProvider>
  </React.StrictMode>,
)
