function GenderFilter({ handleGenderFilter, genderFiltered }) {
  const handleOnChange = (ev) => {
    const selectedGender = ev.target.value;
    handleGenderFilter(selectedGender);
  };

  return (
    <>
      <label htmlFor="gender" className="form__gender">
        Gender:
        <select
          className="form__gender--list"
          name="gender"
          id="gender"
          onChange={handleOnChange}
          value={genderFiltered}
        >
          <option value="all">All</option>
          <option value="female">Woman </option>
          <option value="male">Man </option>
        </select>
      </label>
    </>
  );
}
export default GenderFilter;
