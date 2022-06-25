import React from "react";
import { Box, Button, Image, Show, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "wouter";

export default function FilmCard({
  backdrop_path,
  overview,
  title,
  vote_average,
  id,
}) {
  return (
    <Box
      borderRadius="5px"
      overflow="hidden"
      borderWidth="1px grey.300"
      boxShadow="lg"
      transform="auto"
      transition=".3s"
      _hover={{
        scale: "1.05",
      }}
    >
      <Image
        objectFit="contain"
        w="100%"
        src={
          backdrop_path
            ? `https://image.tmdb.org/t/p/w780${backdrop_path}`
            : "https://via.placeholder.com/200x100?text=Not+available"
        }
        alt={title}
      />
      <Box p={4} display="flex" flexDirection="column">
        <Box
          mt="1"
          fontWeight="semibold"
          fontFamily="Urbanist"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {title}
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < vote_average / 2 ? "yellow.500" : "gray.300"}
              />
            ))}
        </Box>

        <Box mt="3" display="flex" flexDirection="column">
          Description:
          <Text fontStyle="italic" noOfLines={2} fontSize="sm">{overview}</Text>
        </Box>
        <Link to={`/detail/${id}`}>
          <Button bgColor="blue.100" alignSelf="flex-end" mt="2" size="xs">Ver más</Button>
        </Link>
      </Box>
    </Box>
  );
}