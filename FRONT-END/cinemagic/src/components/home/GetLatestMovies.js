import React, {useEffect, useState} from 'react';

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

    const movies = jsonData.results;

    return (

        <div>
            <h1>Latest Movies</h1>
            <div className="movie-container">
                {movies && movies.map((movie => (<div key={movie.id}>{movie.title}</div>)))}
            </div>

        </div>
    )
}

export default GetLatestMovies