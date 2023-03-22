import CharFilter from "./CharFilter";
import HouseFilter from "./HouseFilter";

function Form() {
    return (
        <fieldset className="form">
            <CharFilter />
            <HouseFilter />
        </fieldset>
    )
}

export default Form;