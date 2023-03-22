import '../styles/App.scss';
import Header from './Header';
import Form from './Form';
import CharDetail from './CharDetail';
import api from "../services/api"
import { useEffect, useState } from 'react';


function App() {
  const [chars, setChars] = useState ([])

  useEffect(() => {
    api().then((dataChar) => {
            setChars(dataChar)
    });
  }, []);

  return <div className="App">
    <Header />
    <Form />
    
  </div>;
}

/* PROP-TYPES */
export default App;
