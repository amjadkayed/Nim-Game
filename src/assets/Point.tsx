import { Grid } from "@mui/material";
import { FC, useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import useSound from "use-sound";
import HoverOnButtonSound from "../Sounds/HoverOnButton.mp3";
import onButtonClickSound from "../Sounds/ButtonMouseClick.mp3";

const newShade = (hexColor: string, magnitude: number) => {
    hexColor = hexColor.replace(`#`, ``);
    if (hexColor.length === 6) {
      const decimalColor = parseInt(hexColor, 16);
      let r = (decimalColor >> 16) + magnitude;
      r > 255 && (r = 255);
      r < 0 && (r = 0);
      let g = (decimalColor & 0x0000ff) + magnitude;
      g > 255 && (g = 255);
      g < 0 && (g = 0);
      let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
      b > 255 && (b = 255);
      b < 0 && (b = 0);
      return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
    } else {
      return hexColor;
    }
};
type PointProps = {
  height?: string;
  width?: string;
  [key: string]: unknown;
};

const Point: FC<PointProps> = ({
  height = "auto",
  width = "auto",
  ...rest
}) => {
  const [onHover, setOnHover] = useState(false);
  const [onMouseDown, setOnMouseDown] = useState(false);
  const [playSoundOnHover] = useSound(HoverOnButtonSound);
  const [playSoundOnClick] = useSound(onButtonClickSound);
  return (
    <Grid
      item
      height={height}
      width={width}
      display={"block"}
      zIndex={"20"}
      position={"absolute"}
      onMouseEnter={() => {
        setOnHover(true);
        playSoundOnHover();
      }}
      onClick={() => {
        playSoundOnClick();
      }}
      onMouseDown={() => {
        setOnMouseDown(true);
      }}
      onMouseUp={() => {
        setOnMouseDown(false);
      }}
      onMouseOut={() => {
        setOnMouseDown(false);
      }}
      onMouseLeave={() => {
        setOnHover(false);
      }}
      {...rest}
    >   
      <svg xmlns="http://www.w3.org/2000/svg" 
      shape-rendering="crispEdges" 
      viewBox="41.5 24.5 8 7"
      style={{
        display: "block",
        width: "90%",
        height: "90%",
      }}
      >
      <path stroke="#000000" d="M44 25h3M43 26h1M47 26h1M42 27h1M48 27h1M42 28h1M48 28h1M42 29h1M48 29h1M43 30h1M47 30h1M44 31h3"
       /> 
      <path stroke={onHover ? "#214e75" : newShade("#214e75", 50)}
       d="M44 26h3M43 27h5M43 28h5M43 29h5M44 30h3"/>
      </svg>
    </Grid>
  );
};

export default Point;


