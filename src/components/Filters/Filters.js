import CharFilter from "./CharFilter";
import HouseFilter from "./HouseFilter";

function Filters({
  handleHouseFiltered,
  handleCharFiltered,
  charFiltered,
  errorMsg,
}) {
  return (
    <fieldset className="form">
      <CharFilter
        handleCharFiltered={handleCharFiltered}
        charFiltered={charFiltered}
      />
      <HouseFilter handleHouseFiltered={handleHouseFiltered} />
      
      {errorMsg ? (
        <p className="form__errorMsg">
          There is no character matching with {charFiltered}
        </p>
      ) : null}
    </fieldset>
  );
}

export default Filters;
