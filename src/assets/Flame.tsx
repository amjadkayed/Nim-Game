import { Grid } from "@mui/material";
import { FC } from "react";

type FlameProps = {
  height?: string;
  width?: string;
  [key: string]: unknown;
};

const Flame: FC<FlameProps> = ({
  height = "auto",
  width = "auto",
  ...rest
}) => {
  return (
    <Grid
      item
      height={height}
      width={width}
      display={"block"}
      zIndex={"20"}
      position={"absolute"}
      {...rest}
    >
      <svg
       xmlns="http://www.w3.org/2000/svg"
        shape-rendering="crispEdges"
         viewBox="3.5 -0.5 7 16"
         style={{
            display: "block",
            width: "100%",
            height: "100%",
         }}
        >
        <path stroke="#ffeb3b" d="M6 0h3M6 1h1M8 1h1M8 2h1M6 7h1"/>
        <path stroke="#b2a429" d="M4 1h1M9 4h1M4 5h1M5 7h1M6 8h1"/>
        <path stroke="#b2a852" d="M5 1h1M4 2h1"/><path stroke="#f77c73" d="M7 1h1"/>
        <path stroke="#ffb74d" d="M5 2h1M5 4h1"/>
        <path stroke="#ffcd83" d="M6 2h1M5 3h1"/>
        <path stroke="#ff8a65" d="M7 2h1"/>
        <path stroke="#ff9800" d="M4 3h1"/>
        <path stroke="#b23d18" d="M6 3h1M7 4h1M8 6h1"/>
        <path stroke="#ff5722" d="M7 3h1"/><path stroke="#fff176" d="M8 3h1M8 4h1"/>
        <path stroke="#b26a00" d="M4 4h1M5 5h1M8 5h1"/>
        <path stroke="#7c2b11" d="M6 4h1M8 7h1"/>
        <path stroke="#573400" d="M6 5h1M7 6h1"/>
        <path stroke="#ac5750" d="M7 5h1"/>
        <path stroke="#7c721d" d="M9 5h1M5 6h1"/>
        <path stroke="#3d2400" d="M6 6h1"/>
        <path stroke="#2b0f06" d="M7 7h1"/>
        <path stroke="#624e32" d="M7 8h1M7 9h1M6 13h1"/>
        <path stroke="#9a7b4d" d="M6 9h1M6 10h1"/>
        <path stroke="#4e3e28" d="M7 10h1M7 14h1"/>
        <path stroke="#7b623e" d="M6 11h1M6 12h1"/>
        <path stroke="#3e3220" d="M7 11h1M7 12h1M7 13h1M6 14h1M6 15h1"/>
        <path stroke="#282015" d="M7 15h1"/></svg>
    </Grid>
  );
};

export default Flame;
