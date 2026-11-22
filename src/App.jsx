import Die from "./Die.jsx";
import "./App.css";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  //Dice number state
  const [dice, setDice] = useState(() => generateNewDice());

  // Timer States
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Best Time from LocalStorage 
  const [bestTime, setBestTime] = useState(
    () => JSON.parse(localStorage.getItem("tenzies_best_time_ms")) || null,
  );

  // Win Condition
  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => die.value === dice[0].value);

  // 1. Timer Interval Effect
  useEffect(() => {
    let interval = null;
    if (isTimerRunning && !gameWon) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, gameWon]);

  // 2. Win Effect: Sound + Best Time Record
  useEffect(() => {
    if (gameWon) {
      setIsTimerRunning(false);

      const winAudio = new Audio("/sound/win.mp3");
      winAudio.play().catch((err) => console.log("Sound play error:", err));

      setBestTime((prevBest) => {
        if (prevBest === null || seconds < prevBest) {
          localStorage.setItem("tenzies_best_time_ms", JSON.stringify(seconds));
          return seconds;
        }
        return prevBest;
      });
    }
  }, [gameWon]);

  function generateNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function rollDice() {
    if (gameWon) {
      setDice(generateNewDice());
      setSeconds(0);
      setIsTimerRunning(false);
      return;
    }

    if (!isTimerRunning) {
      setIsTimerRunning(true);
    }

    setDice((prevDice) =>
      prevDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) },
      ),
    );
  }

  function hold(id) {
    if (!isTimerRunning && !gameWon) {
      setIsTimerRunning(true);
    }

    if (!gameWon) {
      setDice((prevDice) =>
        prevDice.map((die) =>
          die.id === id ? { ...die, isHeld: !die.isHeld } : die,
        ),
      );
    }
  }

  
  function formatTime(timeInMs) {
    const mins = Math.floor(timeInMs / 60000);
    const secs = Math.floor((timeInMs % 60000) / 1000);
    const millis = Math.floor((timeInMs % 1000) / 10); 

    const formattedMins = String(mins).padStart(2, "0");
    const formattedSecs = String(secs).padStart(2, "0");
    const formattedMs = String(millis).padStart(2, "0");

    return `${formattedMins}:${formattedSecs}:${formattedMs}`;
  }

  const diceElements = dice.map((die) => (
    <Die
      value={die.value}
      key={die.id}
      isHeld={die.isHeld}
      hold={() => hold(die.id)}
    />
  ));

  return (
    <main className="main-content">
      {gameWon && <Confetti />}

      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>

      <div className="timer-container">
        <span className="timer-label">⏱️ Time:</span>
        <span className="timer-value">{formatTime(seconds)}</span>
      </div>

      <div className="dice-container">{diceElements}</div>

      <button className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>

      <div className="best-score-container">
        <p>
          🏆 Best Record: {bestTime !== null ? formatTime(bestTime) : "--:--"}
        </p>
      </div>
    </main>
  );
}

export default App;
