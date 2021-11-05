import "./App.css";

import { useState, useEffect } from "react";

import Card from "./componentes/Card/Card.js";
import Header from "./componentes/Header/Header.js";

function App() {
  const [resultRequisicao, setResultRequisicao] = useState([]);
  const [statusJogo, setStatusJogo] = useState("Boa sorte");

  const numeroAleatorio = (min, max) => {
    const numero = Math.floor(Math.random() * (max - min) + min);
    return numero;
  };

  const requisicao = async () => {
    var obj = [];
    for (let i = 1; i <= 3; i++) {
      const numPokemon = numeroAleatorio(1, 3);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${numPokemon}/`
      );
      const data = await response.json();
      obj.push(data);
    }
    setResultRequisicao(obj);
  };

  useEffect(() => {
    if (resultRequisicao.length > 0) {
      var iguais = true;
      for (let i = 0; i < resultRequisicao.length; i++) {
        if (resultRequisicao[0].name !== resultRequisicao[i].name) {
          iguais = false;
        }
      }

      if (iguais) {
        setStatusJogo("Todos iguais!");
      } else {
        setStatusJogo("Tente novamente");
      }
    }
  }, [resultRequisicao]);

  return (
    <div className="App">
      <Header/>
      <h2 className="titulo-jogo">{statusJogo}</h2>
      <ul className="cards-lista">
        {resultRequisicao.map((card, index) => {
          return (
            <li key={index}>
              <Card
                imagem={card.sprites.front_default}
                name={card.name}
                tipo={card.types[0].type.name}
                height={card.height}
                weight={card.weight}
              />
            </li>
          );
        })}
      </ul>
      <button className="botao-jogar" onClick={requisicao}>Vai</button>
    </div>
  );
}

export default App;
