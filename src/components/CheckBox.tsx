import { Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
// @ts-ignore
import useSound from "use-sound";
import { GameType } from "../Game";

type CheckBoxProps = {
  height?: string;
  width?: string;
  version: string | null;
  text?: string;
  path: string;
  setGame: (game: any) => void;
  game: GameType;
  [key: string]: unknown;
};

const CheckBox: FC<CheckBoxProps> = ({
  height = "auto",
  width = "auto",
  version,
  text,
  path,
  setGame,
  game,
  ...rest
}) => {
  const isSelected: boolean = (game.GameCustomization as any)?.[path];
  return (
    <Grid
      container
      height={height}
      width={"100%"}
      alignContent={"space-between"}
      justifyContent={"space-between"}
      alignItems={"space-between"}
      justifyItems={"space-between"}
      zIndex={25}
      {...rest}
    >
      <Typography
        fontSize={"3vh"}
        position={"relative"}
        color={"white"}
        style={{ userSelect: "none" }}
      >
        {text}
      </Typography>
      <Grid
        item
        height={"100%"}
        width={width}
        display={"inline"}
        paddingRight={"6%"}
        style={{ cursor: "pointer" }}
        onClick={() => {
          setGame((prevGame: GameType) => ({
            ...prevGame,
            GameCustomization: {
              ...prevGame.GameCustomization,
              [path]: !isSelected,
            },
          }));
        }}
      >
        {isSelected ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="crispEdges"
            viewBox="16.5 21.5 65 67"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              cursor: "pointer",
              zIndex: 30,
            }}
          >
            <path
              stroke="#ffffff"
              d="M66 22h11M61 23h16M52 24h26M40 25h38M23 26h55M18 27h60M18 28h60M18 29h60M18 30h39M64 30h14M17 31h28M63 31h15M17 32h11M62 32h16M17 33h7M61 33h17M17 34h7M60 34h18M17 35h7M59 35h11M71 35h7M17 36h7M58 36h11M71 36h7M18 37h7M57 37h11M71 37h7M18 38h7M56 38h11M71 38h7M18 39h7M55 39h11M71 39h7M18 40h7M54 40h11M71 40h6M18 41h7M54 41h10M71 41h6M19 42h7M53 42h10M71 42h6M19 43h7M52 43h10M71 43h6M19 44h7M51 44h10M71 44h6M19 45h7M50 45h10M71 45h6M19 46h7M49 46h11M71 46h6M19 47h7M48 47h11M71 47h6M20 48h6M47 48h11M71 48h6M20 49h6M47 49h10M71 49h6M20 50h7M46 50h10M71 50h6M20 51h7M45 51h10M71 51h6M20 52h7M44 52h10M71 52h6M20 53h10M44 53h9M71 53h6M20 54h10M43 54h10M71 54h6M21 55h10M42 55h10M71 55h6M21 56h10M41 56h10M71 56h7M21 57h10M41 57h9M71 57h7M21 58h11M40 58h10M71 58h7M21 59h12M39 59h10M71 59h7M21 60h12M39 60h9M71 60h7M21 61h13M38 61h9M72 61h6M21 62h14M38 62h9M72 62h6M21 63h14M37 63h9M72 63h7M21 64h24M72 64h7M21 65h24M72 65h7M21 66h6M28 66h16M72 66h7M21 67h7M29 67h15M72 67h7M21 68h7M29 68h14M73 68h6M21 69h7M30 69h12M73 69h7M21 70h7M30 70h11M73 70h7M21 71h7M30 71h11M73 71h7M22 72h6M31 72h9M73 72h7M21 73h7M31 73h9M73 73h7M21 74h7M31 74h8M74 74h7M21 75h7M32 75h7M74 75h7M21 76h7M32 76h7M74 76h7M21 77h7M32 77h6M54 77h18M73 77h8M21 78h6M47 78h34M21 79h6M42 79h39M21 80h6M33 80h48M21 81h60M21 82h60M21 83h38M67 83h12M21 84h31M21 85h26M21 86h17M22 87h11M22 88h7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="crispEdges"
            viewBox="16.5 21.5 65 67"
            style={{
              display: "block",
              width: "100%",
              cursor: "pointer",
              height: "100%",
            }}
          >
            <path
              stroke="#ffffff"
              d="M66 22h11M61 23h16M52 24h26M40 25h38M23 26h55M18 27h60M18 28h60M18 29h49M71 29h7M18 30h39M72 30h6M17 31h28M72 31h6M17 32h11M72 32h6M17 33h7M72 33h6M17 34h7M71 34h7M17 35h7M71 35h7M17 36h7M71 36h7M18 37h7M71 37h7M18 38h7M71 38h7M18 39h7M71 39h7M18 40h7M71 40h6M18 41h7M71 41h6M19 42h7M71 42h6M19 43h7M71 43h6M19 44h7M71 44h6M19 45h7M71 45h6M19 46h7M71 46h6M19 47h7M71 47h6M20 48h6M71 48h6M20 49h6M71 49h6M20 50h7M71 50h6M20 51h7M71 51h6M20 52h7M71 52h6M20 53h7M71 53h6M20 54h7M71 54h6M21 55h6M71 55h6M21 56h6M71 56h7M21 57h6M71 57h7M21 58h6M71 58h7M21 59h6M71 59h7M21 60h6M71 60h7M21 61h6M72 61h6M21 62h6M72 62h6M21 63h6M72 63h7M21 64h6M72 64h7M21 65h6M72 65h7M21 66h6M72 66h7M21 67h7M72 67h7M21 68h7M73 68h6M21 69h7M73 69h7M21 70h7M73 70h7M21 71h7M73 71h7M22 72h6M73 72h7M21 73h7M73 73h7M21 74h7M74 74h7M21 75h7M74 75h7M21 76h7M74 76h7M21 77h7M54 77h18M73 77h8M21 78h6M47 78h34M21 79h6M42 79h39M21 80h6M33 80h48M21 81h60M21 82h60M21 83h38M67 83h12M21 84h31M21 85h26M21 86h17M22 87h11M22 88h7"
            />
          </svg>
        )}
      </Grid>
    </Grid>
  );
};

export default CheckBox;
