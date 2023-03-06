/*react*/
import React from "react";
import { useLoaderData } from "react-router-dom";
/*components*/
import MediaCarousel from "../../components/dynamic/MediaCarousel";
import { LATEST_MOVIES_URL } from "../../data/api";
/*helpers.js*/
import { fetchHelper } from "../../helpers";

export async function latestMoviesLoader() {
  const latestMovies = await fetchHelper(LATEST_MOVIES_URL);
  return latestMovies;
}

export default function LatestMovies() {
  const latestMovies = useLoaderData();
  return (
    <>
      <MediaCarousel data={latestMovies} />
    </>
  );
}
