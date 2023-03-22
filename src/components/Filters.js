import CharFilter from "./CharFilter";
import HouseFilter from "./HouseFilter";

function Filters({ handleHouseFiltered }) {
  return (
    <fieldset className="form">
      <CharFilter />
      <HouseFilter handleHouseFiltered={handleHouseFiltered} />
    </fieldset>
  );
}

export default Filters;