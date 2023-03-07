/*react*/
import React from "react";
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaCard from "../../../components/dynamic/MediaCard";
/*apiConstants.js*/
import {LATEST_TV_URL} from "../../../data/apiConstants";
/*helpers.js*/
import {fetchHelper} from "../../../helpers";

export async function latestTvLoader() {
    return await fetchHelper(LATEST_TV_URL);
}

export default function LatestTv() {
    const latestTv = useLoaderData();
    return (
        <>
            <MediaCard data={latestTv}/>
        </>
    );
}