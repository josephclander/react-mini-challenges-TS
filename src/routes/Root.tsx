import { Link } from "react-router-dom";
import challenges from "../assets/challenges.json";
import styles from "./Root.module.css";

function Root() {
  return (
    <div className={styles.Root__container}>
      <p className={styles.Root__blurb}>
        Here are a bank of mini React challenges. Each aimed to be completed in
        less than 30 minutes.
      </p>
      <ul className={styles.Root__list}>
        {challenges &&
          challenges.map((challenge) => {
            return (
              <li className={styles.Root__listItem} key={challenge.id}>
                <Link to={`/challenge/${challenge.id}`}>
                  <h3>{challenge.title}</h3>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Root;
