function CharDetail(chars){
    return (
      <>
        <img
          className="char-det__img"
          src={
            chars.image
              ? chars.image
              : "https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter"
          }
          alt={chars.name}
        />
        <h3 className="char-det__name">{chars.name}</h3>
        <p className="char-det__text">{chars.aka}</p>
        <p className="char-det__text">{chars.gender}</p>
        <p className="char-det__text">{chars.species}</p>
        <p className="char-det__text">{chars.alive}</p>
      </>
    );
}

export default CharDetail;