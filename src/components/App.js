import '../styles/App.scss';
import Header from './Header';
import Filters from './Filters';
import Characters from "./Characters";
import CharDetail from './CharDetail';
import api from "../services/api"
import { useEffect, useState } from 'react';



function App() {
  const [chars, setChars] = useState ([]);
  const [houseFiltered, setHouseFiltered] = useState("Gryffindor")
  const [charFiltered, setCharFiltered] = useState("");

  const handleHouseFiltered = (value) => {
    setHouseFiltered(value);
  }

  const handleCharFiltered = (value) => {
    setCharFiltered(value);
  }

  // Filter the character list if the user search for a name
  const getCharFiltered = () => {
    return chars.filter((eachChar) =>
      eachChar.name.toLocaleLowerCase().includes(charFiltered.toLocaleLowerCase())
    );
  }

// Show the house acording to the value of the select input
useEffect(() => {
  api(houseFiltered).then((dataChar) => {
    setChars(dataChar);
  });
}, [houseFiltered]);

  return (
    <div className="App">
      <Header />
      <Filters
        handleHouseFiltered={handleHouseFiltered}
        handleCharFiltered={handleCharFiltered}
        charFiltered={charFiltered}
        houseFiltered={houseFiltered}
      />
      <Characters chars={getCharFiltered()} />
    </div>
  );
}

/* PROP-TYPES */
export default App;
