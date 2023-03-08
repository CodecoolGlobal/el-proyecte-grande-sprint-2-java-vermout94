/*react*/
import React from 'react';
import { useState } from "react";
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaCarousel from "../../components/dynamic/MediaCarousel";
import UserDashboard from "../../components/UserDashboard";
/*apiConstants.js*/
import {LATEST_MOVIES_URL, UPCOMING_MOVIES_URL} from "../../data/apiConstants";
/*helpers.js*/
import {fetchHelper} from "../../helpers";



export async function homeLoader() {
    return await fetchHelper(UPCOMING_MOVIES_URL);
}


export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const upcomingMovieData = useLoaderData();
    return (
        <>
                {isLoggedIn ? <UserDashboard /> : <MediaCarousel data={upcomingMovieData} />}
        </>
    );
};
