import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const finalizar = () => {
    props.onClose(props.ident);
  };

  return (
    <div className={styles.carta}>
      <button className={styles.boton} onClick={finalizar}>
        X
      </button>
      <div className={styles.contenedor}>
        <Link to={`/home/detail/${props.ident}`}>
          <img
            className={styles.image}
            src={props.image}
            alt={`imagen de ${props.name}`}
          />
        </Link>

        <h2 className={styles.name}>{props.name}</h2>
      </div>

      <div className={styles.descripsion}>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>
    </div>
  );
};

export default Card;
