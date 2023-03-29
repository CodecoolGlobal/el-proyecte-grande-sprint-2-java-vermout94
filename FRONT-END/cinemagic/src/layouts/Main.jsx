/*react*/
import React from 'react';
import {Outlet} from "react-router-dom";
/*components*/
import Header from "../components/header/Header";

export default function Main({loginStatus, setLoginStatus}) {
    return (
        <div className={"layout"}>
            <Header loginStatus={loginStatus} setLoginStatus={setLoginStatus}/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
};