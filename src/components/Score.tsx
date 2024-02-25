import React from "react";

interface Props {
  score: { userScore: number; computerScore: number };
  setScore: React.Dispatch<
    React.SetStateAction<{ userScore: number; computerScore: number }>
  >;
}

const Score = (props: Props) => {
  // Reset Score
  const resetScore = () => {
    props.setScore({ userScore: 0, computerScore: 0 });
  };

  return (
    <div className="scoreBox">
      <ul className="score">
        <li>{props.score.userScore}</li>
        <li>:</li>
        <li>{props.score.computerScore}</li>
      </ul>
      <button className="resetButton" onClick={resetScore}>
        Reset
      </button>
    </div>
  );
};

export default Score;