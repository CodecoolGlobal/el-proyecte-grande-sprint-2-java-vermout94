/*react*/
import React from "react";
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaCard from "../components/dynamic/MediaCard";
/*apiConstants.js*/
import {PEOPLE_URL} from "../data/apiConstants";
/*helpers.js*/
import {fetchHelper} from "../helpers";
import PeopleOverview from "../components/PeopleOverview";


export async function peopleLoader() {
    return await fetchHelper(PEOPLE_URL);
}

export default function People() {
    const people = useLoaderData();
    return (
        <>
            <PeopleOverview data={people}/>
        </>
    );
}