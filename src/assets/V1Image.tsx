import { Grid } from "@mui/material";
import { FC, useState } from "react";
// @ts-ignore
import useSound from "use-sound";
import HoverOnButtonSound from ".././Sounds/HoverOnButton.mp3";
import onButtonClickSound from ".././Sounds/ButtonMouseClick.mp3";

type V1ImageProps = {
  height?: string;
  width?: string;
  [key: string]: unknown;
};

const V1Image: FC<V1ImageProps> = ({
  height = "auto",
  width = "auto",
  ...rest
}) => {
  
  const [playSoundOnHover] = useSound(HoverOnButtonSound);
  const [playSoundOnClick] = useSound(onButtonClickSound);
  const [onHover, setOnHover] = useState(false);

  return (
    <Grid
      item
      height={height}
      width={width}
      display={"block"}
      position={"absolute"}
      onMouseEnter={() => {
        setOnHover(true);
        playSoundOnHover();
      }}
      onMouseLeave={() => {
        setOnHover(false);
        
      }}
      onMouseDown={() => {
        playSoundOnClick();
      }}
      style={{
        cursor: "pointer",
        filter: onHover ? "none" : " grayscale(100%)",
        transform: onHover ? "scale(1.1)" : "none",
        zIndex: onHover ? "0" : "3",
        transition: "transform .2s",
      }}
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="crispEdges"
        viewBox="-0.5 -0.5 51 50"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      >
        <path
          stroke="#ffeb3b"
          d="M0 0h9M0 1h9M0 2h9M0 3h9M0 4h9M0 5h8M0 6h6M0 7h5M0 8h5"
        />
        <path
          stroke="#ffff8d"
          d="M9 0h1M9 1h1M9 2h1M9 3h1M9 4h1M8 5h1M6 6h3M5 7h3M5 8h3M0 9h5"
        />
        <path
          stroke="#27f2db"
          d="M10 0h9M42 0h8M10 1h9M42 1h8M10 2h9M41 2h9M10 3h9M40 3h10M10 4h6M33 4h2M39 4h11M10 5h40M10 6h40M9 7h41M9 8h41M8 9h42M5 10h45M0 11h50M0 12h50M0 13h50M0 14h6M16 14h34M25 15h25"
        />
        <path
          stroke="#bfeeff"
          d="M19 0h1M25 0h1M39 0h3M19 1h1M23 1h2M33 1h2M38 1h4M19 2h1M21 2h4M32 2h9M19 3h6M30 3h10M19 4h14M35 4h4"
        />
        <path
          stroke="#e3f8ff"
          d="M20 0h5M26 0h1M32 0h7M20 1h3M25 1h2M32 1h1M35 1h3M20 2h1M25 2h7M25 3h5"
        />
        <path stroke="#ffffff" d="M27 0h5M27 1h5" />
        <path stroke="#f7f7f7" d="M16 4h2" />
        <path stroke="#a8e8ff" d="M18 4h1" />
        <path stroke="#ffff00" d="M9 5h1M9 6h1M8 7h1M8 8h1M5 9h3M0 10h5" />
        <path
          stroke="#4b632a"
          d="M6 14h10M0 15h13M17 15h5M0 16h11M14 16h2M22 16h5M32 16h6M39 16h1M41 16h9M0 17h7M11 17h5M22 17h5M33 17h6M40 17h10M0 18h5M9 18h6M23 18h3M36 18h3M41 18h9M0 19h3M6 19h6M24 19h1M35 19h5M41 19h9M0 20h2M5 20h4M13 20h2M34 20h16M0 21h20M24 21h5M34 21h16M0 22h16M21 22h6M32 22h18M0 23h16M22 23h1M25 23h2M33 23h17M0 24h15M22 24h4M34 24h16M0 25h14M24 25h1M35 25h15M0 26h9M13 26h2M35 26h15M0 27h5M16 27h2M26 27h4M34 27h16M0 28h4M5 28h17M23 28h8M32 28h4M41 28h9M0 29h36M37 29h13M1 30h36M41 30h9M1 31h13M15 31h26M43 31h7M3 32h7M11 32h3M15 32h22M38 32h3M42 32h1M45 32h5M2 33h8M12 33h22M40 33h4M45 33h5M1 34h8M13 34h4M25 34h25M1 35h5M11 35h1M13 35h4M23 35h3M28 35h22M0 36h6M12 36h2M23 36h4M31 36h19M0 37h5M12 37h3M25 37h24M0 38h4M13 38h3M25 38h16M42 38h7M0 39h5M16 39h2M25 39h24M0 40h9M14 40h5M24 40h5M32 40h17M0 41h8M15 41h4M25 41h4M30 41h1M35 41h14M0 42h8M15 42h3M25 42h1M27 42h12M40 42h9M0 43h7M27 43h11M40 43h9M0 44h8M16 44h2M27 44h21M0 45h8M10 45h2M16 45h6M27 45h9M38 45h10M0 46h11M13 46h13M27 46h9M37 46h11M0 47h48M0 48h39M41 48h7M0 49h1M2 49h28M32 49h3M37 49h3M43 49h1M46 49h1"
        />
        <path
          stroke="#2d3b19"
          d="M13 15h4M22 15h3M11 16h3M38 16h1M40 16h1M7 17h1M9 17h2M39 17h1M5 18h2M33 18h3M39 18h2M3 19h2M12 19h2M40 19h1M2 20h3M9 20h4M24 20h2M20 21h4M29 21h2M32 21h2M23 23h2M33 24h1M23 25h1M34 25h1M9 26h4M22 26h2M25 26h1M33 26h2M5 27h1M10 27h6M18 27h8M30 27h4M4 28h1M22 28h1M31 28h1M36 28h5M36 29h1M0 30h1M37 30h4M0 31h1M14 31h1M0 32h3M10 32h1M14 32h1M37 32h1M43 32h2M1 33h1M10 33h2M34 33h6M44 33h1M0 34h1M9 34h4M22 34h3M0 35h1M12 35h1M26 35h2M14 36h2M27 36h4M24 37h1M23 38h2M41 38h1M12 39h4M18 39h7M31 41h4M26 42h1M39 42h1M16 43h1M26 43h1M38 43h2M15 44h1M25 44h2M8 45h2M12 45h4M22 45h5M36 45h2M11 46h2M26 46h1M36 46h1M39 48h2M1 49h1M30 49h2M35 49h2M40 49h3M44 49h2"
        />
        <path
          stroke="#000000"
          d="M16 16h6M27 16h5M32 17h1M15 18h1M22 18h1M26 18h1M14 19h1M23 19h1M25 19h1M33 19h1M15 20h8M26 20h7M16 22h4M27 22h5M21 23h1M32 23h1M26 24h1M14 25h1M22 25h1M25 25h1M33 25h1M16 26h6M26 26h7M17 34h5M6 35h5M22 35h1M11 36h1M16 36h1M15 37h1M23 37h1M4 38h1M12 38h1M16 38h7M5 39h7M9 40h5M19 40h5M14 41h1M24 41h1M18 42h1M7 43h1M15 43h1M17 43h1M25 43h1M8 44h7M18 44h7"
        />
        <path stroke="#818975" d="M8 17h1M7 18h1M29 40h1M31 40h1" />
        <path stroke="#c8c8c8" d="M16 17h1M18 35h1M6 36h2M10 41h1" />
        <path
          stroke="#a4a4a4"
          d="M17 17h1M27 17h3M16 23h5M27 23h3M15 25h1M8 36h1M9 41h1M11 41h2M19 41h2"
        />
        <path
          stroke="#686868"
          d="M18 17h4M30 17h2M32 18h1M15 19h1M22 19h1M26 19h1M30 23h2M21 24h1M32 24h1M26 25h1M17 35h1M19 35h3M9 36h2M22 36h1M11 37h1M16 37h1M5 38h1M13 41h1M21 41h3M14 42h1M24 42h1M8 43h1M18 43h1"
        />
        <path
          stroke="#93a17f"
          d="M8 18h1M5 19h1M41 31h2M41 32h1M8 41h1M29 41h1"
        />
        <path
          stroke="#b4b4b4"
          d="M16 18h1M27 18h2M16 24h1M27 24h2M18 36h1M6 37h1M9 42h2M19 42h3"
        />
        <path
          stroke="#828282"
          d="M17 18h5M29 18h3M17 24h4M29 24h3M19 36h3M7 37h4M11 42h3M22 42h2"
        />
        <path
          stroke="#9b9b9b"
          d="M16 19h6M27 19h6M17 25h4M28 25h5M18 37h5M6 38h6M10 43h5M20 43h5"
        />
        <path
          stroke="#1b230f"
          d="M34 19h1M23 20h1M33 20h1M31 21h1M24 26h1M6 27h4M0 33h1"
        />
        <path stroke="#666666" d="M20 22h1M15 24h1M15 26h1M5 37h1M8 42h1" />
        <path stroke="#c3c3c3" d="M16 25h1M27 25h1M17 37h1M9 43h1M19 43h1" />
        <path stroke="#5d5d5d" d="M21 25h1" />
        <path stroke="#d2d2d2" d="M17 36h1" />
        <path stroke="#b3b8ac" d="M30 40h1" />
      </svg>
    </Grid>
  );
};

export default V1Image;
