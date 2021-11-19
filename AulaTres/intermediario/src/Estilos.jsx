import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let estilo = {
  marginTop: "20px",
  background: "tomato",
  color: "#fff"
};

let botao = <button style={estilo}>Clique aqui</button>;

ReactDOM.render(botao, document.getElementById("root"));
