import { Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
// @ts-ignore
import useSound from "use-sound";
import Minus from "../assets/Minus";
import Plus from "../assets/Pluse";
import { GameType } from "../Game";

type CounterProps = {
  height?: string;
  width?: string;
  version: string | null;
  setGame: (game: any) => void;
  game: GameType;
  [key: string]: unknown;
};

const Counter: FC<CounterProps> = ({
  height = "auto",
  width = "100%",
  version,
  setGame,
  game,
  ...rest
}) => {
  const increaseCounterBy = (number: number) => {
    setGame(
      (prevGame: GameType): GameType => ({
        ...prevGame,
        GameCustomization: {
          ...prevGame.GameCustomization,
          v2NumberOfRows: Math.min(
            8,
            Math.max(prevGame.GameCustomization.v2NumberOfRows + number, 3)
          ),
        },
      })
    );
  };
  const counter = game.GameCustomization.v2NumberOfRows;
  return (
    <Grid
      container
      height={height}
      width={"100%"}
      alignContent={"center"}
      justifyContent={"space-between"}
      alignItems={"center"}
      justifyItems={"center"}
      zIndex={"20"}
      direction={"row"}
      {...rest}
    >
      <Typography
        fontSize={"3vh"}
        position={"relative"}
        color={"white"}
        style={{ userSelect: "none" }}
      >
        {"Number of Rows"}
      </Typography>
      <Grid
        container
        height={"100%"}
        width={"28%"}
        direction={"row"}
        alignContent={"center"}
        justifyContent={"end"}
        alignItems={"center"}
        justifyItems={"center"}
      >
        <Minus
          width="13%"
          onClick={() => increaseCounterBy(-1)}
          version={version}
          style={{ cursor: "pointer" }}
        />
        <Typography
          fontSize={"5vh"}
          color={"white"}
          marginX={"10%"}
          style={{ userSelect: "none" }}
        >
          {counter}
        </Typography>
        <Plus
          width="13%"
          onClick={() => increaseCounterBy(1)}
          version={version}
          style={{ cursor: "pointer" }}
        />
      </Grid>
    </Grid>
  );
};

export default Counter;
