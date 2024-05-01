import { Navigate, useParams } from "react-router-dom";

import challenges from "../assets/challenges.json";
import solutionComponents from "../solutions/SolutionIndex";
import styles from "./Challenge.module.css";

const Challenge = () => {
  const { id } = useParams<{ id?: string }>();
  const challengeId: number = parseInt(id ?? "0", 10);
  const SolutionComponent = solutionComponents[challengeId];

  const challenge = challenges.filter(
    (challenge) => challenge.id === challengeId
  )[0];

  if (!challenge) {
    return <Navigate to={"*"} />;
  }

  return (
    <main className={styles.Challenge__container}>
      <h1 className={styles.Challenge__heading}>CHALLENGE {id}</h1>
      <h2 className={styles.Challenge__title}>{challenge.title}</h2>
      <p className={styles.Challenge__details}>{challenge.details}</p>
      <hr className={styles.Challenge__divider} />
      {SolutionComponent ? <SolutionComponent /> : <p>No solution available</p>}
    </main>
  );
};

export default Challenge;
