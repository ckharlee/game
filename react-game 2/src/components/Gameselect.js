import React from "react";
import Grid from "@mui/material/Grid";
import Gameselect from "../Gameselect.js"
import GameselectInfo from "./GameselectInfo.js";

<head>
    <title><h2>Game Select</h2></title>
</head>

function gameselect() {

  return (
   <div className="gameselect-container">
  <p><h2>untitle</h2></p>
  <p><h2>Start your game.</h2></p>
  <p>
    <Grid container spacing={2}>
      {GameselectInfo.map((solution) => {
        return (
          
          <Grid item xs={4}>
            <FlipCard frontImage={gameselect.frontImage} description={gameselect.description}  backImage={gameselect.backImage} description2={gameselect.description2}/>
          </Grid>
        );
      })}
    </Grid>
  </p> </div> 
  );
}

export default gameselect;
