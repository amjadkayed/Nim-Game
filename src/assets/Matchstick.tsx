import { Grid } from "@mui/material";
import { FC, useState } from "react";
// @ts-ignore
import useSound from "use-sound";
import OnMatchstickOn from "../Sounds/OnMatchstickOn.mp3";
import onMatchstickOff from "../Sounds/OnMatchstickOff.mp3";
type MatchstickProps = {
  height?: string;
  width?: string;
  selectedMatchsticks: any[];
  location: any;
  isBurnt: boolean;
  setSelectedMatchsticks: any;
  [key: string]: unknown;
};

const Matchstick: FC<MatchstickProps> = ({
  height = "auto",
  width = "auto",
  selectedMatchsticks,
  setSelectedMatchsticks,
  location,
  isBurnt,
  ...rest
}) => {
  const isValidSelection = (rowNumber: number): boolean => {
    for (let i = 0; i < selectedMatchsticks.length; i++) {
      if (selectedMatchsticks[i].row !== rowNumber) {
        //some error handling must be here
        return false;
      }
    }
    return true;
  };

  const isMatchSelected = (rowNumber: number, index: number): boolean => {
    for (let i = 0; i < selectedMatchsticks.length; i++) {
      if (
        selectedMatchsticks[i].row === rowNumber &&
        selectedMatchsticks[i].index === index
      ) {
        //some error handling must be here
        return true;
      }
    }
    return false;
  };

  const [onHover, setOnHover] = useState(false);

  const [isMatchstickOn, setIsMatchstickOn] = useState(
    selectedMatchsticks.includes(location)
  );
  const [playMatchstickOnSound, { stop: stopOnSound }] =
    useSound(OnMatchstickOn);
  const [playMatchstickOffSound, { stop: stopOffSound }] =
    useSound(onMatchstickOff);

  return (
    <Grid
      container
      height={height}
      width={width}
      alignContent={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      justifyItems={"center"}
      position={"relative"}
      zIndex={30}
      onMouseEnter={() => {
        if (isBurnt) return;
        setOnHover(true);
      }}
      onMouseDown={() => {
        if (isBurnt) return;
        if (!isValidSelection(location.row)) return;
        if (isMatchSelected(location.row, location.index)) {
          setSelectedMatchsticks((prev: any) => [
            ...prev.filter(
              (item: any) =>
                !(item.row === location.row && item.index === location.index)
            ),
          ]);
        } else {
          const newItem = { row: location.row, index: location.index };
          setSelectedMatchsticks((prev: any) => [...prev, newItem]);
        }
        stopOnSound();
        stopOffSound();
        if (isMatchstickOn) {
          playMatchstickOffSound();
        } else {
          playMatchstickOnSound();
        }
        setIsMatchstickOn((prev) => !prev);
      }}
      onMouseLeave={() => {
        if (isBurnt) return;
        setOnHover(false);
      }}
      style={{
        cursor: isBurnt ? "auto" : "pointer",
      }}
      {...rest}
    >
      {isBurnt ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shape-rendering="crispEdges"
          viewBox="34.5 24.5 42 13"
          style={{
            position: "absolute",
            bottom: 0,
            display: "block",
            width: "100%",
          }}
        >
          <path
            stroke="rgba(0,0,0,0.30196078431372547)"
            d="M45 25h1M59 25h2M43 26h3M57 26h1M60 26h1M42 27h1M56 27h1M59 27h2M41 28h2M59 28h1M45 29h1M65 31h2M41 32h1M36 33h2M39 34h1M39 35h2M42 35h2M52 35h1M61 35h4M71 35h1M40 36h5M58 36h6M65 36h1"
          />
          <path
            stroke="rgba(0,0,0,0.5137254901960784)"
            d="M58 26h2M57 27h2M40 33h2M40 34h1M65 35h6"
          />
          <path
            stroke="rgba(105,105,105,0.5137254901960784)"
            d="M43 27h2M44 29h1M41 30h2M41 31h1"
          />
          <path
            stroke="#000000"
            d="M46 27h1M48 27h1M50 27h2M66 27h1M39 28h1M44 28h9M62 28h2M46 29h1M51 29h6M43 30h2M47 30h2M52 30h1M57 30h8M40 31h1M43 31h1M45 31h1M49 31h1M51 31h5M60 31h5M68 31h1M36 32h5M42 32h1M47 32h1M58 32h1M63 32h6M74 32h1M35 33h1M38 33h2M46 33h1M51 33h3M59 33h1M61 33h2M67 33h2M74 33h1M38 34h1M41 34h6M48 34h2M62 34h9M44 35h8M53 35h8M75 35h1M36 36h4M36 37h1M40 37h2"
          />
          <path
            stroke="#4d4d4d"
            d="M43 28h1M66 28h1M47 29h1M45 30h2M56 30h1M39 31h1M44 31h1M46 31h2M59 31h1M71 31h1M51 32h3M61 32h2M69 32h2M54 33h1M70 33h1M52 34h3M59 34h3"
          />
          <path
            stroke="rgba(255,255,255,0.30196078431372547)"
            d="M65 28h1M42 29h1M66 29h3M68 30h3M42 31h1M69 31h1M71 32h1"
          />
          <path
            stroke="#363636"
            d="M43 29h1M53 30h3M48 31h1M56 31h3M45 32h2M49 32h1M59 32h1M44 33h2M60 33h1M50 34h2M55 34h4"
          />
          <path stroke="#8d6868" d="M48 29h3M43 32h1" />
          <path stroke="#262626" d="M49 30h1M49 33h2M63 33h1" />
          <path stroke="#7a6060" d="M50 30h1" />
          <path stroke="#823737" d="M51 30h1M36 34h2M47 34h1" />
          <path
            stroke="#5b2626"
            d="M50 31h1M44 32h1M48 32h1M56 32h2M58 33h1M65 33h2"
          />
          <path stroke="#5b5b5b" d="M50 32h1M60 32h1M64 33h1" />
          <path stroke="#401b1b" d="M54 32h2M42 33h2M48 33h1" />
          <path stroke="#2d1313" d="M47 33h1" />
          <path stroke="#737373" d="M55 33h3" />
        </svg>
      ) : isMatchstickOn ? (
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
            height: "100%",
          }}
        >
          <path
            stroke={!isValidSelection(location.row) ? "#ff0000" : "#ffd000"}
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
