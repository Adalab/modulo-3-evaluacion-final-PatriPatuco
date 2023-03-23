import '../styles/App.scss';
import Header from './Header';
import Filters from './Filters/Filters';
import Characters from "./Characters/Characters";
import CharDetail from './CharDetail';
import NotFoundPage from './NotFoundPage';
import api from "../services/api"
import ls from "../services/localstorage"
import { useEffect, useState } from 'react';
import { Routes, Route, matchPath, useLocation } from "react-router-dom";



function App() {
  const [chars, setChars] = useState([]);
  const [houseFiltered, setHouseFiltered] = useState("Gryffindor");
  const [charFiltered, setCharFiltered] = useState("");
  const [localInput, setLocalInput] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);

  const handleHouseFiltered = (value) => {
    setHouseFiltered(value);
  };

  const handleCharFiltered = (value) => {
    setCharFiltered(value);
  };

  // Filter the character list if the user search for a name
  const getCharFiltered = () => {
    return chars.filter((eachChar) =>
      eachChar.name.toLowerCase().includes(charFiltered.toLowerCase())
    );
  };

  // Set error message if the filtered character list is empty (doesn't match with the names on chars list)
  useEffect(() => {
    const filteredChars = getCharFiltered();
    if (filteredChars.length === 0) {
      setErrorMsg(true);
    } else {
      setLocalInput(filteredChars);
      setErrorMsg(false);
    }
  }, [charFiltered, chars]);

  // Show the house according to the value of the selected input
  useEffect(() => {
    api(houseFiltered).then((dataChar) => {
      setChars(dataChar);
    });
  }, [houseFiltered]);

  // Send character information to the character detail page
  const { pathname } = useLocation();
  const dataUrl = matchPath("/character/:id", pathname);
  const characterId = dataUrl !== null ? dataUrl.params.id : null;
  const characterFind = getCharFiltered().find(
    (eachChar) => eachChar.id === characterId
  );

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleHouseFiltered={handleHouseFiltered}
                  handleCharFiltered={handleCharFiltered}
                  charFiltered={charFiltered}
                  houseFiltered={houseFiltered}
                  errorMsg={errorMsg}
                />
                <Characters chars={getCharFiltered()} />
              </>
            }
          ></Route>
          <Route
            path="/character/:id"
            element={<CharDetail characterFind={characterFind} />}
          ></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

/* PROP-TYPES */
export default App;
