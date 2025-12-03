import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { RouterProvider } from 'react-router-dom'
import Home from '../Home'
import Movies from '../Components/NavbarComponent/Pages/Movies'
import TvShows from '../Components/NavbarComponent/Pages/TvShows'
import LiveTv from '../Components/NavbarComponent/Pages/LiveTv'
import Join from '../Components/NavbarComponent/Pages/Join'
const allroutes = createBrowserRouter([

    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                children:[
                    {path:'/movies',element:<Movies/>},
                    {path:'/tvshows',element:<TvShows/>},
                    {path:'/livetv',element:<LiveTv/>},
                ]
            }
        ]
    }
])
const Router = () => {
  return (
    
      <RouterProvider router={allroutes} />
  )
}

export default Router
