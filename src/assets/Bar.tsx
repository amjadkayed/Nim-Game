import { Grid } from "@mui/material";
import { FC } from "react";

type BarProps = {
  height?: string;
  width?: string;
  [key: string]: unknown;
};

const Bar: FC<BarProps> = ({
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
        viewBox="6.5 24.5 43 7"
        style={{
          display: "block",
          width: "90%",
          height: "90%",
        }}
        >
        <path stroke="#000000"
         d="M9 25h3M27 25h3M44 25h3M8 26h1M12 26h1M26 26h1M30 26h1M43 26h1M47 26h1M7 27h1M13 27h1M25 27h1M31 27h1M42 27h1M48 27h1M7 28h1M13 28h13M31 28h12M48 28h1M7 29h1M13 29h1M25 29h1M31 29h1M42 29h1M48 29h1M8 30h1M12 30h1M26 30h1M30 30h1M43 30h1M47 30h1M9 31h3M27 31h3M44 31h3"
        />
        <path stroke="#fff5a6"
         d="M9 26h3M8 27h5M8 28h5M8 29h5M9 30h3"
         />
        <path stroke="#fff5a6"
         d="M27 26h3M44 26h3M26 27h5M43 27h5M26 28h5M43 28h5M26 29h5M43 29h5M27 30h3M44 30h3"
         />
        </svg>
    </Grid>
  );
};

export default Bar;
