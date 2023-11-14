import { Grid } from "@mui/material";
import { FC, useState } from "react";
// @ts-ignore
import useSound from "use-sound";
import HoverOnButtonSound from ".././Sounds/HoverOnButton.mp3";
import onButtonClickSound from ".././Sounds/ButtonMouseClick.mp3";

type V2ImageProps = {
  height?: string;
  width?: string;
  [key: string]: unknown;
};

const V2Image: FC<V2ImageProps> = ({
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
        viewBox="50.5 -0.5 50 50"
        style={{
          display: "block",
          width: "100%",
          zIndex: onHover ? "0" : "3",
          height: "100%",
        }}
      >
        <path
          stroke="#351b47"
          d="M55 0h24M80 0h6M55 1h31M55 2h4M60 2h21M82 2h4M55 3h1M57 3h19M79 3h7M55 4h19M79 4h7M55 5h17M73 5h1M79 5h8M55 6h5M61 6h3M65 6h9M80 6h4M85 6h2M55 7h19M80 7h8M55 8h20M79 8h9M52 9h23M79 9h10M52 10h24M78 10h12M52 11h6M59 11h17M78 11h13M52 12h24M78 12h15M52 13h22M75 13h1M78 13h17M52 14h10M63 14h13M78 14h9M88 14h12M52 15h24M78 15h4M83 15h17M52 16h48M52 17h33M86 17h6M93 17h7M52 18h18M72 18h4M78 18h4M84 18h1M86 18h11M98 18h2M52 19h7M60 19h10M72 19h4M78 19h4M84 19h7M92 19h8M52 20h8M61 20h9M72 20h4M78 20h4M84 20h13M98 20h2M52 21h18M72 21h4M78 21h4M84 21h16M52 22h11M64 22h6M72 22h1M74 22h2M78 22h4M84 22h16M52 23h18M72 23h4M78 23h4M84 23h16M52 24h18M72 24h4M78 24h4M84 24h16M51 25h19M72 25h4M78 25h4M84 25h16M51 26h19M72 26h4M78 26h4M84 26h3M88 26h12M51 27h19M72 27h4M78 27h4M84 27h4M89 27h11M51 28h6M58 28h12M72 28h4M78 28h4M84 28h10M95 28h5M51 29h22M74 29h20M95 29h5M51 30h17M69 30h31M51 31h14M67 31h3M72 31h4M78 31h4M84 31h3M89 31h2M92 31h8M51 32h14M67 32h3M72 32h4M78 32h4M84 32h3M89 32h11M51 33h14M67 33h3M72 33h4M78 33h4M84 33h3M89 33h8M98 33h2M51 34h14M67 34h3M72 34h4M78 34h4M84 34h3M89 34h11M51 35h8M60 35h5M67 35h3M72 35h4M78 35h4M84 35h3M89 35h11M51 36h14M67 36h3M72 36h4M78 36h4M84 36h3M89 36h11M51 37h14M67 37h3M72 37h4M78 37h4M84 37h3M89 37h11M51 38h14M67 38h3M72 38h4M78 38h4M84 38h3M89 38h6M96 38h4M51 39h14M67 39h3M72 39h4M78 39h4M84 39h3M89 39h11M51 40h14M67 40h3M72 40h4M78 40h4M84 40h3M89 40h11M51 41h2M54 41h11M67 41h3M72 41h4M78 41h4M84 41h3M89 41h10M51 42h49M51 43h15M67 43h21M89 43h11M51 44h9M62 44h3M67 44h3M72 44h4M79 44h3M84 44h3M89 44h3M94 44h6M51 45h3M56 45h4M62 45h3M67 45h3M72 45h4M78 45h4M84 45h3M89 45h3M94 45h1M96 45h4M51 46h9M62 46h3M67 46h3M72 46h4M78 46h4M84 46h3M89 46h3M94 46h6M51 47h9M62 47h3M67 47h3M72 47h4M78 47h4M84 47h3M89 47h3M94 47h6M51 48h9M62 48h3M67 48h3M72 48h4M78 48h4M84 48h3M89 48h3M94 48h2M97 48h1M99 48h1M51 49h6M58 49h2M62 49h3M67 49h3M72 49h4M78 49h4M84 49h3M89 49h3M94 49h6"
        />
        <path
          stroke="#1f102a"
          d="M79 0h1M59 2h1M64 6h1M84 6h1M92 17h1M97 18h1M60 20h1M88 27h1M94 28h1M94 29h1M95 38h1M53 41h1M95 45h1M96 48h1"
        />
        <path
          stroke="#9e9e9e"
          d="M86 0h1M92 0h1M97 0h2M86 1h1M92 1h3M97 1h3M86 2h1M94 2h4M99 2h1M86 3h1M95 3h3M99 3h1M86 4h2M95 4h3M99 4h1M87 5h2M94 5h5M87 6h2M98 6h1M88 7h3M98 7h1M88 8h4M98 8h2M89 9h3M97 9h2M90 10h3M96 10h2M99 10h1M91 11h7M99 11h1M93 12h4M98 12h2M95 13h1M97 13h3"
        />
        <path
          stroke="#757575"
          d="M87 0h2M93 0h4M99 0h1M87 1h2M91 1h1M95 1h2M87 2h2M92 2h2M87 3h2M94 3h1M88 4h2M93 4h2M89 5h2M93 5h1M89 6h3M93 6h5M91 7h4M97 7h1M92 8h2M97 8h1M92 9h2M95 9h2M93 10h3"
        />
        <path
          stroke="#616161"
          d="M89 0h3M89 1h2M89 2h3M89 3h5M90 4h3M91 5h2M92 6h1M95 7h2M94 8h3M94 9h1"
        />
        <path
          stroke="#857690"
          d="M81 2h1M56 3h1M72 5h1M60 6h1M58 11h1M74 13h1M62 14h1M87 14h1M82 15h1M85 17h1M59 19h1M91 19h1M97 20h1M63 22h1M73 22h1M87 26h1M57 28h1M73 29h1M68 30h1M91 31h1M97 33h1M59 35h1M99 41h1M66 43h1M88 43h1M78 44h1M54 45h2M98 48h1M57 49h1"
        />
        <path
          stroke="#bdbdbd"
          d="M98 2h1M98 3h1M98 4h1M99 5h1M99 6h1M99 7h1M99 9h1M98 10h1M98 11h1M97 12h1M96 13h1"
        />
        <path stroke="#ffeb3b" d="M76 3h3M76 4h1M78 4h1M76 9h1" />
        <path stroke="#b2a429" d="M74 4h1M79 6h1M74 7h1M75 9h1" />
        <path stroke="#b2a852" d="M75 4h1" />
        <path stroke="#f77c73" d="M77 4h1" />
        <path stroke="#ff9800" d="M74 5h1" />
        <path stroke="#ffcd83" d="M75 5h1" />
        <path stroke="#b23d18" d="M76 5h1M77 6h1M78 8h1" />
        <path stroke="#ff5722" d="M77 5h1" />
        <path stroke="#fff176" d="M78 5h1M78 6h1" />
        <path stroke="#b26a00" d="M74 6h1M75 7h1M78 7h1" />
        <path stroke="#ffb74d" d="M75 6h1" />
        <path stroke="#7c2b11" d="M76 6h1M78 9h1" />
        <path stroke="#573400" d="M76 7h1M77 8h1" />
        <path stroke="#ac5750" d="M77 7h1" />
        <path stroke="#7c721d" d="M79 7h1M75 8h1" />
        <path stroke="#3d2400" d="M76 8h1" />
        <path stroke="#2b0f06" d="M77 9h1" />
        <path
          stroke="#9a7b4d"
          d="M76 10h1M76 11h1M70 22h1M76 22h1M82 22h1M70 23h1M76 23h1M82 23h1M65 35h1M70 35h1M76 35h1M82 35h1M87 35h1M65 36h1M70 36h1M76 36h1M82 36h1M87 36h1M60 48h1M65 48h1M70 48h1M76 48h1M82 48h1M87 48h1M92 48h1M60 49h1M65 49h1M70 49h1M76 49h1M82 49h1M87 49h1M92 49h1"
        />
        <path
          stroke="#624e32"
          d="M77 10h1M76 14h1M71 20h1M77 20h1M83 20h1M71 21h1M77 21h1M83 21h1M71 22h1M77 22h1M83 22h1M70 26h1M76 26h1M82 26h1M66 33h1M71 33h1M77 33h1M83 33h1M88 33h1M66 34h1M71 34h1M77 34h1M83 34h1M88 34h1M66 35h1M71 35h1M77 35h1M83 35h1M88 35h1M65 39h1M70 39h1M76 39h1M82 39h1M87 39h1M61 46h1M66 46h1M71 46h1M77 46h1M83 46h1M88 46h1M93 46h1M61 47h1M66 47h1M71 47h1M77 47h1M83 47h1M88 47h1M93 47h1M61 48h1M66 48h1M71 48h1M77 48h1M83 48h1M88 48h1M93 48h1"
        />
        <path
          stroke="#4e3e28"
          d="M77 11h1M71 23h1M77 23h1M83 23h1M71 27h1M77 27h1M83 27h1M66 36h1M71 36h1M77 36h1M83 36h1M88 36h1M66 40h1M71 40h1M77 40h1M83 40h1M88 40h1M61 49h1M66 49h1M71 49h1M77 49h1M83 49h1M88 49h1M93 49h1"
        />
        <path
          stroke="#7b623e"
          d="M76 12h1M76 13h1M70 24h1M76 24h1M82 24h1M70 25h1M76 25h1M82 25h1M65 37h1M70 37h1M76 37h1M82 37h1M87 37h1M65 38h1M70 38h1M76 38h1M82 38h1M87 38h1"
        />
        <path
          stroke="#3e3220"
          d="M77 12h1M77 13h1M77 14h1M76 15h1M71 24h1M77 24h1M83 24h1M71 25h1M77 25h1M83 25h1M71 26h1M77 26h1M83 26h1M70 27h1M76 27h1M82 27h1M70 28h1M76 28h1M82 28h1M66 37h1M71 37h1M77 37h1M83 37h1M88 37h1M66 38h1M71 38h1M77 38h1M83 38h1M88 38h1M66 39h1M71 39h1M77 39h1M83 39h1M88 39h1M65 40h1M70 40h1M76 40h1M82 40h1M87 40h1M65 41h1M70 41h1M76 41h1M82 41h1M87 41h1"
        />
        <path
          stroke="#282015"
          d="M77 15h1M71 28h1M77 28h1M83 28h1M66 41h1M71 41h1M77 41h1M83 41h1M88 41h1"
        />
        <path
          stroke="#ff334e"
          d="M70 18h1M76 18h1M82 18h1M65 31h1M70 31h1M76 31h1M82 31h1M87 31h1M60 44h1M65 44h1M70 44h1M76 44h1M82 44h1M87 44h1M92 44h1"
        />
        <path
          stroke="#a30016"
          d="M71 18h1M77 18h1M83 18h1M66 31h1M71 31h1M77 31h1M83 31h1M88 31h1M61 44h1M66 44h1M71 44h1M77 44h1M83 44h1M88 44h1M93 44h1"
        />
        <path stroke="#504656" d="M85 18h1" />
        <path
          stroke="#9b3341"
          d="M70 19h1M76 19h1M82 19h1M65 32h1M70 32h1M76 32h1M82 32h1M87 32h1M60 45h1M65 45h1M70 45h1M76 45h1M82 45h1M87 45h1M92 45h1"
        />
        <path
          stroke="#820012"
          d="M71 19h1M77 19h1M83 19h1M66 32h1M71 32h1M77 32h1M83 32h1M88 32h1M61 45h1M66 45h1M71 45h1M77 45h1M83 45h1M88 45h1M93 45h1"
        />
        <path
          stroke="#ae9571"
          d="M70 20h1M76 20h1M82 20h1M70 21h1M76 21h1M82 21h1M65 33h1M70 33h1M76 33h1M82 33h1M87 33h1M65 34h1M70 34h1M76 34h1M82 34h1M87 34h1M60 46h1M65 46h1M70 46h1M76 46h1M82 46h1M87 46h1M92 46h1M60 47h1M65 47h1M70 47h1M76 47h1M82 47h1M87 47h1M92 47h1"
        />
      </svg>
    </Grid>
  );
};

export default V2Image;
