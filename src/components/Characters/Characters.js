import CharCard from "./CharCard";


function Characters({chars}){
const printChars = chars.map((eachChar) => {
  return <CharCard key={eachChar.id} eachChar={eachChar}/>;
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