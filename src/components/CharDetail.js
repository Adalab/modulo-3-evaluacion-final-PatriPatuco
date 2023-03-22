function CharDetail({ characterFind }) {
  return (
    <div>
      asdfasdfads
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
      <p className="char-det__text">{characterFind.gender}</p>
      <p className="char-det__text">{characterFind.species}</p>
      <p className="char-det__text">{characterFind.alive === true ? "❤️" : "💀"}</p>
    </div>
  );
}

export default CharDetail;
