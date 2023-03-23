import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = ({ handlerUser, user, setModal, setMessage }) => {
  const validate = () => {
    setMessage("No tienes un nombre ingresado");
    setModal(true);
  };

  return (
    <div className={style.container}>
      <div className={style.loggin}>
        <label>
          <span>DISFRUTA Y CONOCE NUESTRA PAGINA</span>
        </label>
        <input
          type="text"
          placeholder="Ingresa tu Nombre"
          autoComplete="off"
          value={user}
          onChange={handlerUser}
          maxLength="30"
        />
        <Link to={user ? "/home" : ""}>
          <button onClick={() => !user && validate()}>Ingresar</button>
        </Link>
      </div>
    </div>
  );
};
export default Landing;
