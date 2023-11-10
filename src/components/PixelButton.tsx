import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import useSound from "use-sound";
import HoverOnButtonSound from "../Sounds/HoverOnButton.mp3";
import "../index.css";

const newShade = (hexColor: string, magnitude: number) => {
  hexColor = hexColor.replace(`#`, ``);
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    return hexColor;
  }
};

type PixelButtonProps = {
  height?: string;
  width?: string;
  color?: string;
  text?: string;
  [key: string]: unknown;
};

const PixelButton: FC<PixelButtonProps> = ({
  height = "auto",
  width = "auto",
  color = "6b2429",
  text,
  ...rest
}) => {
  // const [onHover, setOnHconsole.log();over] = useState(false);
  const [play] = useSound(HoverOnButtonSound);
  return (
    <Grid
      item
      height={height}
      width={width}
      display={"block"}
      position={"absolute"}
      onClick={() => {}}
      onMouseOver={() => {
        console.log("asdad");
        play;
      }}
      {...rest}
    >
      <Grid
        container
        position={"absolute"}
        padding={0}
        height={"100%"}
        width={"100%"}
        alignContent={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        justifyItems={"center"}
      >
        <Typography color={"white"} fontSize={"16px"}>
          {text}
        </Typography>
      </Grid>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="crispEdges"
        viewBox="27.5 13.5 44 21"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      >
        <path
          stroke="#000000"
          d="M32 14h35M30 15h2M67 15h2M29 16h1M69 16h1M29 17h1M69 17h1M28 18h1M70 18h1M28 19h1M70 19h1M28 20h1M70 20h1M28 21h1M70 21h1M28 22h1M70 22h1M28 23h1M70 23h1M28 24h1M70 24h1M28 25h1M70 25h1M28 26h1M70 26h1M28 27h1M70 27h1M28 28h1M70 28h1M28 29h1M70 29h1M28 30h1M70 30h1M29 31h1M69 31h1M29 32h1M69 32h1M30 33h2M67 33h2M32 34h35"
        />
        <path
          stroke={newShade(color, 30)}
          d="M32 15h35M30 16h2M67 16h2M30 17h1M68 17h1M29 18h1M69 18h1"
        />
        <path
          stroke={color}
          d="M32 16h35M31 17h37M30 18h39M29 19h41M29 20h41M29 21h41M29 22h41M29 23h41M29 24h41M29 25h41M29 26h41M29 27h41M29 28h41M30 29h39M31 30h37M32 31h35"
        />
        <path
          stroke={newShade(color, -50)}
          d="M29 29h1M69 29h1M29 30h2M68 30h2M30 31h2M67 31h2M30 32h39M32 33h35"
        />
      </svg>
    </Grid>
  );
};

export default PixelButton;
