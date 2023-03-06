/*react*/
import React from 'react';
import {Outlet} from "react-router-dom";
/*components*/
import Header from "../components/Header";

export default function Main() {
    return (
        <div className={"layout"}>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};