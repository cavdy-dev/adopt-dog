import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () =>
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, { name: "Mas", animal: "Dog", breed: "German" }),
    React.createElement(Pet, { name: "Fin", animal: "Dog", breed: "German" }),
    React.createElement(Pet, { name: "Zoe", animal: "Dog", breed: "German" })
  ]);

render(React.createElement(App), document.getElementById("root"));
