import { Link } from "react-router-dom";

function CharDetail({ characterFind }) {
  return (
      <section className="char-det">
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
        <section className="char-det__info">
          <p className="char-det__text char-det__text--aka">
            {characterFind.aka[0]} / {characterFind.aka[1]}
          </p>
          <p className="char-det__text char-det__text--house">
            House of {characterFind.house}
          </p>
          <p className="char-det__text char-det__text--gender">
            Gender: {characterFind.gender}
          </p>
          <p className="char-det__text char-det__text--species">
            Specie: {characterFind.species}
          </p>
          <p className="char-det__text char-det__text--status">
            Status: {characterFind.alive === true ? "❤️" : "💀"}
          </p>
          <Link to="/">
            <button className="char-det__btn">Volver atrás</button>
          </Link>
        </section>
      </section>
  );
}

export default CharDetail;
