import React, { useState } from "react";
import { Router } from "@reach/router";
import ThemeContext from "./ThemeContext";
import Navbar from "./Navbar";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { render } from "react-dom";

const App = () => {
  const themeHook = useState("darkblue");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <Navbar />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
