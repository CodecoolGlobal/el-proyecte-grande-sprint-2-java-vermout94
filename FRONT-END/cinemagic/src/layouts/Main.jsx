/*react*/
import React from 'react';
import {Outlet} from "react-router-dom";
/*components*/
import Header from "../components/Header";

const Main = () => {
    return (
        <div className={"layout"}>
            <Header/>
            <br></br>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Main;