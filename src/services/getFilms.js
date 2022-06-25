import { API_KEY, API_URL } from "./config";

export default function getGifs({ keyword, rating = 6 }) {
  const apiDiscover = `${API_URL}discover/movie?api_key=${API_KEY}`;
  const apiSearch = `${API_URL}search/movie?api_key=${API_KEY}&query=${keyword}&vote_average.lte=${rating}&language=en-US&page=1&include_adult=false`;

  return fetch(!keyword ? apiDiscover : apiSearch)
    .then((resp) => resp.json())
    .then((response) => {
      const { results } = response;
      const films = results.map((film) => {
        const { backdrop_path, title, overview, vote_average, id } = film;
        return { backdrop_path, title, overview, vote_average, id };
      });
      return films;
    });
}
