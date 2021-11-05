import './style.css';

const Card = (props) => {
  return (
    <section className="card">
      <div>
        <img src={props.imagem} alt={props.name} />
      </div>
      <div>
        <p>{props.name}</p>
        <p>{props.tipo}</p>
        <p>{props.height}</p>
        <p>{props.weight}</p>
      </div>
    </section>
  );
};

export default Card;
