import CharFilter from "./CharFilter";
import HouseFilter from "./HouseFilter";

function Filters({ handleHouseFiltered, handleCharFiltered, charFiltered }) {
  return (
    <fieldset className="form">
      <CharFilter
        handleCharFiltered={handleCharFiltered} charFiltered = {charFiltered}
      />
      <HouseFilter handleHouseFiltered={handleHouseFiltered} />
    </fieldset>
  );
}

export default Filters;