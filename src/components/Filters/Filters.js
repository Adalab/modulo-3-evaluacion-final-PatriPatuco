import CharFilter from "./CharFilter";
import HouseFilter from "./HouseFilter";

function Filters({ handleHouseFiltered, handleCharFiltered, charFiltered }) {
  return (
    <form className="form">
      <CharFilter
        handleCharFiltered={handleCharFiltered} charFiltered = {charFiltered}
      />
      <HouseFilter handleHouseFiltered={handleHouseFiltered} />
    </form>
  );
}

export default Filters;