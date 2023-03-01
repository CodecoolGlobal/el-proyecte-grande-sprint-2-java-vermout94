/*react*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
/*components*/
import LatestMovies, {latestMoviesLoader} from "./pages/latest-movies/LatestMovies";
import PopularMovies, {popularMoviesLoader} from "./pages/popular-movies/PopularMovies";
import TopRatedMovies, {topRatedMoviesLoader} from "./pages/top-rated-movies/TopRatedMovies";
/*css*/
import './index.css'



const router = createBrowserRouter([
    {
        path: "/",
        element: <LatestMovies/>,
        loader: latestMoviesLoader,
        /*errorElement: <Error/>,
        children: [],
        I left this on purpose as a reference*/
    },
    {
        path: "/popular-movies",
        element: <PopularMovies/>,
        loader: popularMoviesLoader,
    },
    {
        path: "/top-rated-movies",
        element: <TopRatedMovies/>,
        loader: topRatedMoviesLoader,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)