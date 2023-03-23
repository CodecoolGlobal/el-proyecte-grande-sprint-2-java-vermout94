/*react*/
import React, {useState, useEffect} from 'react';
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaCarousel from "../../components/media-carousel/MediaCarousel";
import UserDashboard from "../../components/user-dashboard/UserDashboard";
/*apiConstants.js*/
import {UPCOMING_MOVIES_URL} from "../../data/apiConstants";
/*apiHelpers.js*/
import {fetchHelper} from "../../apiHelpers";
import LoginModal from "../../components/signup-login-modal/LoginModal";
import {useNavigate} from "react-router-dom";
import {LOGIN_URL} from "../../data/apiConstants";


export async function homeLoader() {
    const upcomingMovieData = await fetchHelper(UPCOMING_MOVIES_URL);
    /*const favoriteMovieIds = await fetchHelper("http://localhost:8080/api/users/1/get-favorite-movie-ids")*/
    const favoriteMovieIds = 123;
    return {upcomingMovieData, favoriteMovieIds}
}


export default function Home() {
    /*TODO set initialState to false again after solving the login process*/
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const upcomingMovieData = useLoaderData().upcomingMovieData;
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
                    } else {
                        navigate("/");
                    }
                } catch (error) {
                    console.error(error);
                    navigate("/");
                }
            } else {
                navigate("/");
            }
        }

        checkAuthentication().catch(error => console.error(error));
    }, [navigate]);


    return isLoggedIn ? (
        <UserDashboard/>
    ) : (
        <MediaCarousel data={upcomingMovieData}/>
    );
}
