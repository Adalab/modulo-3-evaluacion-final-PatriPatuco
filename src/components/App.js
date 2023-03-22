/* SECCIÓN DE IMPORT */
import '../styles/App.scss';
import api from "../services/api"
import { useEffect, useState } from 'react';
// - Imágenes

function App() {
  const [chars, setChars] = useState ([])

  /* VARIABLES ESTADO (DATOS) */
  useEffect(() => {
    api().then((dataChar) => {
            setChars(dataChar)
    });
  }, []);
  /* EFECTOS (día 5) */

  /* FUNCIONES HANDLER */

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */

  /* HTML */
  return <div className="App">

  </div>;
}

/* PROP-TYPES */
export default App;
