import { Grid } from "@mui/material";
import { FC, useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import useSound from "use-sound";
import PluseButtonSound from "../Sounds/plussound.mp3";
import { newShade } from "../utils";
type PlusProps = {
  height?: string;
  width?: string;
  version: string | null;

  [key: string]: unknown;
};

const Plus: FC<PlusProps> = ({
  height = "auto",
  width = "auto",
  version,
  ...rest
}) => {
  const [playSoundOnClick] = useSound(PluseButtonSound);
  return (
    <Grid
      item
      height={height}
      width={width}
      // display={"inline"}
      // position={"absolute"}
      onMouseDown={() => {
        playSoundOnClick();
      }}
      {...rest}
    >
      {version == "v2" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shape-rendering="crispEdges"
          viewBox="14.5 15.5 35 30"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
          }}
        >
          <path
            stroke="#214e75"
            d="M27 16h11M26 17h1M28 17h10M26 18h1M28 18h10M26 19h1M28 19h10M26 20h1M28 20h10M26 21h1M28 21h10M26 22h1M28 22h10M26 23h1M28 23h10M26 24h1M28 24h10M26 25h1M28 25h10M16 26h33M15 27h34M15 28h1M17 28h32M15 29h1M17 29h32M15 30h1M17 30h32M15 31h1M17 31h32M15 32h1M17 32h32M15 33h1M17 33h32M15 34h1M17 34h32M15 35h1M29 35h8M48 35h1M15 36h13M29 36h19M27 37h1M29 37h9M27 38h1M29 38h9M27 39h1M29 39h9M27 40h1M29 40h9M27 41h1M29 41h9M27 42h1M29 42h9M27 43h1M29 43h9M27 44h1M37 44h1M27 45h10"
          ></path>
          <path
            stroke="#426899"
            d="M27 17h1M27 18h1M27 19h1M27 20h1M27 21h1M27 22h1M27 23h1M27 24h1M27 25h1M16 28h1M16 29h1M16 30h1M16 31h1M16 32h1M16 33h1M16 34h1M16 35h13M37 35h11M28 36h1M28 37h1M28 38h1M28 39h1M28 40h1M28 41h1M28 42h1M28 43h1M28 44h9"
          ></path>
        </svg>
      )}
      {version == "v1" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shape-rendering="crispEdges"
          viewBox="14.5 15.5 35 30"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
          }}
        >
          <path
            stroke="#ffffff"
            d="M27 16h11M26 17h1M28 17h10M26 18h1M28 18h10M26 19h1M28 19h10M26 20h1M28 20h10M26 21h1M28 21h10M26 22h1M28 22h10M26 23h1M28 23h10M26 24h1M28 24h10M26 25h1M28 25h10M16 26h33M15 27h34M15 28h1M17 28h32M15 29h1M17 29h32M15 30h1M17 30h32M15 31h1M17 31h32M15 32h1M17 32h32M15 33h1M17 33h32M15 34h1M17 34h32M15 35h1M29 35h8M48 35h1M15 36h13M29 36h19M27 37h1M29 37h9M27 38h1M29 38h9M27 39h1M29 39h9M27 40h1M29 40h9M27 41h1M29 41h9M27 42h1M29 42h9M27 43h1M29 43h9M27 44h1M37 44h1M27 45h10"
          ></path>
          <path
            stroke={newShade("#ffffff", -50)}
            d="M27 17h1M27 18h1M27 19h1M27 20h1M27 21h1M27 22h1M27 23h1M27 24h1M27 25h1M16 28h1M16 29h1M16 30h1M16 31h1M16 32h1M16 33h1M16 34h1M16 35h13M37 35h11M28 36h1M28 37h1M28 38h1M28 39h1M28 40h1M28 41h1M28 42h1M28 43h1M28 44h9"
          ></path>{" "}
        </svg>
      )}
    </Grid>
  );
};

export default Plus;
