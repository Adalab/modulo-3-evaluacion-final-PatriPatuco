function CharFilter({ handleCharFiltered, charFiltered }) {
  const handleCharacter = (ev) => {
    const characterName = ev.target.value;
    handleCharFiltered(characterName);
  };

  return (
    <label htmlFor="character" className="form__house">
      Search character
      <input
        type="text"
        name="character"
        id="character"
        onInput={handleCharacter}
        value={charFiltered}
        placeholder="Ex: Hermione"
      />
    </label>
  );
}

export default CharFilter;