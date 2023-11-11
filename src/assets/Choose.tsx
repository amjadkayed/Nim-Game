import { Grid } from "@mui/material";
import { FC } from "react";

type ChooseProps = {
  height?: string;
  width?: string;
  [key: string]: unknown;
};

const Choose: FC<ChooseProps> = ({
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
        viewBox="1.5 38.5 77 5"
        style={{
            display: "block",
            width: "50%",
            height: "50%",
        }}
        >
        <path stroke="#ffffff" d="M3 39h2M7 39h1M10 39h1M13 39h2M18 39h2M23 39h3M27 39h4M34 39h3M39 39h4M44 39h4M49 39h4M54 39h3M59 39h2M63 39h1M66 39h1M68 39h1M73 39h5M2 40h1M5 40h1M7 40h1M10 40h1M12 40h1M15 40h1M17 40h1M20 40h1M22 40h1M27 40h1M34 40h1M37 40h1M39 40h1M44 40h1M49 40h1M55 40h1M58 40h1M61 40h1M63 40h1M66 40h1M68 40h1M75 40h1M2 41h1M7 41h4M12 41h1M15 41h1M17 41h1M20 41h1M23 41h2M27 41h3M34 41h1M37 41h1M39 41h3M44 41h3M49 41h3M55 41h1M58 41h1M63 41h1M66 41h1M68 41h1M75 41h1M2 42h1M5 42h1M7 42h1M10 42h1M12 42h1M15 42h1M17 42h1M20 42h1M25 42h1M27 42h1M34 42h1M37 42h1M39 42h1M44 42h1M49 42h1M55 42h1M58 42h1M61 42h1M63 42h1M66 42h1M68 42h1M75 42h1M3 43h2M7 43h1M10 43h1M13 43h2M18 43h2M22 43h3M27 43h4M34 43h3M39 43h4M44 43h1M49 43h1M54 43h3M59 43h2M64 43h2M68 43h4M75 43h1"
        />
        </svg>
    </Grid>
  );
};

export default Choose;
