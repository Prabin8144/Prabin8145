import React, { useState } from "react";
import Square from "./Square";
import EndGame from "./EndGame";

const TICTACTOE = "";
const X_PLAYER = "X";
const O_PLAYER = "O";
const wonthewinner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function TicTacToe() {
  const [grid, setGrid] = useState(Array(9).fill(TICTACTOE));
  const [player, setPlayer] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [draw, setDraw] = useState(false);
  const [winCount, setwinCount] = useState({ X: 0, O: 0 });

  function isGameOver() {
    if (!gameFinished) {
      for (let i = 0; i < 8; i++) {
        if (
          grid[wonthewinner[i][0]] === X_PLAYER &&
          grid[wonthewinner[i][1]] === X_PLAYER &&
          grid[wonthewinner[i][2]] === X_PLAYER
        ) {
          setGameFinished(true);
          setwinCount({ ...winCount, X: winCount.X + 1 });
          console.log("X WON");
          return;
        }
      }

      for (let i = 0; i < 8; i++) {
        if (
          grid[wonthewinner[i][0]] === O_PLAYER &&
          grid[wonthewinner[i][1]] === O_PLAYER &&
          grid[wonthewinner[i][2]] === O_PLAYER
        ) {
          setGameFinished(true);
          setwinCount({ ...winCount, O: winCount.O + 1 });
          console.log("O WON");
          return;
        }
      }

      //* Draw game check
      if (!grid.includes(TICTACTOE)) {
        setDraw(true);
        setGameFinished(true);
        console.log("DRAW");
      }
    }
  }

  function restartGame() {
    setGrid(Array(9).fill(TICTACTOE));
    setGameFinished(false);
    setDraw(false);
  }

  function clearHistory() {
    setwinCount({ X: 0, O: 0 });
    restartGame();
  }

  isGameOver();

  function handleClick(id) {
    setGrid(
      grid.map((item, index) => {
        if (index === id) {
          if (player) {
            return X_PLAYER;
          } else {
            return O_PLAYER;
          }
        } else {
          return item;
        }
      })
    );
    setPlayer(!player);
  }

  return (
    <div>
      <span className="win-history">
        X's WINS: {winCount.X}
        <br />
        O's WINS: {winCount.O}
      </span>
      {gameFinished && (
        <EndGame
          winCount={winCount}
          restartGame={restartGame}
          player={player}
          draw={draw}
          clearHistory={clearHistory}
        />
      )}
      <Square clickedArray={grid} handleClick={handleClick} />
    </div>
  );
}

export default TicTacToe;
