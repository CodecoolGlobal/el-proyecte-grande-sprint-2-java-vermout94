import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

export default function UserDashboard({loginStatus}) {
    const navigate = useNavigate();

    useEffect(() => {
        if (loginStatus === false) {
            navigate('/');
        }
    }, []);

    return (
        <>
            {loginStatus && (
                <>
                    <p style={{color: "white"}}>Your current favorite movies:</p>
                    <p style={{color: "white"}}>Our recommendations for you:</p>
                </>)}
        </>
    );
}