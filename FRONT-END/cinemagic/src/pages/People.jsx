/*react*/
import React from "react";
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaCard from "../components/dynamic/MediaCard";
/*apiConstants.js*/
import {PEOPLE_URL} from "../data/apiConstants";
/*helpers.js*/
import {fetchHelper} from "../helpers";


//TODO: new media component for people needed


export async function peopleLoader() {
    return await fetchHelper(PEOPLE_URL);
}

export default function People() {
    const people = useLoaderData();
    return (
        <>
            <MediaCard data={people}/>
        </>
    );
}