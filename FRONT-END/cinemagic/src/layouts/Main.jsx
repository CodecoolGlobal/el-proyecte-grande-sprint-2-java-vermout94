/*react*/
import React from 'react';
import {Outlet} from "react-router-dom";
/*components*/
import Header from "../components/Header";

const Main = () => {
    return (
        <div className={"layout"}>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};

export default Main;