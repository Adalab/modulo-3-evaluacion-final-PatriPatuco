import { Link } from "react-router-dom";
import grifCrest from "../images/gryffindor.png";
import slyCrest from "../images/slytherin.png";
import huffCrest from "../images/hufflepuff.png";
import ravCrest from "../images/ravenclaw.png";
import nophoto from "../images/unknow.png";

function CharDetail({ characterFind }) {

  const housesCrest = {
    Gryffindor: grifCrest,
    Slytherin: slyCrest,
    Hufflepuff: huffCrest,
    Ravenclaw: ravCrest,
  } 

  return characterFind ? (<section className="char-container">
    <section className="char-det">
      <img
        className="char-det__crest"
        alt={characterFind.house}
        src={housesCrest[characterFind.house]}
      />

      <img
        className="char-det__img"
        src={
          characterFind.image
            ? characterFind.image
            : nophoto
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
    </section>
  ) : (
    <p className="char-not-found">Character not found</p>
  );
}

export default CharDetail;
