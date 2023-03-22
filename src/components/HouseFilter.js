function HouseFilter({ handleHouseFiltered }) {

  const handleOnChange = (ev) => {
    const selectedHouse = ev.target.value;
    handleHouseFiltered(selectedHouse);
  }

  return (
    <>
      <label htmlFor="house" className="form__house">
        House selector
        <select name="house" id="house" onChange={handleOnChange}>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Huffelpuff">Huffelpuff</option>
        </select>
      </label>
    </>
  );
}

export default HouseFilter;