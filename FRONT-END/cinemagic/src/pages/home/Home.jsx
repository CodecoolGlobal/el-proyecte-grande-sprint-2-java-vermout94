/*react*/
import React, {useState} from 'react';
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaCarousel from "../../components/media-carousel/MediaCarousel";
import UserDashboard from "../../components/user-dashboard/UserDashboard";
/*apiConstants.js*/
import {UPCOMING_MOVIES_URL} from "../../data/apiConstants";
/*apiHelpers.js*/
import {fetchHelper} from "../../apiHelpers";


export async function homeLoader() {
    return await fetchHelper(UPCOMING_MOVIES_URL);
}


export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const upcomingMovieData = useLoaderData();
    return (
        <>
            {isLoggedIn ? <UserDashboard/> : <MediaCarousel data={upcomingMovieData}/>}
        </>
    );
};
