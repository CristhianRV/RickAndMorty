import styles from "./Nav.module.css";
import { useState } from "react";

export default function SearchBar(props) {
  const [personaje, setPersonaje] = useState("");

  const buttonHandler = () => {
    props.onSearch(personaje);
    setPersonaje("");
  };

  const cambioEstado = (evento) => {
    setPersonaje(evento.target.value);
  };

  return (
    <div className={styles.containerSearch}>
      <div className={styles.searchBar}>
        <input
          className={styles.inputSearchBar}
          type="text"
          value={personaje}
          placeholder="Ingresa un personaje"
          onChange={cambioEstado}
        />
        <button className={styles.button} onClick={buttonHandler}>
          🔍
        </button>
      </div>
    </div>
  );
}
