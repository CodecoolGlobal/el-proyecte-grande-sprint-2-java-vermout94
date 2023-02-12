import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Header from "./components/header/Header";


function App() {
    /*const [stringData, setStringData] = useState("");


    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:8080/cinemagic/test");
            const data = await response.text();
            setStringData(data);
        }

        fetchData();
    }, []);*/

    return (

        <div className="Data">
            <Header/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Home />}></Route>

                </Route>
            </Routes>

        </div>
    );
}

export default App;