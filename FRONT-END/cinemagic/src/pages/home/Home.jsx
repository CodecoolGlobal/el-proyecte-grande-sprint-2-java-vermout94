/*react*/
import React, {useCallback, useState} from 'react';
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaCarousel from "../../components/media-carousel/MediaCarousel";
import UserDashboard from "../../components/user-dashboard/UserDashboard";
/*apiConstants.js*/
import {LOGIN_URL, UPCOMING_MOVIES_URL} from "../../data/apiConstants";
/*service.js*/
import {fetchHelper} from "../../service";


export async function homeLoader() {
    const upcomingMovieData = await fetchHelper(UPCOMING_MOVIES_URL);
    const favoriteMovieIds = 123;
    return {upcomingMovieData, favoriteMovieIds}
}

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const upcomingMovieData = useLoaderData().upcomingMovieData;

    const checkAuthentication = useCallback(async () => {
        const token = localStorage.getItem('token');
        const uri = LOGIN_URL;
        if (token) {
            try {
                const response = await fetch(uri, {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
                if (response.ok) {
                    setIsLoggedIn(true);
                }
            } catch (error) {
                console.error("Error with token:", error);
            }
        }
    }, []);

    React.useEffect(() => {
        checkAuthentication().catch((error) =>
            console.error("Error in checkAuthentication:", error)
        );
    }, [checkAuthentication]);

    return isLoggedIn ? (
        <UserDashboard/>
    ) : (
        <MediaCarousel data={upcomingMovieData}/>
    );
}
