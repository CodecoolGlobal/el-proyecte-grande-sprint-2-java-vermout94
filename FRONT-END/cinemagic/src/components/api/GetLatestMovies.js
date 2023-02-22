import React, {useEffect, useState} from 'react';
import Home from "../home/Home";

function GetLatestMovies(props) {
    const [jsonData, setJsonData] = useState({});

    useEffect(() => {
        async function fetchData() {
            console.log("fetch is working")
            const response = await fetch("http://localhost:8080/cinemagic/latest-movies");
            const data = await response.json();
            setJsonData(data);
        }
        console.log("fetchData")
        fetchData();
    }, []);
    console.log(jsonData)
    console.log("test")

    return (
        <div>
            <Home data={jsonData} />
        </div>
    );
}

export default GetLatestMovies;