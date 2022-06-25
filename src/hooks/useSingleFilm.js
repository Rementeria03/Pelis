import { useEffect, useState } from "react";
import getSingleFilm from "../services/getSingleFilm";

export default function useSingleFilm({ filmId }) {
  const [filmData, setFilm] = useState({
    film: {},
    filmLenguages: [],
    filmGenres: [],
  });

  useEffect(
    function () {
      getSingleFilm({ filmId }).then(({ film, filmGenres, filmLenguages }) =>
        setFilm({
          film: film,
          filmGenres: filmGenres,
          filmLenguages: filmLenguages,
        })
      );
    },
    [filmId]
  );

  return filmData;
}
