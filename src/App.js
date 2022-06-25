import { Route } from "wouter";
import Header from "./components/Header";
import Home from "./pages/Home/Home.js";
import { FilmsProvider } from "./contexts/FilmContext";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import SearchPage from "./pages/SearchPage/SearchPage";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <div className="App">
      <FilmsProvider>
        <ChakraProvider>
          <Header></Header>
          <Route path="/" component={Home} />
          <Route path="/search/:keyword/:rating?" component={SearchPage} />
          <Route path="/detail/:filmId" component={Detail} />
        </ChakraProvider>
      </FilmsProvider>
    </div>
  );
}

export default App;
