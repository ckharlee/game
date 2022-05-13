import React, { useState } from "react";
import hangmanCard from "../assets/cards/Hangman.jpg";
import ticTacToeCard from "../assets/cards/Tic-Tac-Toe.jpg";
import triviaCard from "../assets/cards/Trivia.jpg";
import { Button, Grid } from "@mui/material";
import GameCard from "./GameCard";
import Hangman from "./Hangman";

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
  const [selectedGameCard, setSelectedGameCard] = useState(null);

  return (
    <div className="gameselect-container">
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <h1>Game Select</h1>
          <h2>Start your game.</h2>
        </Grid>

        <Grid item container spacing={2}>
          {gameCardInfo.map((gameCard) => {
            return (
              <div>
                <GameCard gameCard={gameCard}></GameCard>
                <Button onClick={() => setSelectedGameCard(gameCard)}>
                  Select Game
                </Button>
              </div>
            );
          })}
        </Grid>
        <Grid item>
          {selectedGameCard?.title === "Hangman" ? <Hangman></Hangman> : null}
        </Grid>
      </Grid>
    </div>
  );
}
