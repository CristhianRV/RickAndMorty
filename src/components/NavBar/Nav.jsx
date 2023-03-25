import { Link } from "react-router-dom";
import "./Nav.css";
import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";

function Nav(props) {
  return (
    <div className={styles.container}>
      <h1>{`Hi ${props.user}`}</h1>
      <nav className={styles.navegacion}>
        {/* <div className={styles.menu}>
          <label>
            <input id="check" type="checkbox" />
          </label>
        </div> */}
        <label htmlFor="check"></label>
        <input id="check" type="checkbox" />
        <ul className={styles.containerRutas}>
          <li className={styles.containerSearchBar}>
            <SearchBar onSearch={props.onSearch} />
          </li>
          <Link to="/home">
            <li>
              <span className={styles.link}>Home</span>
            </li>{" "}
          </Link>
          <Link to="/about">
            <li>
              <span>About</span>
            </li>
          </Link>
        </ul>
        {/* <div className={styles.containerRutas}>
          <Link to="/home">
            <span className={styles.link}>Home</span>
          </Link>
          <Link to="/about">
            <span>About</span>
          </Link>
        </div>

        <div className={styles.containerSearchBar}>
          <SearchBar onSearch={props.onSearch} />
        </div> */}
      </nav>
    </div>
  );
}

export default Nav;
