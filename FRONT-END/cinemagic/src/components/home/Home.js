import React, {useState} from 'react';
import {useEffect} from "react";


/*const Home = (props) => {
    useEffect(() => {
       return(
        console.log(props))
    }, [])}*/


/*function Home(props) {
    return(
        <div>
            <h1>{props}</h1>
        </div>
    )
}*/

function Home() {
    const [stringData, setStringData] = useState("");


    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:8080/cinemagic/test");
            const data = await response.text();
            setStringData(data);
        }

        fetchData();
    }, []);


    return (
        <div>
            <h1>{stringData}</h1>
        </div>
    )
}

export default Home