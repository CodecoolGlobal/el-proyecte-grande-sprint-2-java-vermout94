/*react*/
import React from "react";
import {useLoaderData} from "react-router-dom";
/*components*/
/*apiConstants.js*/
import {PEOPLE_URL} from "../data/apiConstants";
/*apiHelpers.js*/
import {fetchHelper} from "../apiHelpers";
import PeopleFigure from "../components/people-figure/PeopleFigure";


export async function peopleLoader() {
    return await fetchHelper(PEOPLE_URL);
}

export default function People() {
    const people = useLoaderData();
    return (
        <>
            <PeopleFigure data={people}/>
        </>
    );
}