import React, { useState } from "react";

export const FilmsContext = React.createContext();

export const FilmsProvider = ({ children }) => {
  const [films, setFilms] = useState([]);

  return (
    <FilmsContext.Provider value={{ films, setFilms }}>
      {children}
    </FilmsContext.Provider>
  );
};
