import React, { useContext, useState } from "react";
import { useLocation } from "wouter";
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon, StarIcon } from "@chakra-ui/icons";
import "./SearchForm.css";
import { FilmsContext } from "../../contexts/FilmContext";

export default function SearchForm() {
  const [keyword, setKeyowrd] = useState("");
  const [rating, setRating] = useState(0);

  const [, setLocation] = useLocation();

  const handleChangeKey = (e) => {
    setKeyowrd(e.target.value);
  };

  const handleRating = (e) => {
    setRating(e.target.value)  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(`/search/${keyword}/${rating}`);
  };

  return (
    <Box as="form" onSubmit={handleSubmit} display="flex" alignItems="center">
      <Box
        border="1px"
        borderColor="gray.200"
        display="flex"
        p="2"
        alignItems="center"
        maxH="40px"
      >
        <Box display="flex">
          <Box className="clasificacion" display="flex">
            <input
              id="radio1"
              type="radio"
              name="estrellas"
              value="10"
              onChange={handleRating}
            />
            <label htmlFor="radio1">
              <StarIcon />
            </label>
            <input
              id="radio2"
              type="radio"
              name="estrellas"
              value="8"
              onChange={handleRating}
            />
            <label htmlFor="radio2">
              <StarIcon />
            </label>
            <input
              id="radio3"
              type="radio"
              name="estrellas"
              value="6"
              onChange={handleRating}
            />
            <label htmlFor="radio3">
              <StarIcon />
            </label>
            <input
              id="radio4"
              type="radio"
              name="estrellas"
              value="4"
              onChange={handleRating}
            />
            <label htmlFor="radio4">
              <StarIcon />
            </label>
            <input
              id="radio5"
              type="radio"
              name="estrellas"
              value="2"
              onChange={handleRating}
            />
            <label htmlFor="radio5">
              <StarIcon />
            </label>
          </Box>
        </Box>
      </Box>
      <InputGroup ml="2">
        <Input
          type="text"
          value={keyword}
          onChange={handleChangeKey}
          placeholder="Buscar"
        />
        <InputRightElement pointerEvents="none" children={<SearchIcon />} />
      </InputGroup>
    </Box>
  );
}
