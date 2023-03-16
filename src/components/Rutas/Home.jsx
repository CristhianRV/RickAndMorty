import style from "../../css/Home.module.css";
import Cards from "../Cards/Cards";

export default function Home({ characters, onClose }) {
  return (
    <div className={style.container}>
      <div className={style.containerCards}>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
}
