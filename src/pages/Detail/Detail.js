import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import useSingleFilm from "../../hooks/useSingleFilm";

export default function Detail({ params }) {
  const { filmId } = params;

  const filmData = useSingleFilm({ filmId });
  const { film, filmGenres, filmLenguages } = filmData;

  const [isSmallerScreen] = useMediaQuery("(max-width: 1024px)");

  return (
    <Flex
      p="2em 5em"
      justify="center"
      align="center"
      sx={{
        "@media screen and (max-width: 712px)": {
          p: "1em",
        },
      }}
    >
      <Box
        borderRadius="md"
        boxShadow="md"
        display="flex"
        flex="1"
        overflow="hidden"
        sx={{
          "@media screen and (max-width: 1024px)": {
            flexDir: "column",
            alignItems: "center",
          },
        }}
      >
        <Box>
          <Image
            maxW={isSmallerScreen ? "100%" : "300px"}
            src={
              isSmallerScreen
                ? `https://image.tmdb.org/t/p/w780${film.backdrop_path}`
                : `https://image.tmdb.org/t/p/w780${film.poster_path}`
            }
          />
        </Box>
        <Box p="6">
          <Heading color="grey.200">{film.title}</Heading>
          <Box display="flex" mt="4" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  ml="1"
                  key={i}
                  color={i < film.vote_average / 2 ? "yellow.500" : "grey.200"}
                />
              ))}
            <Badge ml="3" borderRadius="full" px="2" colorScheme="yellow">
              {film.vote_average} / 10
            </Badge>
            <Text ml="2" fontSize="sm">
              +{Math.floor(film.runtime / 60)}hs
            </Text>
          </Box>
          <Box mt="3">Release date: {film.release_date}</Box>
          <Box display="flex" gap="3" mt="3">
            Genres:{" "}
            {filmGenres.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </Box>
          <Box display="flex" gap="3" mt="3">
            Lenguages:{" "}
            {filmLenguages.map((leng) => (
              <p key={leng.iso_639_1}>{leng.english_name}</p>
            ))}
          </Box>
          <Box maxW="600px" mt="4" flex={1}>
            {film.overview}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
