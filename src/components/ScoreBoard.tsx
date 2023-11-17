import { Grid, Typography } from "@mui/material";
import React, { FC } from "react";

type ScoreBoardType = {
  p1Points: number;
  p2Points: number;
  p1Name: string;
  p2Name: string;
  currentTurn: string;
  [key: string]: unknown;
};

const ScoreBoard: FC<ScoreBoardType> = ({
  p1Points,
  p2Points,
  p1Name,
  p2Name,
  currentTurn,
  ...rest
}) => {
  return (
    <Grid
      container
      width={"100%"}
      height={"9%"}
      position={"absolute"}
      alignContent={"center"}
      // justifyContent={"space-evenly"}
      alignItems={"center"}
      justifyItems={"center"}
      zIndex={"200"}
      top={0}
      bgcolor={"rgba(0,0,0,0.5)"}
      direction={"row"}
      overflow={"hidden"}
      // columnGap={"20%"}
      {...rest}
    >
      <Grid
        item
        // display={"inline-block"}
        width={`${(1 / 3) * 100}%`}
        display={"flex"}
        alignContent={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        justifyItems={"center"}
        // bgcolor={"blue"}
        direction={"column"}
      >
        <Typography
          style={{ userSelect: "none" }}
          fontSize={"2vh"}
          color={"white"}
          width={"100%"}
          textAlign={"center"}
        >
          {p1Name}
        </Typography>
        <Typography
          style={{ userSelect: "none" }}
          fontSize={"2vh"}
          color={"white"}
          textAlign={"center"}
          width={"100%"}
        >
          {p1Points}
        </Typography>
      </Grid>
      <Grid
        item
        width={`${(1 / 3) * 100}%`}
        display={"flex"}
        alignContent={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        justifyItems={"center"}
        direction={"column"}
        bgcolor={"white"}
        height={"100%"}
        borderRadius={3}
      >
        <Typography
          style={{ userSelect: "none" }}
          fontSize={"3vh"}
          color={"black"}
          textAlign={"center"}
        >
          {currentTurn === "p1" ? p1Name : p2Name} {" Turn"}
        </Typography>
      </Grid>
      <Grid
        item
        // display={"inline-block"}
        width={`${(1 / 3) * 100}%`}
        flexWrap={"wrap"}
        display={"flex"}
        alignContent={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        justifyItems={"center"}
        // bgcolor={"blue"}
        direction={"column"}
      >
        <Typography
          style={{ userSelect: "none" }}
          fontSize={"2vh"}
          color={"white"}
          width={"100%"}
          textAlign={"center"}
          // bgcolor={"red"}
        >
          {p2Name}
        </Typography>
        <Typography
          style={{ userSelect: "none" }}
          fontSize={"2vh"}
          color={"white"}
          textAlign={"center"}
          width={"100%"}
        >
          {p2Points}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ScoreBoard;
