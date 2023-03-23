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
    <section className="filter">
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

      {errorMsg ? (
        <p className="filter__errorMsg">
          There is no character matching with {charFiltered}
        </p>
      ) : null}
      <button className="filter__reset" onClick={handleResetClick}>
        Reset
      </button>
    </section>
  );
}

export default Filters;
