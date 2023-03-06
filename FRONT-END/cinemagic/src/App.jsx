/*react*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
/*layouts*/
import Main from "./layouts/Main";
/*components*/
import LatestMovies, {latestMoviesLoader} from "./pages/latest-movies/LatestMovies";
import PopularMovies, {popularMoviesLoader} from "./pages/popular-movies/PopularMovies";
import TopRatedMovies, {topRatedMoviesLoader} from "./pages/top-rated-movies/TopRatedMovies";
import Home from "./pages/home/Home";
/*css*/
import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
              index: true,
              element: <Home/>
            },
            {
                path: "latest-movies",
                element: <LatestMovies/>,
                loader: latestMoviesLoader,
            },
            {
                path: "popular-movies",
                element: <PopularMovies/>,
                loader: popularMoviesLoader,
            },
            {
                path: "top-rated-movies",
                element: <TopRatedMovies/>,
                loader: topRatedMoviesLoader,
            },
        ],
    },

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)