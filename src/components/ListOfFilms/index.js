import React from "react";
import useFilms from "../../hooks/useFilms.js";
import FilmCard from "../FilmCard/index.js";

export default function ListOfFilms({ films }) {

  return (
    <>
      {films.map((film) => {
        return <FilmCard key={film.id} {...film}/>
      })}
    </>
  );
}
