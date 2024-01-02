import { Genres } from "@/typings";
import React from "react";

async function GenreDropdown() {
  const url = "https://api.themoviedb.org/3/genre/list?language=en";

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24, // 24 hours
    },
  };

  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;

  return <div>GenreDropdown</div>;
}

export default GenreDropdown;
