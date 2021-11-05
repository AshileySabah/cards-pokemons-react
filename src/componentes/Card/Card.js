import './style.css';

const Card = (props) => {
  return (
    <section className="card">
      <div className="card-caixa-imagem">
        <img src={props.imagem} alt={props.name} className="card-imagem"/>
      </div>
      <div className="card-caixa-especificacoes">
        <p>Nome: <span className="primeira-maiuscula">{props.name}</span></p>
        <p>Tipo: <span className="primeira-maiuscula">{props.tipo}</span></p>
        <p>Altura: {props.height}</p>
        <p>Peso: {props.weight}</p>
      </div>
    </section>
  );
};

export default Card;
