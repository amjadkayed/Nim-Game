import { Grid } from "@mui/material";
import { FC } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import useSound from "use-sound";
import MinusButtonSound from "../Sounds/minus.mp3";

type MinusProps = {
  height?: string;
  width?: string;
  [key: string]: unknown;
};

const Minus: FC<MinusProps> = ({
  height = "auto",
  width = "auto",
  ...rest
}) => {
  const [playSoundOnClick] = useSound(MinusButtonSound);
  return (
    <Grid
      item
      height={height}
      width={width}
      display={"block"}
      zIndex={"20"}
      position={"absolute"}
      onMouseDown={() => {
        playSoundOnClick();
      }}
      {...rest}
    >   
      <svg xmlns="http://www.w3.org/2000/svg" 
      shape-rendering="crispEdges" 
      viewBox="14.5 25.5 35 11"
      style={{
        display: "block",
        width: "30%",
        height: "30%",
      }}
      > 
       <path stroke="#214e75" d="M16 26h33M15 27h34M15 28h1M17 28h32M15 29h1M17 29h32M15 30h1M17 30h32M15 31h1M17 31h32M15 32h1M17 32h32M15 33h1M17 33h32M15 34h1M17 34h32M15 35h1M48 35h1M15 36h33"></path>
       <path stroke="#426899" d="M16 28h1M16 29h1M16 30h1M16 31h1M16 32h1M16 33h1M16 34h1M16 35h32"></path> </svg>
    </Grid>
  );
};

export default Minus;
