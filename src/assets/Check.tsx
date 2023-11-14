import { Grid } from "@mui/material";
import { FC } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import useSound from "use-sound";
import MinusButtonSound from "../Sounds/minus.mp3";
import { newShade } from "../utils";

type MinusProps = {
  height?: string;
  width?: string;
  version: string | null;

  [key: string]: unknown;
};

const Minus: FC<MinusProps> = ({
  height = "auto",
  width = "auto",
  version,
  ...rest
}) => {
  const [playSoundOnClick] = useSound(MinusButtonSound);
  return (
    <Grid
      item
      height={height}
      width={width}
      display={"inline"}
      // position={"absolute"}
      onMouseDown={() => {
        playSoundOnClick();
      }}
      {...rest}
    >
      {version == "v2" && (
        <svg xmlns="http://www.w3.org/2000/svg" 
        shape-rendering="crispEdges" 
        viewBox="17.5 21.5 24 19"
        style={{
            display: "block",
            width: "100%",
            height: "100%",
        }}
        > 
        <path stroke="#000000" d="M36 22h1M35 23h1M37 23h1M34 24h1M38 24h1M33 25h1M39 25h1M32 26h1M40 26h1M31 27h1M39 27h1M22 28h1M30 28h1M38 28h1M21 29h1M23 29h1M29 29h1M37 29h1M20 30h1M24 30h1M28 30h1M36 30h1M19 31h1M25 31h1M27 31h1M35 31h1M18 32h1M26 32h1M34 32h1M19 33h1M33 33h1M20 34h1M32 34h1M21 35h1M31 35h1M22 36h1M30 36h1M23 37h1M29 37h1M24 38h1M28 38h1M25 39h1M27 39h1M26 40h1"></path> 
        <path stroke="#2ecc20" d="M36 23h1M35 24h3M34 25h5M33 26h7M32 27h7M31 28h7M22 29h1M30 29h7M21 30h3M29 30h7M20 31h5M28 31h7M19 32h7M27 32h7M20 33h13M21 34h11M22 35h9M23 36h7M24 37h5M25 38h3M26 39h1"></path>
         </svg>
        
      )}
      {version == "v1" && (
        <svg xmlns="http://www.w3.org/2000/svg" 
        shape-rendering="crispEdges" 
        viewBox="17.5 21.5 24 19"
        style={{
            display: "block",
            width: "100%",
            height: "100%",
        }}
        > 
        <path stroke="#000000" d="M36 22h1M35 23h1M37 23h1M34 24h1M38 24h1M33 25h1M39 25h1M32 26h1M40 26h1M31 27h1M39 27h1M22 28h1M30 28h1M38 28h1M21 29h1M23 29h1M29 29h1M37 29h1M20 30h1M24 30h1M28 30h1M36 30h1M19 31h1M25 31h1M27 31h1M35 31h1M18 32h1M26 32h1M34 32h1M19 33h1M33 33h1M20 34h1M32 34h1M21 35h1M31 35h1M22 36h1M30 36h1M23 37h1M29 37h1M24 38h1M28 38h1M25 39h1M27 39h1M26 40h1"></path> 
        <path stroke="#2ecc20" d="M36 23h1M35 24h3M34 25h5M33 26h7M32 27h7M31 28h7M22 29h1M30 29h7M21 30h3M29 30h7M20 31h5M28 31h7M19 32h7M27 32h7M20 33h13M21 34h11M22 35h9M23 36h7M24 37h5M25 38h3M26 39h1"></path> </svg>
      )}
    </Grid>
  );
};

export default Minus;
