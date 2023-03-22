function CharFilter({ handleCharFiltered, charFiltered }) {

  const handleCharacter = (ev) => {
    const characterName = ev.target.value;
    handleCharFiltered(characterName);
  };

    const handleSubmit = (ev) => {
      ev.preventDefault();
    };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="character" className="form__char">
        Search character
        <input
          className="form__char--input"
          type="text"
          name="character"
          id="character"
          onInput={handleCharacter}
          value={charFiltered}
          placeholder="Ex: Hermione"
        />
      </label>
    </form>
  );
}

export default CharFilter;