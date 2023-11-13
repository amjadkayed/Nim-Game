import { Grid } from "@mui/material";
import { FC } from "react";

type SplitterProps = {
  height?: string;
  width?: string;
  [key: string]: unknown;
};

const Splitter: FC<SplitterProps> = ({
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
      style={{
        zIndex: "5",
      }}
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="crispEdges"
        viewBox="44.5 -0.5 13 50"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <path
          stroke="#000000"
          d="M49 0h1M49 1h1M48 2h1M48 3h1M47 7h1M47 8h1M47 9h1M47 10h1M47 11h1M47 12h1M47 13h1M47 14h1M47 15h1M47 16h1M47 17h1M47 18h1M47 19h1M47 20h1M47 21h1M47 22h1M47 23h1M47 24h1M47 25h1M47 26h1M47 27h1M47 28h1M47 29h1M47 30h1M47 31h1M47 32h1M47 33h1M47 34h1M47 35h2M47 36h1M47 37h1M47 38h1M51 39h1M51 40h1M46 41h1M51 41h1M46 42h1M51 42h1M46 43h1M51 43h1M50 44h2M50 45h1M45 46h1M50 46h1"
        />
        <path
          stroke="#4f2445"
          d="M50 0h1M52 0h3M52 1h2M52 2h2M51 3h2M50 4h2M50 5h2M50 6h2M49 7h2M52 7h1M49 8h2M52 8h1M49 9h1M52 9h1M49 10h1M51 10h1M49 11h1M51 11h1M49 12h1M51 12h1M50 13h3M50 14h3M49 15h4M49 16h4M49 17h4M49 18h3M49 19h3M49 20h4M49 21h4M49 22h4M49 23h4M49 24h1M52 24h1M49 25h2M52 25h1M49 26h2M49 27h2M49 28h2M49 29h2M49 30h3M49 31h2M49 32h2M49 33h2M49 34h1M49 35h1M49 36h1M49 37h1M49 38h1M49 39h1M49 40h1M49 41h1M49 44h1M48 45h1M47 49h1"
        />
        <path
          stroke="#251332"
          d="M51 0h1M50 2h1M48 4h2M48 5h1M48 6h1M48 7h1M48 9h1M48 10h1M48 11h1M48 12h1M48 13h1M53 13h1M48 14h1M53 14h1M48 15h1M53 15h1M48 16h1M53 16h1M48 17h1M53 17h1M48 19h1M48 20h1M53 22h1M53 23h1M53 24h1M53 25h1M53 26h1M52 27h1M52 28h1M52 29h1M52 30h1M51 31h2M48 34h1M51 35h1M48 36h1M51 36h1M48 37h1M51 37h1M48 38h1M51 38h1M50 39h1M50 40h1M50 41h1M50 42h1M46 44h1M46 45h1M46 46h1M45 47h2M45 48h1M45 49h1M48 49h2"
        />
        <path
          stroke="#371930"
          d="M55 0h1M50 1h1M54 1h1M49 2h1M54 2h1M49 3h1M54 3h1M52 4h1M52 5h2M52 6h2M51 7h1M53 7h1M51 8h1M53 8h1M50 9h1M53 9h1M50 10h1M53 10h1M50 11h1M53 11h1M50 12h1M53 12h1M49 13h1M49 14h1M52 18h1M52 19h1M50 24h1M48 28h1M48 29h1M48 30h1M48 31h1M48 32h1M52 32h1M48 33h1M52 33h1M50 34h1M52 34h1M50 35h1M52 35h1M50 36h1M50 37h1M50 38h1M48 39h1M48 40h1M48 42h1M50 43h1M49 45h1M48 46h2M48 47h2M48 48h1"
        />
        <path
          stroke="#090936"
          d="M56 0h1M56 1h1M55 2h1M55 3h1M54 4h1M54 5h1M54 6h1M54 7h1M54 8h1M54 9h1M54 10h1M54 11h1M54 12h1M54 13h1M54 14h1M54 15h1M54 16h1M54 17h1M54 18h1M54 19h1M54 23h1M54 24h1M54 25h1M53 27h1M53 28h1M53 29h1M53 30h1M53 31h1M53 32h1M53 33h1M53 34h1M53 35h1M53 36h1M52 42h1M50 49h3"
        />
        <path
          stroke="#351b47"
          d="M51 1h1M51 2h1M50 3h1M49 5h1M49 6h1M48 8h1M52 10h1M52 11h1M52 12h1M53 18h1M53 19h1M53 20h1M53 21h1M51 24h1M51 25h1M51 26h2M51 27h1M51 28h1M51 29h1M47 39h1M47 40h1M47 41h1M49 42h1M48 43h2M48 44h1"
        />
        <path
          stroke="#060626"
          d="M55 1h1M54 20h1M54 21h1M54 22h1M52 36h1M52 37h1M52 38h1M52 39h1M52 40h1M52 41h1M51 47h1M51 48h1"
        />
        <path
          stroke="#261122"
          d="M53 3h1M53 4h1M51 9h1M48 27h1M48 41h1M47 44h1M47 45h1M47 46h1M47 47h1M46 48h2M46 49h1"
        />
        <path stroke="rgba(0,0,0,0.30196078431372547)" d="M47 6h1" />
        <path
          stroke="#1a0d23"
          d="M48 18h1M48 21h1M48 22h1M48 23h1M48 24h1M48 25h1M48 26h1M51 32h1M51 33h1M51 34h1M47 42h1M47 43h1M51 45h1M50 47h1M49 48h2"
        />
        <path stroke="#04041b" d="M51 46h1" />
      </svg>
    </Grid>
  );
};

export default Splitter;
