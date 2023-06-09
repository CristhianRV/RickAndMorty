import style from "../../css/Home.module.css";
import Cards from "../Cards/Cards";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

export default function Home({ characters, onClose, state, clouseUser }) {
  return (
    <div className={style.container}>
      <Link to="/">
        <button className={style.salir} onClick={clouseUser}></button>
      </Link>
      <div className={style.containerCards}>
        <Cards characters={characters} onClose={onClose} />
      </div>
      {state && <Loading />}
    </div>
  );
}
