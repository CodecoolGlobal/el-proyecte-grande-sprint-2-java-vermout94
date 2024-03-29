/*react*/
import React from 'react';
import {useLoaderData} from "react-router-dom";
/*components*/
import MediaFigure from "../../../components/media-figure/MediaFigure";
/*apiHelpers.js*/
import {fetchHelper} from "../../../apiHelpers";
/*apiConstants.js*/
import {TOP_RATED_TV_URL} from "../../../data/apiConstants";


export async function topRatedTvLoader() {
    return await fetchHelper(TOP_RATED_TV_URL);
}

export default function TopRatedTv() {
    const topRatedTv = useLoaderData();
    return (
        <>
            <MediaFigure data={topRatedTv}/>
        </>
    );
};
