import { Grid } from "@mui/material";
import { FC } from "react";

type Cloud3Props = {
  height?: string;
  width?: string;
  [key: string]: unknown;
};

const Cloud3: FC<Cloud3Props> = ({
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
      position={"absolute"}
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="crispEdges"
        viewBox="32.5 16.5 32 11"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      >
        <path
          stroke="#bfeeff"
          d="M49 17h1M54 17h1M48 18h1M54 18h1M48 19h1M55 19h1M44 20h1M47 20h1M55 20h3M59 20h3M43 21h1M47 21h1M57 21h1M62 21h1M48 22h1M62 22h2M42 23h1M53 23h2M62 23h2M52 24h4M61 24h3M36 25h1M42 25h5M51 25h7M61 25h2M36 26h6M45 26h6M55 26h8"
        />
        <path
          stroke="#ffffff"
          d="M50 17h4M49 18h5M49 19h6M45 20h2M48 20h3M53 20h2M44 21h3M48 21h3M55 21h2M58 21h4M41 22h7M49 22h3M56 22h6M39 23h3M43 23h1M45 23h6M57 23h4M39 24h3M46 24h4M57 24h3"
        />
        <path
          stroke="#e3f8ff"
          d="M51 20h2M51 21h4M52 22h4M44 23h1M51 23h2M55 23h2M61 23h1M42 24h4M50 24h2M56 24h1M60 24h1M37 25h5M47 25h4M58 25h3"
        />
        <path stroke="#f7f7f7" d="M38 24h1M33 27h1" />
        <path stroke="#a8e8ff" d="M35 27h1" />
      </svg>
    </Grid>
  );
};

export default Cloud3;
