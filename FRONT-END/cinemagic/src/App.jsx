/*react*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
/*layouts*/
import Main from "./layouts/Main";
/*components*/
import LatestMovies, {latestMoviesLoader} from "./pages/movie/latest/LatestMovies";
import PopularMovies, {popularMoviesLoader} from "./pages/movie/popular/PopularMovies";
import TopRatedMovies, {topRatedMoviesLoader} from "./pages/movie/top-rated/TopRatedMovies";
import PopularTv, {popularTvLoader} from "./pages/tv/popular/PopularTv";
import TopRatedTv, {topRatedTvLoader} from "./pages/tv/top-rated/TopRatedTv";
import People, {peopleLoader} from "./pages/People";
import Home, {homeLoader} from "./pages/home/Home";
import UpcomingMovies, {upcomingMoviesLoader} from "./pages/movie/upcoming/UpcomingMovies";
import SignupModal from "./components/signup-login-modal/SignupModal";
import LoginModal from "./components/signup-login-modal/LoginModal";
import UserDashboard from "./components/user-dashboard/UserDashboard";
/*css*/
import './index.css'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                index: true,
                element: <Home/>,
                loader: homeLoader,
            },
            {
                path: "/movies/latest",
                element: <LatestMovies/>,
                loader: latestMoviesLoader,
            },
            {
                path: "/movies/most-popular",
                element: <PopularMovies/>,
                loader: popularMoviesLoader,
            },
            {
                path: "/movies/top-rated",
                element: <TopRatedMovies/>,
                loader: topRatedMoviesLoader,
            },
            {
                path: "/movies/upcoming",
                element: <UpcomingMovies/>,
                loader: upcomingMoviesLoader,
            },
            {
                path: "/tv/most-popular",
                element: <PopularTv/>,
                loader: popularTvLoader,
            },
            {
                path: "/tv/top-rated",
                element: <TopRatedTv/>,
                loader: topRatedTvLoader,
            },
            {
                path: "/people",
                element: <People/>,
                loader: peopleLoader,
            },
            {
                path: "/login",
                element: <LoginModal/>,
            },
            {
                path: "/UserDashboard",
                element: <UserDashboard/>
            },
            {
                path: "/signup",
                element: <SignupModal/>,
            }

        ],
    },

])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)