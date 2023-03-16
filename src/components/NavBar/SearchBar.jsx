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
          type="number"
          value={personaje}
          placeholder="Ingresa un numero entre 1 - 826"
          onChange={cambioEstado}
          min="0"
        />
        <button className={styles.button} onClick={buttonHandler}>
          🔍
        </button>
      </div>
    </div>
  );
}
