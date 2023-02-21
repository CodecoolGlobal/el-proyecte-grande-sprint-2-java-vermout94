import React, {useEffect, useState} from 'react';

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