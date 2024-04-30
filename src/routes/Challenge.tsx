import { Navigate, useParams } from "react-router-dom";

import challenges from "../assets/challenges.json";
import solutionComponents from "../solutions/SolutionIndex";

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
    <main>
      <h1>CHALLENGE {id}</h1>
      <h2>{challenge.title}</h2>
      <p>{challenge.details}</p>
      <hr />
      {SolutionComponent ? <SolutionComponent /> : <p>No solution available</p>}
    </main>
  );
};

export default Challenge;
