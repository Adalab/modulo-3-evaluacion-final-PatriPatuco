import { Link } from "react-router-dom";

function CharCard({ eachChar }) {
  return (
    <Link to={`/character/${eachChar.id}`}>
      <li key={eachChar.id} className="chars__item">
        <img
          className="chars__img"
          src={
            eachChar.image
              ? eachChar.image
              : "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
          }
          alt={eachChar.name}
        />
        <h3 className="chars__name">{eachChar.name}</h3>
        <p className="chars__text">{eachChar.species}</p>
      </li>
    </Link>
  );
}

export default CharCard;
