import { API_KEY, API_URL } from "./config";

export default function getSingleFilm({ filmId }) {
  return fetch(`${API_URL}/movie/${filmId}?api_key=${API_KEY}`)
    .then((resp) => resp.json())
    .then((response) => {
      const {
        backdrop_path,
        genres,
        release_date,
        id,
        overview,
        poster_path,
        spoken_languages,
        title,
        vote_average,
        runtime,
      } = response;
      const film = {
        id,
        release_date,
        poster_path,
        backdrop_path,
        title,
        overview,
        vote_average,
        runtime,
      };
      const filmGenres = [...genres];
      const filmLenguages = [...spoken_languages];
      return { film, filmGenres, filmLenguages };
    });
}
