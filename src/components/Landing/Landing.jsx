import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = ({ handlerUser, user }) => {
  return (
    <div className={style.container}>
      <div className={style.loggin}>
        <label></label>
        <span>DISFRUTA Y CONOCE NUESTRA PAGINA</span>
        <input
          type="text"
          placeholder="Ingresa tu Nombre"
          autoComplete="off"
          value={user}
          onChange={handlerUser}
        />
        <Link to="/home">
          <button>Ingresar</button>
        </Link>
      </div>
    </div>
  );
};
export default Landing;
