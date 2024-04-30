import challenges from "../assets/challenges.json";

function Root() {
  return (
    <div>
      <h1>React Mini Challenges</h1>
      <ul>
        {challenges &&
          challenges.map((challenge) => {
            return (
              <li key={challenge.id}>
                <h3>{challenge.title}</h3>
                <p>{challenge.details}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Root;
