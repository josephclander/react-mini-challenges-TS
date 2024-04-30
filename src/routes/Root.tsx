import { Link } from "react-router-dom";
import challenges from "../assets/challenges.json";

function Root() {
  return (
    <div>
      <ol>
        {challenges &&
          challenges.map((challenge) => {
            return (
              <li key={challenge.id}>
                <Link to={`/challenge/${challenge.id}`}>
                  <h3>{challenge.title}</h3>
                </Link>
              </li>
            );
          })}
      </ol>
    </div>
  );
}

export default Root;
