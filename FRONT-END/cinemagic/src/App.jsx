import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import LatestMovies, {latestMoviesLoader} from "./pages/latestMovies/LatestMovies";
import PopularMovies, {popularMoviesLoader} from "./pages/popularMovies/PopularMovies";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LatestMovies/>,
        loader: latestMoviesLoader,
        /*errorElement: <Error/>,
        children: [],*/
    },
    {
        path: "/popular-movies",
        element: <PopularMovies/>,
        loader: popularMoviesLoader,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)