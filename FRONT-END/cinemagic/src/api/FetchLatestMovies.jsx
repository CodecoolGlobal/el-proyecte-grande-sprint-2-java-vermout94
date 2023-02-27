import React, {useEffect, useState} from 'react';
import MoviesCarousel from "../components/movies-carousel/MoviesCarousel";

function FetchLatestMovies() {
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
            <MoviesCarousel data={latestMovies} />
        </div>
    );
}

export default FetchLatestMovies;