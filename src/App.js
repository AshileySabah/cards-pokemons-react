import './App.css';

import { useState, useEffect } from 'react';


function App() {
  const [resultRequisicao, setResultRequisicao] = useState([]);

  const requisicao = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
    const data = await response.json();
    return setResultRequisicao(data);
  }

  useEffect(() => {
    console.log(resultRequisicao)
    
  }, [resultRequisicao]);

  return (
    <div className="App">
      <ul>
        <li></li>
      </ul>
      <button onClick={requisicao}>Buscar</button>
    </div>
  );
}

export default App;
