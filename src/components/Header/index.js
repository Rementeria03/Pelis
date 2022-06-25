import { Flex, Heading, Spacer } from "@chakra-ui/react";
import SearchForm from "../SearchForm";

export default function Header() {
  return (
    <Flex
      align="center"
      p="1em 5em"
      boxShadow="md"
      gap="1em"
      sx={{
        "@media screen and (max-width: 712px)": {
          p: "1em",
          flexDir: "column"
        },
      }}
    >
      <a href="/">
        <Heading
          cursor="pointer"
          fontFamily="Fascinate Inline"
          fontSize="2em"
          color="red.600"
        >
          PELIS
        </Heading>
      </a>
      <Spacer />
      <SearchForm />
    </Flex>
  );
}
