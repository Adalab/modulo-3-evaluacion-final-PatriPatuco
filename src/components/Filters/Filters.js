import CharFilter from "./CharFilter";
import HouseFilter from "./HouseFilter";
import GenderFilter from "./GenderFilter";

function Filters({
  handleHouseFiltered,
  handleCharFiltered,
  handleGenderFilter,
  charFiltered,
  errorMsg,
}) {
  return (
    <>
      <fieldset className="form">
        <CharFilter
          handleCharFiltered={handleCharFiltered}
          charFiltered={charFiltered}
        />
        <HouseFilter handleHouseFiltered={handleHouseFiltered} />

        <GenderFilter handleGenderFilter={handleGenderFilter} />
      </fieldset>
      {errorMsg ? (
        <p className="form__errorMsg">
          There is no character matching with {charFiltered}
        </p>
      ) : null}
    </>
  );
}

export default Filters;
