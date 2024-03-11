import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Frontend_header from '../layouts/frontend_header'

const frontend_router = createBrowserRouter([
    {
        path: "/",
        element: <Frontend_header/>,
        children:[
            {
                index: true,
                element: <App/>
            }
        ]
    }
])

export default frontend_router
