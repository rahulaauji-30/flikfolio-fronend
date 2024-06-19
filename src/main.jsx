import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { Search } from '@mui/icons-material'
import Page from './Page'
import Home from './Home'
import Navsearch from './Navsearch'
import Login from './Login'
import Signup from './Signup'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/movie/:title/:id",
        element:<Page/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<Signup/>
      }
    ]
  },{
    path:"/search",
    element:<Navsearch/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
