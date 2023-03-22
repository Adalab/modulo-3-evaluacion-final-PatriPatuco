function CharCard({ eachChar }) {
  return (
    <li className="chars__item">
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
  );
}

export default CharCard;