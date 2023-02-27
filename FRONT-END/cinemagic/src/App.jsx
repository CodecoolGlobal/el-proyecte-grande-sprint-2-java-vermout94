import React from 'react';
import {Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout";
import FetchLatestMovies from "./api/FetchLatestMovies";
import "./App.css"

function App() {
    return (
        <div className="Data">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<FetchLatestMovies/>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;