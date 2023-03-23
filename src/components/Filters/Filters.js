import CharFilter from "./CharFilter";
import HouseFilter from "./HouseFilter";
import GenderFilter from "./GenderFilter";

function Filters({
  handleHouseFiltered,
  handleCharFiltered,
  handleGenderFilter,
  charFiltered,
  houseFiltered,
  genderFiltered,
  errorMsg,
  handleReset,
}) {

  const handleResetClick = (ev) => {
  handleReset();
  }

  return (
    <>
      <fieldset className="form">
        <CharFilter
          handleCharFiltered={handleCharFiltered}
          charFiltered={charFiltered}
        />
        <HouseFilter
          handleHouseFiltered={handleHouseFiltered}
          houseFiltered={houseFiltered}
        />

        <GenderFilter
          handleGenderFilter={handleGenderFilter}
          genderFiltered={genderFiltered}
        />
      </fieldset>
      <button onClick={handleResetClick}>Reset</button>
      {errorMsg ? (
        <p className="errorMsg">
          There is no character matching with {charFiltered}
        </p>
      ) : null}
    </>
  );
}

export default Filters;
