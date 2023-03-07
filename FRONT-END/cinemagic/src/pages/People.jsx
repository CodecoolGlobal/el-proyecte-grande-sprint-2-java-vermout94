/*react*/
import React from "react";
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaFigure from "../../../components/dynamic/MediaFigure";
/*apiConstants.js*/
import {PEOPLE_URL} from "../../../data/apiConstants";
/*helpers.js*/
import {fetchHelper} from "../../../helpers";

export async function peopleLoader() {
    return await fetchHelper(PEOPLE_URL);
}

export default function People() {
    const people = useLoaderData();
    return (
        <>
            <MediaFigure data={people}/>
        </>
    );
}