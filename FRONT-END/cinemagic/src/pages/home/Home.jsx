/*react*/
import React from 'react';
import { useState } from "react";
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaCarousel from "../../components/dynamic/MediaCarousel";
/*apiConstants.js*/
import {LATEST_MOVIES_URL} from "../../data/apiConstants";
import {LATEST_TV_URL} from "../../data/apiConstants";
/*helpers.js*/
import {fetchHelper} from "../../helpers";
/*pages*/
import LoginForm from "../../components/LoginForm";
import UserDashboard from "../../components/UserDashboard";


/*export async function homeLoader() {
    const latestMovieData = await fetchHelper(LATEST_MOVIES_URL);
    const latestTvData = await fetchHelper(LATEST_TV_URL);
    return {latestMovieData, latestTvData};
}*/

/*export default function Home() {
    const {latestMovieData, latestTvData} = useLoaderData();
    return (
        <>
            <MediaCarousel data={latestMovieData}/>
            <MediaCarousel data={latestTvData}/>
        </>
    );
}*/


export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <h1 style={{ color: "white" }}>
                {isLoggedIn ? <UserDashboard /> : <LoginForm />}
            </h1>
        </>
    );
};
