import './style.css';
import pokebola from '../../assets/img/pokebola.png';

const Header = () => {
    return ( 
        <header className="menu-principal">
            <nav className="container-menu">
                <div className="caixa-logo">
                    <img src={pokebola} alt="Logo de Pokebola" className="img-logo"/>
                    <h1 className="titulo-logo"><a href="home.html">ThePokeWorld</a></h1>
                </div>
                <ul className="lista-navegacao-principal visibilidade-padrao">
                    <li className="item-navegacao-principal"><a href="conhecer.html" className="link-navegacao-principal link-conhecer">Conheça as personagens</a></li>
                    <li className="item-navegacao-principal"><a href="jogar.html" className="link-navegacao-principal link-sorteio">Jogo de Sorteio</a></li>
                </ul>
                <button className="botao-menu"><i className="fas fa-bars"></i></button>
            </nav>
        </header>
     );
}

export default Header;