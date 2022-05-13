import React from "react";
import hangmanCard from "../assets/cards/Hangman.jpg";
import ticTacToeCard from "../assets/cards/Tic-Tac-Toe.jpg";
import triviaCard from "../assets/cards/Trivia.jpg";
import { Grid } from "@mui/material";
import GameCard from "./GameCard";

const gameCardInfo = [
  {
    frontImage: hangmanCard,
    backImage: hangmanCard,
    title: "Hangman",
    description: "Enter Hangman Description Here",
  },

  {
    frontImage: ticTacToeCard,
    backImage: ticTacToeCard,
    title: "Tic Tac Toe",
    description: "Enter Tic Tac Toe Description Here",
  },

  {
    frontImage: triviaCard,
    backImage: triviaCard,
    title: "Trivia",
    description: "Enter Trivia Description Here",
  },
];

export default function GameSelect() {
  return (
    <div className="gameselect-container">
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <h1>Game Select</h1>
          <h2>Start your game.</h2>
        </Grid>

        <Grid item container spacing={2}>
          {gameCardInfo.map((gameCard) => {
            return <GameCard gameCard={gameCard}></GameCard>;
          })}
        </Grid>
      </Grid>
    </div>
  );
}
