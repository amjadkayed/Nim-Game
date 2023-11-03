import { Grid } from "@mui/material";
import { FC } from "react";

type NimGameTitleProps = {
  height?: string;
  width?: string;
};

const NimGameTitle: FC<NimGameTitleProps> = ({
  height = "auto",
  width = "auto",
}) => {
  return (
    <Grid item height={height} width={width} display={"block"} zIndex={"20"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="crispEdges"
        viewBox="13.5 16.5 75 11"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          filter: "drop-shadow(5px 10px 0px  rgba(0, 0, 0, 0.5))",
        }}
      >
        <path stroke="#ff334e" d="M26 17h1" />
        <path stroke="#a30016" d="M27 17h1" />
        <path
          stroke="#ffffff"
          d="M14 18h2M20 18h2M32 18h2M40 18h2M50 18h4M60 18h4M68 18h2M76 18h2M80 18h8M14 19h2M20 19h2M32 19h2M40 19h2M50 19h4M60 19h4M68 19h2M76 19h2M80 19h8M14 20h4M20 20h2M32 20h4M38 20h4M48 20h2M58 20h2M64 20h2M68 20h4M74 20h4M80 20h2M14 21h4M20 21h2M32 21h4M38 21h4M48 21h2M58 21h2M64 21h2M68 21h4M74 21h4M80 21h2M14 22h2M18 22h4M32 22h2M36 22h2M40 22h2M48 22h2M52 22h4M58 22h8M68 22h2M72 22h2M76 22h2M80 22h6M14 23h2M18 23h4M32 23h2M36 23h2M40 23h2M48 23h2M52 23h4M58 23h8M68 23h2M72 23h2M76 23h2M80 23h6M14 24h2M20 24h2M32 24h2M40 24h2M48 24h2M54 24h2M58 24h2M64 24h2M68 24h2M76 24h2M80 24h2M14 25h2M20 25h2M32 25h2M40 25h2M48 25h2M54 25h2M58 25h2M64 25h2M68 25h2M76 25h2M80 25h2M14 26h2M20 26h2M32 26h2M40 26h2M50 26h4M58 26h2M64 26h2M68 26h2M76 26h2M80 26h8M14 27h2M20 27h2M32 27h2M40 27h2M50 27h4M58 27h2M64 27h2M68 27h2M76 27h2M80 27h8"
        />
        <path stroke="#9b3341" d="M26 18h1" />
        <path stroke="#820012" d="M27 18h1" />
        <path stroke="#ae9571" d="M26 19h1M26 20h1" />
        <path stroke="#624e32" d="M27 19h1M27 20h1M27 21h1M26 25h1" />
        <path stroke="#9a7b4d" d="M26 21h1M26 22h1" />
        <path stroke="#4e3e28" d="M27 22h1M27 26h1" />
        <path stroke="#7b623e" d="M26 23h1M26 24h1" />
        <path stroke="#3e3220" d="M27 23h1M27 24h1M27 25h1M26 26h1M26 27h1" />
        <path stroke="#282015" d="M27 27h1" />
      </svg>
    </Grid>
  );
};

export default NimGameTitle;
