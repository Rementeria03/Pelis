import { Grid } from "@chakra-ui/react";
import React from "react";
import ListOfFilms from "../../components/ListOfFilms";
import useFilms from "../../hooks/useFilms";

export default function SearchPage({ params }) {

  const { keyword, rating } = params

  const films = useFilms( {keyword: keyword, rating: rating});

  return (
    <Grid
      minH="100vh"
      p="2em 5em"
      gap="2em"
      templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
      sx={{
        "@media screen and (max-width: 712px)": {
          p: "2em 1em",
        },
      }}
    >
      <ListOfFilms films={films}/>
    </Grid>
  );
}
