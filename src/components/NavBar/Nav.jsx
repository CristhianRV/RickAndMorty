import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";

function Nav(props) {
  return (
    <div className={styles.container}>
      <div className={styles.containerRutas}>
        <Link to="/">
          <span className={styles.link}>Home</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
      </div>

      <div>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  );
}

export default Nav;
