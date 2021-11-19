import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const pessoa = {nome: "Deborah", sobrenome: "Ferreira"};

let nome = pessoa.nome;
nome = pessoa["sobrenome"];
console.log(pessoa.nome);

ReactDOM.render(pessoa, document.getElementById("root"));

