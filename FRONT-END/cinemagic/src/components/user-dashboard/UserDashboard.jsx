import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {LOGIN_URL} from "../../data/apiConstants";

export default function UserDashboard() {
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();

  /*  async function checkAuthentication() {
        const token = localStorage.getItem("token");
        const uri = LOGIN_URL;
        if (token) {
            const response = await fetch(uri, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            if (response.ok) {
                setAuthenticated(true);
            } else {
                navigate('/login');
            }
        } else {
            navigate('/login');
        }
    }

    useEffect(() => {
        checkAuthentication().catch(error => console.error(error));
    }, []);*/

    return (
        <>
                <>
                    <p style={{color: "white"}}>Your current favorite movies:</p>
                    <p style={{color: "white"}}>Our recommendations for you:</p>
                </>
        </>
    );
}