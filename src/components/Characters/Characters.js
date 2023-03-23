import CharCard from "./CharCard";


function Characters({chars}){
const printChars = chars.map((eachChar) => {
  return <CharCard key={eachChar.id} eachChar={eachChar}/>;
});

    return (
      <section className="chars">
        <ul className="chars__list">
          {printChars}
        </ul>
      </section>
    );
}

export default Characters;