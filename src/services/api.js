function api(house) {
  return fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
    .then((response) => response.json())
    .then((data) => {
      const dataChar = data.map((eachChar) => {
        return {
          id: eachChar.id,
          name: eachChar.name,
          aka: eachChar.alternate_names,
          gender: eachChar.gender,
          species: eachChar.species,
          house: eachChar.house,
          alive: eachChar.alive,
          image: eachChar.image,

        };
      });
      return dataChar;
    });
}

export default api;
