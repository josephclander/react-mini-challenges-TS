import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Link to={""}>
        <h1>React Mini Challenges</h1>
      </Link>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
