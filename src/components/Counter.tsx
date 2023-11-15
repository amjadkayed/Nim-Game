import { Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
// @ts-ignore
import useSound from "use-sound";
import Minus from "../assets/Minus";
import Plus from "../assets/Pluse";

type CounterProps = {
  height?: string;
  width?: string;
  version: string | null;
  [key: string]: unknown;
};

const Counter: FC<CounterProps> = ({
  height = "auto",
  width = "100%",
  version,
  ...rest
}) => {
  const [counter, setCounter] = useState(4);

  const updateCounter = (number: number) => {
    setCounter((count) => {
      return Math.max(4, Math.min(9, count + number));
    });
  };

  return (
    <Grid
      // bgcolor={"blue"}
      container
      height={height}
      width={"100%"}
      alignContent={"center"}
      justifyContent={"space-between"}
      alignItems={"center"}
      justifyItems={"center"}
      zIndex={"20"}
      direction={"row"}
      // marginRight={"16%"}
      {...rest}
    >
      <Typography
        fontSize={"3vh"}
        position={"relative"}
        color={"white"}
        // left={'22%'}
        // marginRight={"10%"}
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
        // display={"inline"}
      >
        <Minus
          width="13%"
          // position={"relative"}
          onClick={() => updateCounter(-1)}
          version={version}
          style={{ cursor: "pointer" }}
        />
        <Typography
          fontSize={"5vh"}
          // position={"relative"}
          color={"white"}
          marginX={"10%"}
          style={{ userSelect: "none" }}
        >
          {counter}
        </Typography>
        <Plus
          width="13%"
          // position={"relative"}
          onClick={() => updateCounter(1)}
          version={version}
          style={{ cursor: "pointer" }}
        />
      </Grid>
    </Grid>
  );
};

export default Counter;
