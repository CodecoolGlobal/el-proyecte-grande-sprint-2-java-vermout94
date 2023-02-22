import React, {useEffect, useState} from 'react';
import Home from "../home/Home";

function GetLatestMovies() {
    const [jsonData, setJsonData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:8080/cinemagic/latest-movies");
            const data = await response.json();
            setJsonData(data);
        }
        fetchData();
    }, []);

    const latestMovies = jsonData.results;
    return (
        <div>
            <Home data={latestMovies} />
        </div>
    );
}

export default GetLatestMovies;