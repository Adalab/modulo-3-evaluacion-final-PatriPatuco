import { Link } from "react-router-dom";

function CharCard({ eachChar }) {
  return (
    <Link to={`/character/${eachChar.id}`}>
      <li className="chars__list--item">
        <img
          className="chars__list--img"
          src={
            eachChar.image
              ? eachChar.image
              : "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
          }
          alt={eachChar.name}
        />
        <h3 className="chars__list--name">{eachChar.name}</h3>
        <p className="chars__list--text">{eachChar.species}</p>
      </li>
    </Link>
  );
}

export default CharCard;
