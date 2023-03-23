import style from "./Modal.module.css";
// import { Link } from "react-router-dom";

const Modal = ({ setModal, message }) => {
  return (
    <div className={style.container}>
      <div className={style.border}>
        <div className={style.modal}>
          <h1>{message}</h1>
          <button name="off" onClick={() => setModal(false)}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
