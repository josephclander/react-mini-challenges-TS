import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Nav from "./Nav";

function Layout() {
  return (
    <div className={styles.Layout}>
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
