import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <Logo width={"100px"} />
      <Link className={styles.Nav__Link} to={""}>
        <h1 className={styles.Nav__Header}>React Mini Challenges</h1>
      </Link>
    </nav>
  );
};

export default Nav;
