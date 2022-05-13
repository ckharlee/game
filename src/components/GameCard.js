import React from "react";
import { Card, CardMedia, CardContent } from "@mui/material";

export default function GameCard({ gameCard }) {
  return (
    <Card
      sx={{
        height: "500px",
        width: "300px",
      }}
    >
      <CardMedia component="img" height="194" image={gameCard.frontImage} />
      <CardContent>
        <h3>{gameCard.title}</h3>
        <body>{gameCard.description}</body>
      </CardContent>
    </Card>
  );
}
