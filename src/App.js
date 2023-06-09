//IMPORTACION DE APIs
import { useState } from "react";

// COMPONENTES Y MODULOS CSS
import "./App.css";
import Nav from "./components/NavBar/Nav.jsx";
import styles from "./css/App.module.css";
import { Route, useLocation } from "react-router-dom";
import { Home, Detail, About } from "./components/Rutas";
import Landing from "./components/Landing/Landing";
import Modal from "./components/Modal/Modal";

function App() {
  const [state, setState] = useState(false);
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [user, setUser] = useState("");

  const onSearch = (name) => {
    setState(true);
    fetch(`https://rickandmortyapi.com/api/character?name=${name}`)
      .then((response) => response.json())
      .then((data) => data.results)
      .then((data) => {
        if (characters.length === 0) {
          setCharacters([data.at(0)]);
          setState(false);
        }
        if (characters.length >= 1) {
          const newArray = characters.map((element) => element.id);

          for (const personaje of data) {
            if (!newArray.includes(personaje.id)) {
              setCharacters([...characters, personaje]);
              setState(false);
              return;
            }
          }
        }
      })
      .catch(() => {
        setState(false);
        setMessage("No hay personajes con ese nombre");
        setModal(true);
      });
  };

  const handlerUser = (event) => {
    setUser(event.target.value);
  };
  const clouseUser = () => {
    setUser("");
    setCharacters([]);
  };

  const onClose = (ident) => {
    const personajes = characters.filter((personaje) => personaje.id !== ident);
    setCharacters(personajes);
  };

  const location = useLocation();

  return (
    <div className="App" style={{ padding: "0px" }}>
      <div className={styles.fondo}>
        <div>
          {location.pathname !== "/" && <Nav onSearch={onSearch} user={user} />}
        </div>
        <div className={styles.logo}>
          <img
            className={styles.image}
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
            alt="logo"
          />
        </div>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <Landing
                handlerUser={handlerUser}
                user={user}
                setModal={setModal}
                setMessage={setMessage}
              />
            )}
          />
          {location.pathname !== "/about" && (
            <Route
              path="/home"
              render={() => (
                <Home
                  characters={characters}
                  onClose={onClose}
                  state={state}
                  clouseUser={clouseUser}
                  setModal={setModal}
                />
              )}
            />
          )}
          <Route path="/about" component={About} />
          <Route
            path="/home/detail/:id"
            render={({ match }) => <Detail id={match.params.id} />}
          />
          {modal && (
            <Route
              path="/*"
              render={() => <Modal setModal={setModal} message={message} />}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
