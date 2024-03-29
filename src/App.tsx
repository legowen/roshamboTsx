import React from "react";
import { useState,useEffect } from "react";
// Components
import Score from "./components/Score";
import Main from "./components/Main";
import Button from "./components/Button";
// Style
import "./App.css";
// Image
import Rock from "../src/img/rock.png"
import Scissors from "../src/img/scissors.png"
import Paper from "../src/img/paper.png"
// Types
import { Item, ItemValue } from "./types/item";

const item: Item = {
  Rock: {
    name: "Rock",
    src: Rock,
    alt: "Rock Image",
  },

  Scissors: {
    name: "Scissors",
    src: Scissors,
    alt: "Scissors Image",
  },

  Paper: {
    name: "Paper",
    src: Paper,
    alt: "Paper Image",
  },
};

function App() {
  // Select Item
  const [selectItem, setSelectItem] = useState<
    | { userItem: ItemValue; computerItem: ItemValue }
    | { userItem: null; computerItem: null }
  >({
    userItem: null,
    computerItem: null,
  });

  // Result
  const [result, setResult] = useState<
    | { userResult: string; computerResult: string }
    | { userResult: null; computerResult: null }
  >({
    userResult: null,
    computerResult: null,
  });

  // Score
  const [score, setScore] = useState<{
    userScore: number;
    computerScore: number;
  }>(
    !JSON.parse(localStorage.getItem("score") as string)
      ? {
          userScore: 0,
          computerScore: 0,
        }
      : JSON.parse(localStorage.getItem("score") as string)
  );

  // User Item Select 
  const userPlayStart = (userChoice: string) => {
    // user, computer select 
    let userSelect: ItemValue = item[userChoice];
    let computerSelect: ItemValue = item[computerPlayStart()];

    setSelectItem({
      userItem: userSelect,
      computerItem: computerSelect,
    });

    // Judgement Result 
    let userJudgementResult: string = userJudgement(userSelect, computerSelect);
    let computerJudgementResult: string =
      computerJudgement(userJudgementResult);

    setResult({
      userResult: userJudgementResult,
      computerResult: computerJudgementResult,
    });

    // Add Score
    scoreAdd(userJudgementResult, computerJudgementResult);
  };

  // Computer Item Select
  const computerPlayStart = (): string => {
    // item key Array
    let itemKey: string[] = Object.keys(item);

    // Generate a random number between 1 and 2
    let randomNumber: number = Math.floor(Math.random() * itemKey.length);

    return itemKey[randomNumber];
  };

  // user result judgememt
  const userJudgement = (
    userSelect: ItemValue,
    computerSelect: ItemValue
  ): string => {
    let userJudgement = "";

    if (userSelect.name === computerSelect.name) {
      userJudgement = "Tie";
    } else if (userSelect.name === "Rock")
      userJudgement = computerSelect.name === "Scissors" ? "Win" : "Lose";
    else if (userSelect.name === "Scissors")
      userJudgement = computerSelect.name === "Paper" ? "Win" : "Lose";
    else if (userSelect.name === "Paper")
      userJudgement = computerSelect.name === "Rock" ? "Win" : "Lose";

    return userJudgement;
  };

  // Cpmputer result Judgement
  const computerJudgement = (userJudgementResult: string): string => {
    let computerJudgement = "";

    if (userJudgementResult === "Tie") {
      computerJudgement = "Tie";
    } else if (userJudgementResult === "Win") {
      computerJudgement = "Lose";
    } else if (userJudgementResult === "Lose") {
      computerJudgement = "Win";
    }

    return computerJudgement;
  };

  // Add Score
  const scoreAdd = (
    userJudgementResult: string,
    computerJudgementResult: string
  ) => {
    if (userJudgementResult !== "Tie" && userJudgementResult === "Win") {
      setScore({
        ...score,
        userScore: score.userScore + 1,
      });
    } else if (
      computerJudgementResult !== "Tie" &&
      computerJudgementResult === "Win"
    ) {
      setScore({
        ...score,
        computerScore: score.computerScore + 1,
      });
    }
  };

  // Save score to local storage
  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  })
  
  return (
    <div className="App">
      <div className="box">
        <Score score={score} setScore={setScore} />
        <div className="main">
          <Main
            title="User"
            selectItem={selectItem.userItem}
            result={result.userResult}
          />
          <Main
            title="Computer"
            selectItem={selectItem.computerItem}
            result={result.computerResult}
          />
        </div>
        <Button item={item} userPlayStart={userPlayStart} />
      </div>
    </div>
  );
}

export default App;