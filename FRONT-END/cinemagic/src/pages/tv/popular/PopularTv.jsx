/*react*/
import React from 'react';
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaCard from "../../../components/media-card/MediaCard";
/*helpers.js*/
import {fetchHelper} from "../../../helpers";
/*apiConstants.js*/
import {POPULAR_TV_URL} from "../../../data/apiConstants";

export async function popularTvLoader() {
    return await fetchHelper(POPULAR_TV_URL);
}

export default function PopularTv() {
    const popularTv = useLoaderData();
    return (
        <>
            <MediaCard data={popularTv}/>
        </>
    );
};

