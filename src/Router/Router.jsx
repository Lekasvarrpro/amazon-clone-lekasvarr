import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import Home from '../Home'
import Movies from '../Components/NavbarComponent/Pages/Movies'
import TvShows from '../Components/NavbarComponent/Pages/TvShows'
import LiveTv from '../Components/NavbarComponent/Pages/LiveTv'
import Join from '../Components/NavbarComponent/Pages/Join'
import Subscription from '../Components/NavbarComponent/Pages/Subscriptions'

const allroutes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/movies', element: <Movies /> },
      { path: '/tvshows', element: <TvShows /> },
      { path: '/livetv', element: <LiveTv /> },
      { path: '/subscriptions', element: <Subscription /> },
    ]
  
  },
  {
    path: '/join',
    element: <Join />
  }
])

const Router = () => {
  return <RouterProvider router={allroutes} />
}

export default Router
