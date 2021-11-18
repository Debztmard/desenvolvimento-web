import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const musicas = ["Recairei", "Esquema Preferido", "Amor da Despedida", "Zero Saudade", "Unha de Gel"];
const listMusica = musicas.map((musica) => <li>{musica}</li>);

ReactDOM.render(
  <ul>{listMusica}</ul>,
  document.getElementById('root')
)
