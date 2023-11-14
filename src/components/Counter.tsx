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
      container
      height={height}
      width={width}
      alignContent={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      justifyItems={"center"}
      zIndex={"20"}
      direction={"row"}
      marginRight={"16%"}
      {...rest}
    >
      <Typography
        fontSize={"2vh"}
        position={"relative"}
        color={"white"}
        // left={'22%'}
        marginRight={"1%"}
        style={{ userSelect: "none" }}
      >
        Number of Rows :
      </Typography>
      <Minus
        width="2%"
        position={"relative"}
        onClick={() => updateCounter(-1)}
        version={version}
        style={{ cursor: "pointer" }}
      />
      <Typography
        fontSize={"5vh"}
        position={"relative"}
        color={"white"}
        marginX={"2%"}
        style={{ userSelect: "none" }}
      >
        {counter}
      </Typography>
      <Plus
        width="2%"
        position={"relative"}
        onClick={() => updateCounter(1)}
        version={version}
        style={{ cursor: "pointer" }}
      />
    </Grid>
  );
};

export default Counter;
