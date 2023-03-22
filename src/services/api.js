function api() {
    return fetch("https://hp-api.onrender.com/api/characters/house/gryffindor")
        .then((response)=> response.json())
        .then((data)=> {
            const dataChar = data.map((eachChar) => {
                return {
                id: eachChar.id,
                name: eachChar.name,
                species: eachChar.species,
                house: eachChar.house,
                alive: eachChar.alive
                };
            });
            return dataChar;
        });
}

export default api;