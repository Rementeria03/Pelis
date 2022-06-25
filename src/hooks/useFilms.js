import { useContext, useEffect } from "react";
import { FilmsContext } from "../contexts/FilmContext";
import getFilms from "../services/getFilms.js";

export default function useFilms({ keyword, rating } = {keyword: null}) {
  const { films, setFilms } = useContext(FilmsContext);

  useEffect(
    function () {
      getFilms({ keyword, rating }).then((films) => setFilms(films));
    },
    [setFilms, keyword, rating]
  );

  return films;
}
