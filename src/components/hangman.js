/*
TODO:
- Handle what happens when the player wins (i.e. when they guess all the letters)
- Handle what happens when the player loses (i.e. when mistakes === maxWrongGuesses)
*/

import { TextField, Button, Grid } from "@mui/material";
import React, { useState, useMemo } from "react";
import hangman0 from "../assets/hangman/0.png";
import hangman1 from "../assets/hangman/1.png";
import hangman2 from "../assets/hangman/2.png";
import hangman3 from "../assets/hangman/3.png";
import hangman4 from "../assets/hangman/4.png";
import hangman5 from "../assets/hangman/5.png";
import hangman6 from "../assets/hangman/6.png";

const hangmanImages = [
  hangman0,
  hangman1,
  hangman2,
  hangman3,
  hangman4,
  hangman5,
  hangman6,
];

const answer = "play";
const maxWrongGuesses = 6;

export default function Hangman() {
  const [mistakes, setMistakes] = useState(0);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");

  const displayedClueWord = useMemo(
    () =>
      answer
        .split("")
        .map((letter) => (guesses.includes(letter) ? letter : " _ "))
        .join(""),
    [guesses]
  );

  const handleGuessChange = (event) => {
    setCurrentGuess(event.target.value);
  };

  const submitGuess = () => {
    setGuesses(() => [...guesses, currentGuess]);
    setCurrentGuess("");
    if (!answer.includes(currentGuess)) {
      setMistakes(mistakes + 1);
    }
  };

  return (
    <Grid container>
      <Grid item>
        <h3>Word to be Guessed:</h3>
        <p>{displayedClueWord}</p>
      </Grid>
      <Grid item>
        {" "}
        <img src={hangmanImages[mistakes]} alt="Logo" />
      </Grid>
      <Grid item>
        <TextField
          value={currentGuess}
          onChange={handleGuessChange}
          inputProps={{ maxLength: 1 }}
          label={"Guess a letter"}
        />
        <Button onClick={submitGuess}>Submit Guess</Button>
      </Grid>
    </Grid>
  );
}
