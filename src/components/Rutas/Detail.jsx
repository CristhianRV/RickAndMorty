import { useState, useEffect } from "react";
import style from "../../css/Detail.module.css";
import { Link } from "react-router-dom";

const Detail = ({ id }) => {
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setPersonaje(data));
  }, [id]);

  return (
    <div className={style.container}>
      <div className={style.containerDetail}>
        <Link to="/home">
          <button>x</button>
        </Link>
        <img src={personaje?.image} alt={personaje.name} />
        <div>
          <h1>{personaje.name}</h1>
          <hr></hr>
          <h3>{`Specie: ${personaje.species}`}</h3>
          <h3>{`Statu: ${personaje.status}`}</h3>
          <h3>{`Origin: ${personaje?.origin?.name}`}</h3>
          <h3>{`Location: ${personaje?.location?.name}`}</h3>
        </div>
      </div>
    </div>
  );
};

export default Detail;
