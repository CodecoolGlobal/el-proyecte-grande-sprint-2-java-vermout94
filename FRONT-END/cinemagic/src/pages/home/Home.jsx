/*react*/
import React, {useCallback, useState} from 'react';
import {useLoaderData, useLocation, useNavigate} from "react-router-dom";
/*components*/
import MediaCarousel from "../../components/media-carousel/MediaCarousel";
import UserDashboard from "../../components/user-dashboard/UserDashboard";
/*apiConstants.js*/
import {LOGIN_URL, UPCOMING_MOVIES_URL} from "../../data/apiConstants";
/*apiHelpers.js*/
import {fetchHelper} from "../../apiHelpers";


export async function homeLoader() {
    const upcomingMovieData = await fetchHelper(UPCOMING_MOVIES_URL);
    /*const favoriteMovieIds = await fetchHelper("http://localhost:8080/api/users/1/get-favorite-movie-ids")*/
    const favoriteMovieIds = 123;
    return {upcomingMovieData, favoriteMovieIds}
}

/*export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [upcomingMovieData, setUpcomingMovieData] = useState(null);
    const loaderData = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        async function checkAuthentication() {
            const token = localStorage.getItem("token");
            const uri = LOGIN_URL;
            if (token) {
                try {
                    const response = await fetch(uri, {
                        headers: {
                            'Authorization': 'Bearer ' + token
                        },
                    });
                    if (response.ok) {
                        setIsLoggedIn(true);
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
        checkAuthentication().catch(error => console.error('Error in checkAuthentication:', error));
    }, []);

    useEffect(() => {
        if (!isLoggedIn) {
            setUpcomingMovieData(loaderData.upcomingMovieData);
        }
    }, [isLoggedIn, loaderData]);

    return isLoggedIn ? (
        <UserDashboard/>
    ) : (
        <MediaCarousel data={upcomingMovieData}/>
    );
}*/

/*
export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const upcomingMovieData = location.state?.upcomingMovieData;

    useEffect(() => {
        async function checkAuthentication() {
            const token = localStorage.getItem('token');
            const uri = LOGIN_URL;
            if (token) {
                try {
                    const response = await fetch(uri, {
                        headers: {
                            Authorization: 'Bearer ' + token,
                        },
                    });
                    if (response.ok) {
                        setIsLoggedIn(true);
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
        checkAuthentication().catch(error => console.error('Error in checkAuthentication:', error));
    }, []);

    return isLoggedIn ? (
        <UserDashboard />
    ) : (
        <MediaCarousel data={upcomingMovieData} />
    );
}*/

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    /*const upcomingMovieData = location.state?.upcomingMovieData;*/
    const upcomingMovieData = useLoaderData().upcomingMovieData;

    const checkAuthentication = useCallback(async () => {
        const token = localStorage.getItem('token');
        const uri = LOGIN_URL;
        console.log("CHECK");
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
