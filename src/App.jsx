//IMPORTACION DE APIs
import { useState } from "react";

// COMPONENTES Y MODULOS CSS
import "./App.css";
import Nav from "./components/NavBar/Nav.jsx";
import styles from "./css/App.module.css";
import { Route, Routes } from "react-router-dom";
import { Home, About, Detail } from "./components/Rutas";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (ref) => {
    let salida = false;
    const id = ref;
    characters.forEach((personaje) => {
      if (parseInt(id) === personaje.id) salida = true;
    });

    if (salida === true) {
      salida = false;
      return;
    }
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (ident) => {
    const personajes = characters.filter((personaje) => personaje.id !== ident);
    setCharacters(personajes);
  };

  return (
    <div className="App" style={{ padding: "0px" }}>
      <div className={styles.fondo}>
        <div>
          <Nav onSearch={onSearch} />
        </div>
        <img
          className={styles.image}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
          alt="logo"
        />

        <div>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home characters={characters} onClose={onClose} />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/detail:detailId"
              render={({ match }) => (
                <Detail detailID={match.params.detailId} />
              )}
              element="Detail"
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
