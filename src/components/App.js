import '../styles/App.scss';
import Header from './Header';
import Filters from './Filters';
import Characters from "./Characters";
import CharDetail from './CharDetail';
import api from "../services/api"
import { useEffect, useState } from 'react';



function App() {
  const [chars, setChars] = useState ([]);
  const [houseFiltered, setHouseFiltered] = useState("Gryffindor");

  const handleHouseFiltered = (value) => {
    setHouseFiltered(value);
  }

useEffect(() => {
  api(houseFiltered).then((dataChar) => {
    setChars(dataChar);
  });
}, [houseFiltered]);

  return (
    <div className="App">
      <Header />
      <Filters handleHouseFiltered={handleHouseFiltered} />
      <Characters chars={chars} />
    </div>
  );
}

/* PROP-TYPES */
export default App;
