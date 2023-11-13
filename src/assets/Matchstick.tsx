import { Grid } from "@mui/material";
import { FC, useState } from "react";
// @ts-ignore
import useSound from "use-sound";
import onMatchstickBurn from "../Sounds/onMatchstickBurn.mp3";
import onMatchstickOff from "../Sounds/OnMatchstickOff.mp3";
type MatchstickProps = {
  height?: string;
  width?: string;
  [key: string]: unknown;
};

const Matchstick: FC<MatchstickProps> = ({
  height = "auto",
  width = "auto",
  ...rest
}) => {
  const [onHover, setOnHover] = useState(false);
  const [isMatchstickOn, setIsMatchstickOn] = useState(false);
  const [playMatchstickBurnSound, { stop: stopBurnSound }] =
    useSound(onMatchstickBurn);
  const [playMatchstickOffSound, { stop: stopOffSound }] =
    useSound(onMatchstickOff);

  return (
    <Grid
      item
      height={height}
      width={width}
      display={"block"}
      alignContent={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      justifyItems={"center"}
      zIndex={30}
      onMouseEnter={() => {
        setOnHover(true);
      }}
      onMouseDown={() => {
        stopBurnSound();
        stopOffSound();
        if (isMatchstickOn) {
          playMatchstickOffSound();
        } else {
          playMatchstickBurnSound();
        }
        setIsMatchstickOn((prev) => !prev);
      }}
      onMouseLeave={() => {
        setOnHover(false);
      }}
      style={{
        cursor: "pointer",
      }}
      {...rest}
    >
      {isMatchstickOn ? (
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
          <path stroke="#ffeb3b" d="M6 0h3M6 1h1M8 1h1M8 2h1M6 7h1" />
          <path stroke="#b2a429" d="M4 1h1M9 4h1M4 5h1M5 7h1M6 8h1" />
          <path stroke="#b2a852" d="M5 1h1M4 2h1" />
          <path stroke="#f77c73" d="M7 1h1" />
          <path stroke="#ffb74d" d="M5 2h1M5 4h1" />
          <path stroke="#ffcd83" d="M6 2h1M5 3h1" />
          <path stroke="#ff8a65" d="M7 2h1" />
          <path stroke="#ff9800" d="M4 3h1" />
          <path stroke="#b23d18" d="M6 3h1M7 4h1M8 6h1" />
          <path stroke="#ff5722" d="M7 3h1" />
          <path stroke="#fff176" d="M8 3h1M8 4h1" />
          <path stroke="#b26a00" d="M4 4h1M5 5h1M8 5h1" />
          <path stroke="#7c2b11" d="M6 4h1M8 7h1" />
          <path stroke="#573400" d="M6 5h1M7 6h1" />
          <path stroke="#ac5750" d="M7 5h1" />
          <path stroke="#7c721d" d="M9 5h1M5 6h1" />
          <path stroke="#3d2400" d="M6 6h1" />
          <path stroke="#2b0f06" d="M7 7h1" />
          <path stroke="#624e32" d="M7 8h1M7 9h1M6 13h1" />
          <path stroke="#9a7b4d" d="M6 9h1M6 10h1" />
          <path stroke="#4e3e28" d="M7 10h1M7 14h1" />
          <path stroke="#7b623e" d="M6 11h1M6 12h1" />
          <path stroke="#3e3220" d="M7 11h1M7 12h1M7 13h1M6 14h1M6 15h1" />
          <path stroke="#282015" d="M7 15h1" />
        </svg>
      ) : onHover ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shape-rendering="crispEdges"
          viewBox="4.5 2.5 5 13"
          style={{
            display: "block",
            width: "100%",
            height: "10,0%",
          }}
        >
          <path
            stroke="#ffd000"
            d="M5 3h4M5 4h1M8 4h1M5 5h1M8 5h1M5 6h1M8 6h1M5 7h1M8 7h1M5 8h1M8 8h1M5 9h1M8 9h1M5 10h1M8 10h1M5 11h1M8 11h1M5 12h1M8 12h1M5 13h1M8 13h1M5 14h1M8 14h1M5 15h4"
          />
          <path stroke="#ff334e" d="M6 4h1" />
          <path stroke="#a30016" d="M7 4h1" />
          <path stroke="#9b3341" d="M6 5h1" />
          <path stroke="#820012" d="M7 5h1" />
          <path stroke="#ae9571" d="M6 6h1M6 7h1" />
          <path stroke="#624e32" d="M7 6h1M7 7h1M7 8h1M6 12h1" />
          <path stroke="#9a7b4d" d="M6 8h1M6 9h1" />
          <path stroke="#4e3e28" d="M7 9h1M7 13h1" />
          <path stroke="#7b623e" d="M6 10h1M6 11h1" />
          <path stroke="#3e3220" d="M7 10h1M7 11h1M7 12h1M6 13h1M6 14h1" />
          <path stroke="#282015" d="M7 14h1" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shape-rendering="crispEdges"
          viewBox="5.5 3.5 3 11"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
          }}
        >
          <path stroke="#ff334e" d="M6 4h1" />
          <path stroke="#a30016" d="M7 4h1" />
          <path stroke="#9b3341" d="M6 5h1" />
          <path stroke="#820012" d="M7 5h1" />
          <path stroke="#ae9571" d="M6 6h1M6 7h1" />
          <path stroke="#624e32" d="M7 6h1M7 7h1M7 8h1M6 12h1" />
          <path stroke="#9a7b4d" d="M6 8h1M6 9h1" />
          <path stroke="#4e3e28" d="M7 9h1M7 13h1" />
          <path stroke="#7b623e" d="M6 10h1M6 11h1" />
          <path stroke="#3e3220" d="M7 10h1M7 11h1M7 12h1M6 13h1M6 14h1" />
          <path stroke="#282015" d="M7 14h1" />
        </svg>
      )}
    </Grid>
  );
};

export default Matchstick;
