import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home, {homeLoader} from "./pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        loader: homeLoader,
        /*errorElement: <Error/>,*/
        children: [],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)