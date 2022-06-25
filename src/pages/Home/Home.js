import React from "react";
import { Grid } from "@chakra-ui/react";
import ListOfFilms from "../../components/ListOfFilms/index.js";
import useFilms from "../../hooks/useFilms.js";

export default function Home() {
  const films = useFilms();

  return (
    <Grid
      p="2em 5em"
      gap="2em"
      templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
      sx={{
        "@media screen and (max-width: 712px)": {
          p: "2em 1em",
        },
      }}
    >
      <ListOfFilms films={films} />
    </Grid>
  );
}
