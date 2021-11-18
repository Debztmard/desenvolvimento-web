import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

let hoje = new Date();
const diaSemana = ["Domingo","Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let dia = hoje.getDay();
const texto = (`Hoje é ${diaSemana[dia]} sim!`);

ReactDOM.render(texto, document.getElementById("root"));
