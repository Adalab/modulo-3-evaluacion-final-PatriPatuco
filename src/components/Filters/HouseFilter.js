function HouseFilter({ handleHouseFiltered, houseFiltered }) {
  
  const handleOnChange = (ev) => {
    const selectedHouse = ev.target.value;
    handleHouseFiltered(selectedHouse);
  };

  return (
    <>
      <label htmlFor="house" className="form__house">
        House selector
        <select className="form__house--list"
          name="house"
          id="house"
          onChange={handleOnChange}
          value={houseFiltered}
        >
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Hufflepuff">Hufflepuff</option>
        </select>
      </label>
    </>
  );
}

export default HouseFilter;