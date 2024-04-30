import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main>
      <h2>This page doesn't exist.</h2>
      <p>
        Return to the <Link to={""}>home page</Link>
      </p>
    </main>
  );
};

export default NotFound;
