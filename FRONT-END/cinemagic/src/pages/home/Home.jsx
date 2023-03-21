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
    const upcomingMovieData = await fetchHelper(UPCOMING_MOVIES_URL);
    /*const favoriteMovieIds = await fetchHelper("http://localhost:8080/api/users/1/get-favorite-movie-ids")*/
    const favoriteMovieIds = 123;
    return {upcomingMovieData, favoriteMovieIds}
}


export default function Home() {
    /*TODO set initialState to false again after solving the login process*/
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const upcomingMovieData = useLoaderData().upcomingMovieData;
    return (
        <>
            {isLoggedIn ? <UserDashboard/> : <MediaCarousel data={upcomingMovieData}/>}
        </>
    );
};
