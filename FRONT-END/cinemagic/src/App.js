import React from 'react';
import {Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/header/Header";
import GetLatestMovies from "./components/api/GetLatestMovies";


function App() {
    return (

        <div className="Data">
            <Header/>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<GetLatestMovies/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;