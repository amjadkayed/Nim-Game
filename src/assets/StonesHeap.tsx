import { Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
// @ts-ignore
import useSound from "use-sound";
import OnMatchstickOn from "../Sounds/OnMatchstickOn.mp3";
import onMatchstickOff from "../Sounds/OnMatchstickOff.mp3";
import PixelButton from "../components/PixelButton";

type stonesHeapProps = {
  height?: string;
  width?: string;
  selectedHeap: any;
  location: any;
  setSelectedHeap: any;
  setHeapsArray: any;
  defaultStones: any;
  disabled: any;
  heapsArray: number[];
  [key: string]: unknown;
};

const StonesHeap: FC<stonesHeapProps> = ({
  height = "auto",
  width = "auto",
  selectedHeap,
  setSelectedHeap,
  location,
  heapsArray,
  setHeapsArray,
  disabled,
  defaultStones,
  ...rest
}) => {
  const isValidSelection = (rowNumber: number): boolean => {
    return false;
  };

  const [onHover, setOnHover] = useState(false);

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
        if (disabled) return;
        setOnHover(true);
      }}
      onMouseDown={() => {
        // stopOnSound();
        // stopOffSound();
        // if (isMatchSelected(location.row, location.index)) {
        //   playMatchstickOffSound();
        // } else {
        //   playMatchstickOnSound();
        // }
      }}
      onMouseLeave={() => {
        if (disabled) return;
        // if (isBurnt || notEnabled) return;
        setOnHover(false);
      }}
      style={{
        cursor: "pointer",
      }}
      {...rest}
    >
      {selectedHeap === location || onHover ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shape-rendering="crispEdges"
          viewBox="29.5 13.5 31 30"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
          }}
        >
          <path
            stroke={
              (selectedHeap !== location && selectedHeap) || defaultStones <= 2
                ? "#ff0000"
                : "#ffd000"
            }
            d="M39 14h11M37 15h6M49 15h3M35 16h4M51 16h3M33 17h4M53 17h2M32 18h3M54 18h2M32 19h2M55 19h1M31 20h2M55 20h2M31 21h1M56 21h2M31 22h1M57 22h1M30 23h2M57 23h2M30 24h1M58 24h1M30 25h1M58 25h1M30 26h1M58 26h1M30 27h1M58 27h1M30 28h1M58 28h1M30 29h1M58 29h1M30 30h1M58 30h2M30 31h1M59 31h1M30 32h1M59 32h1M30 33h1M59 33h1M30 34h1M59 34h1M30 35h1M59 35h1M30 36h1M59 36h1M30 37h1M58 37h1M30 38h1M56 38h3M31 39h1M55 39h2M31 40h2M53 40h2M32 41h2M51 41h3M33 42h2M49 42h3M34 43h16"
          />
          <path
            stroke="#000000"
            d="M43 15h6M39 16h1M41 16h10M50 17h3M35 18h1M52 18h2M34 19h1M53 19h2M33 20h1M44 20h8M54 20h1M32 21h1M40 21h10M51 21h2M55 21h1M32 22h1M38 22h3M43 22h2M50 22h2M53 22h1M55 22h2M32 23h1M36 23h2M42 23h1M51 23h1M53 23h1M55 23h2M31 24h2M35 24h8M51 24h7M31 25h2M34 25h2M42 25h2M52 25h1M54 25h1M56 25h2M31 26h5M43 26h2M50 26h5M56 26h2M31 27h1M34 27h2M42 27h1M44 27h1M48 27h10M31 28h1M34 28h2M42 28h1M44 28h1M46 28h3M55 28h3M31 29h4M44 29h1M46 29h1M55 29h1M57 29h1M31 30h1M33 30h2M44 30h3M54 30h2M31 31h1M34 31h3M45 31h1M53 31h2M58 31h1M31 32h1M35 32h2M45 32h2M51 32h3M58 32h1M31 33h1M36 33h2M46 33h1M49 33h3M58 33h1M31 34h1M38 34h12M58 34h1M31 35h1M58 35h1M31 36h1M57 36h2M31 37h1M56 37h2M31 38h2M55 38h1M32 39h1M54 39h1M33 40h1M34 41h1M35 42h2M46 42h3"
          />
          <path stroke="#592b2b" d="M40 16h1M32 27h1M32 28h1M56 35h1M54 37h1" />
          <path stroke="#6e6e6e" d="M37 17h2M38 19h1M33 22h1" />
          <path stroke="#999999" d="M36 18h1M35 19h1M34 20h1" />
          <path
            stroke="#212121"
            d="M46 19h1M43 20h1M42 22h1M52 22h1M52 23h1M53 25h1M55 25h1M33 27h1"
          />
          <path
            stroke="#303030"
            d="M33 21h1M50 21h1M36 22h2M35 23h1M41 23h1M34 24h1M33 25h1M55 26h1M33 28h1"
          />
          <path stroke="#171717" d="M41 22h1M38 23h3" />
          <path
            stroke="#a1a1a1"
            d="M45 22h5M43 23h1M45 23h6M43 24h1M48 24h2M43 27h1M49 28h1M54 28h1M47 29h4M54 29h1M47 30h1M49 30h1M49 31h1"
          />
          <path
            stroke="#707070"
            d="M44 23h1M44 24h1M46 24h2M50 24h1M44 25h1M47 25h1M51 25h1M42 26h1M49 26h1M45 27h1M53 28h1M51 29h1M53 29h1M50 30h1"
          />
          <path
            stroke="#4e4e4e"
            d="M45 24h1M45 25h2M48 25h3M45 26h4M46 27h2M45 28h1M50 28h3M45 29h1M52 29h1M51 30h1"
          />
          <path stroke="#686868" d="M36 25h6M36 26h6M35 29h1M35 30h1" />
          <path stroke="#828282" d="M36 27h6M36 28h6" />
          <path
            stroke="#404040"
            d="M43 28h1M48 30h1M53 30h1M46 31h3M52 31h1M47 33h2"
          />
          <path stroke="#9b9b9b" d="M36 29h7M36 30h3M41 30h2M37 31h2M37 32h1" />
          <path stroke="#3e3e3e" d="M43 29h1M39 30h2M43 30h1M39 31h2M38 32h1" />
          <path
            stroke="#823737"
            d="M56 29h1M32 30h1M56 30h1M32 31h2M56 31h1M35 33h1M50 34h1M57 34h1M57 35h1M38 37h1M37 42h1"
          />
          <path stroke="#1f1f1f" d="M52 30h1M50 31h2" />
          <path
            stroke="#5a2626"
            d="M57 30h1M55 31h1M57 31h1M32 32h1M53 33h1M57 33h1M34 34h3M37 35h2M40 35h2M43 35h1M45 35h2M36 37h2M40 37h1M44 37h1M46 37h1M40 38h2M43 38h2M53 39h1M48 40h4M37 41h1M39 41h3M44 41h2M50 41h1M39 42h3M44 42h1"
          />
          <path stroke="#191919" d="M41 31h3M39 32h4" />
          <path stroke="#2d2d2d" d="M44 31h1M49 32h2M45 33h1" />
          <path
            stroke="#61372e"
            d="M33 32h1M56 34h1M53 35h2M33 36h2M54 36h1M33 37h2M51 37h1M36 38h1M49 38h2M33 39h1M35 40h2M35 41h2"
          />
          <path
            stroke="#341616"
            d="M34 32h1M37 34h1M36 35h1M49 35h1M40 36h1M32 37h1M38 42h1"
          />
          <path stroke="#040404" d="M43 32h1" />
          <path stroke="#0c0c0c" d="M44 32h1M43 33h2" />
          <path stroke="#1a1a1a" d="M47 32h1M38 33h1M41 33h1" />
          <path stroke="#121212" d="M48 32h1M39 33h2" />
          <path
            stroke="#3e1a1a"
            d="M54 32h1M51 34h1M35 36h1M45 37h1M49 37h1M37 38h1M45 38h2M37 39h1M39 39h3M44 39h2M43 41h1M47 41h2M43 42h1M45 42h1"
          />
          <path
            stroke="#240f0f"
            d="M55 32h1M57 32h1M34 33h1M52 33h1M53 34h1M39 35h1M47 35h1M50 35h2M37 36h2M56 36h1M35 37h1M39 37h1M41 37h1M43 37h1M47 37h1M47 39h1M52 40h1M38 41h1M42 41h1M42 42h1"
          />
          <path
            stroke="#180a0a"
            d="M56 32h1M32 33h1M54 33h1M34 35h2M42 35h1M44 36h1M46 36h1M55 37h1M38 38h2M36 39h1M38 39h1M42 39h1M44 40h2M46 41h1"
          />
          <path
            stroke="#271612"
            d="M33 33h1M56 33h1M55 34h1M33 35h1M52 37h1M33 38h3M51 38h1M35 39h1M50 39h1M34 40h1"
          />
          <path stroke="#070707" d="M42 33h1" />
          <path stroke="#090404" d="M55 33h1M52 35h1M42 36h1M47 36h1" />
          <path stroke="#050202" d="M32 34h1" />
          <path stroke="#0f0807" d="M33 34h1M32 35h1M52 38h1" />
          <path stroke="#060202" d="M52 34h1M42 40h1M46 40h1" />
          <path
            stroke="#110707"
            d="M54 34h1M45 36h1M47 38h1M53 38h2M46 39h1M51 39h2M41 40h1M43 40h1"
          />
          <path stroke="#190a0a" d="M44 35h1" />
          <path stroke="#140808" d="M48 35h1M39 36h1M34 39h1" />
          <path stroke="#1a0f0c" d="M55 35h1M48 39h2" />
          <path stroke="#0e0606" d="M32 36h1M36 36h1M41 36h1" />
          <path stroke="#0a0404" d="M43 36h1M42 37h1M42 38h1" />
          <path
            stroke="#2b1212"
            d="M48 36h2M51 36h1M48 37h1M50 37h1M43 39h1M49 41h1"
          />
          <path stroke="#1e0c0c" d="M50 36h1M48 38h1" />
          <path stroke="#080303" d="M52 36h1" />
          <path stroke="#432620" d="M53 36h1M53 37h1" />
          <path stroke="#180c0c" d="M55 36h1" />
          <path stroke="#0c0404" d="M37 40h1M39 40h2" />
          <path stroke="#040101" d="M38 40h1" />
          <path stroke="#231111" d="M47 40h1" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          shape-rendering="crispEdges"
          viewBox="30.5 13.5 29 30"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
          }}
        >
          <path
            stroke="#000000"
            d="M41 14h6M37 15h14M35 16h5M41 16h11M33 17h4M50 17h3M33 18h3M52 18h2M32 19h3M53 19h2M32 20h2M44 20h8M54 20h2M32 21h1M40 21h10M51 21h2M55 21h2M32 22h1M38 22h3M43 22h2M50 22h2M53 22h1M55 22h2M31 23h2M36 23h2M42 23h1M51 23h1M53 23h1M55 23h3M31 24h2M35 24h8M51 24h7M31 25h2M34 25h2M42 25h2M52 25h1M54 25h1M56 25h2M31 26h5M43 26h2M50 26h5M56 26h2M31 27h1M34 27h2M42 27h1M44 27h1M48 27h10M31 28h1M34 28h2M42 28h1M44 28h1M46 28h3M55 28h3M31 29h4M44 29h1M46 29h1M55 29h1M57 29h2M31 30h1M33 30h2M44 30h3M54 30h2M58 30h1M31 31h1M34 31h3M45 31h1M53 31h2M58 31h1M31 32h1M35 32h2M45 32h2M51 32h3M58 32h1M31 33h1M36 33h2M46 33h1M49 33h3M58 33h1M31 34h1M38 34h12M58 34h1M31 35h1M58 35h1M31 36h1M57 36h2M31 37h1M56 37h2M31 38h2M55 38h2M32 39h1M54 39h1M32 40h2M53 40h2M33 41h2M52 41h2M34 42h3M46 42h6M36 43h11"
          />
          <path stroke="#592b2b" d="M40 16h1M32 27h1M32 28h1M56 35h1M54 37h1" />
          <path stroke="#6e6e6e" d="M37 17h2M38 19h1M33 22h1" />
          <path stroke="#999999" d="M36 18h1M35 19h1M34 20h1" />
          <path
            stroke="#212121"
            d="M46 19h1M43 20h1M42 22h1M52 22h1M52 23h1M53 25h1M55 25h1M33 27h1"
          />
          <path
            stroke="#303030"
            d="M33 21h1M50 21h1M36 22h2M35 23h1M41 23h1M34 24h1M33 25h1M55 26h1M33 28h1"
          />
          <path stroke="#171717" d="M41 22h1M38 23h3" />
          <path
            stroke="#a1a1a1"
            d="M45 22h5M43 23h1M45 23h6M43 24h1M48 24h2M43 27h1M49 28h1M54 28h1M47 29h4M54 29h1M47 30h1M49 30h1M49 31h1"
          />
          <path
            stroke="#707070"
            d="M44 23h1M44 24h1M46 24h2M50 24h1M44 25h1M47 25h1M51 25h1M42 26h1M49 26h1M45 27h1M53 28h1M51 29h1M53 29h1M50 30h1"
          />
          <path
            stroke="#4e4e4e"
            d="M45 24h1M45 25h2M48 25h3M45 26h4M46 27h2M45 28h1M50 28h3M45 29h1M52 29h1M51 30h1"
          />
          <path stroke="#686868" d="M36 25h6M36 26h6M35 29h1M35 30h1" />
          <path stroke="#828282" d="M36 27h6M36 28h6" />
          <path
            stroke="#404040"
            d="M43 28h1M48 30h1M53 30h1M46 31h3M52 31h1M47 33h2"
          />
          <path stroke="#9b9b9b" d="M36 29h7M36 30h3M41 30h2M37 31h2M37 32h1" />
          <path stroke="#3e3e3e" d="M43 29h1M39 30h2M43 30h1M39 31h2M38 32h1" />
          <path
            stroke="#823737"
            d="M56 29h1M32 30h1M56 30h1M32 31h2M56 31h1M35 33h1M50 34h1M57 34h1M57 35h1M38 37h1M37 42h1"
          />
          <path stroke="#1f1f1f" d="M52 30h1M50 31h2" />
          <path
            stroke="#5a2626"
            d="M57 30h1M55 31h1M57 31h1M32 32h1M53 33h1M57 33h1M34 34h3M37 35h2M40 35h2M43 35h1M45 35h2M36 37h2M40 37h1M44 37h1M46 37h1M40 38h2M43 38h2M53 39h1M48 40h4M37 41h1M39 41h3M44 41h2M50 41h2M39 42h3M44 42h1"
          />
          <path stroke="#191919" d="M41 31h3M39 32h4" />
          <path stroke="#2d2d2d" d="M44 31h1M49 32h2M45 33h1" />
          <path
            stroke="#61372e"
            d="M33 32h1M56 34h1M53 35h2M33 36h2M54 36h1M33 37h2M51 37h1M36 38h1M49 38h2M33 39h1M35 40h2M35 41h2"
          />
          <path
            stroke="#341616"
            d="M34 32h1M37 34h1M36 35h1M49 35h1M40 36h1M32 37h1M38 42h1"
          />
          <path stroke="#040404" d="M43 32h1" />
          <path stroke="#0c0c0c" d="M44 32h1M43 33h2" />
          <path stroke="#1a1a1a" d="M47 32h1M38 33h1M41 33h1" />
          <path stroke="#121212" d="M48 32h1M39 33h2" />
          <path
            stroke="#3e1a1a"
            d="M54 32h1M51 34h1M35 36h1M45 37h1M49 37h1M37 38h1M45 38h2M37 39h1M39 39h3M44 39h2M43 41h1M47 41h2M43 42h1M45 42h1"
          />
          <path
            stroke="#240f0f"
            d="M55 32h1M57 32h1M34 33h1M52 33h1M53 34h1M39 35h1M47 35h1M50 35h2M37 36h2M56 36h1M35 37h1M39 37h1M41 37h1M43 37h1M47 37h1M47 39h1M52 40h1M38 41h1M42 41h1M42 42h1"
          />
          <path
            stroke="#180a0a"
            d="M56 32h1M32 33h1M54 33h1M34 35h2M42 35h1M44 36h1M46 36h1M55 37h1M38 38h2M36 39h1M38 39h1M42 39h1M44 40h2M46 41h1"
          />
          <path
            stroke="#271612"
            d="M33 33h1M56 33h1M55 34h1M33 35h1M52 37h1M33 38h3M51 38h1M35 39h1M50 39h1M34 40h1"
          />
          <path stroke="#070707" d="M42 33h1" />
          <path stroke="#090404" d="M55 33h1M52 35h1M42 36h1M47 36h1" />
          <path stroke="#050202" d="M32 34h1" />
          <path stroke="#0f0807" d="M33 34h1M32 35h1M52 38h1" />
          <path stroke="#060202" d="M52 34h1M42 40h1M46 40h1" />
          <path
            stroke="#110707"
            d="M54 34h1M45 36h1M47 38h1M53 38h2M46 39h1M51 39h2M41 40h1M43 40h1"
          />
          <path stroke="#190a0a" d="M44 35h1" />
          <path stroke="#140808" d="M48 35h1M39 36h1M34 39h1" />
          <path stroke="#1a0f0c" d="M55 35h1M48 39h2" />
          <path stroke="#0e0606" d="M32 36h1M36 36h1M41 36h1" />
          <path stroke="#0a0404" d="M43 36h1M42 37h1M42 38h1" />
          <path
            stroke="#2b1212"
            d="M48 36h2M51 36h1M48 37h1M50 37h1M43 39h1M49 41h1"
          />
          <path stroke="#1e0c0c" d="M50 36h1M48 38h1" />
          <path stroke="#080303" d="M52 36h1" />
          <path stroke="#432620" d="M53 36h1M53 37h1" />
          <path stroke="#180c0c" d="M55 36h1" />
          <path stroke="#0c0404" d="M37 40h1M39 40h2" />
          <path stroke="#040101" d="M38 40h1" />
          <path stroke="#231111" d="M47 40h1" />
          <path stroke="rgba(0,0,0,0.30196078431372547)" d="M47 43h1" />
        </svg>
      )}
      <PixelButton
        width="'100%"
        text="take"
        textSize="2vh"
        onClick={() => {
          if (disabled) return;
          if ((selectedHeap !== location && selectedHeap) || defaultStones <= 2)
            return;
          setSelectedHeap(location);
          const newHeap = [...heapsArray];
          if (defaultStones % 2 == 1)
            newHeap[location] = Math.max(1, newHeap[location] - 1);
          else {
            newHeap[location] = Math.max(
              1,
              newHeap[location] - 1 === defaultStones / 2
                ? newHeap[location] - 2
                : newHeap[location] - 1
            );
          }
          setHeapsArray(newHeap);
        }}
      />
      <Typography
        position={"absolute"}
        fontSize={20}
        color={"white"}
        style={{ userSelect: "none" }}
      >
        {heapsArray[location]}
      </Typography>
    </Grid>
  );
};

export default StonesHeap;
