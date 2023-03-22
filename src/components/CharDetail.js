import { Link } from "react-router-dom";

function CharDetail({ characterFind }) {
  return (
    <div>
      <Link to="/">
        <button>Volver atrás</button>
      </Link>
      <img
        className="char-det__img"
        src={
          characterFind.image
            ? characterFind.image
            : "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
        }
        alt={characterFind.name}
      />
      <h3 className="char-det__name">{characterFind.name}</h3>
      <p className="char-det__text">{characterFind.aka}</p>
      <p className="char-det__text">House of {characterFind.house}</p>
      <p className="char-det__text">{characterFind.gender}</p>
      <p className="char-det__text">Specie: {characterFind.species}</p>
      <p className="char-det__text">
       Status: {characterFind.alive === true ? "❤️" : "💀"}
      </p>
    </div>
  );
}

export default CharDetail;
