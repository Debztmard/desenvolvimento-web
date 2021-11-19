import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function manipulador() {
  alert("clicou");
}

let botao = <button onClick={manipulador}>Clique aqui</button>;

ReactDOM.render(botao, document.getElementById("root"));
