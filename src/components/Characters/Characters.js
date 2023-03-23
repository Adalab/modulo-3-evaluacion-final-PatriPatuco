import CharCard from "./CharCard";


function Characters({chars, gender}){
  
const filteredChars = gender === "all" ? chars : gender;
const printChars = filteredChars.map((eachChar) => {
  return <CharCard key={eachChar.id} eachChar={eachChar} />;
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