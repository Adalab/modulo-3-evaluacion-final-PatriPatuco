import CharCard from "./CharCard";
import { Link } from "react-router-dom";

function Characters({chars}){
const printChars = chars.map((eachChar) => {
  return (
    <Link to={`/character/${eachChar.id}`}>
      <CharCard eachChar={eachChar} key={eachChar.id} />
    </Link>
  );
});

    return (
      <section className="character-list">
        <ul className="chars">
          {printChars}
        </ul>
      </section>
    );
}

export default Characters;