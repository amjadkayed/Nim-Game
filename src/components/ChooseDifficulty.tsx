import { Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { newShade } from "../utils";
// @ts-ignore
import useSound from "use-sound";
import HoverOnButtonSound from "../Sounds/HoverOnButton.mp3";
import onButtonClickSound from "../Sounds/ButtonMouseClick.mp3";
import DifficultyIcon from "./DifficultyIcon";
import { GameType } from "../Game";

type ChooseDifficultyProps = {
  height?: string;
  width?: string;
  version: string | null;
  setGame: (game: any) => void;
  game: GameType;
  [key: string]: unknown;
};

const ChooseDifficulty: FC<ChooseDifficultyProps> = ({
  height = "auto",
  width = "auto",
  setGame,
  game,
  version,
  ...rest
}) => {
  const [mouseHover, setMouseHover] = useState<string | null>(null);

  const [playSoundOnHover] = useSound(HoverOnButtonSound);
  const [playSoundOnClick] = useSound(onButtonClickSound);

  let baseColor = "#8FBC8F";
  if (version === "v2") {
    baseColor = "#214e75";
  }
  const currentDifficulty = game.GameCustomization.difficulty;
  return (
    <Grid item height={height} width={width} zIndex={"20"} {...rest}>
      <DifficultyIcon
        height="40%"
        marginBottom={"1%"}
        position={"relative"}
        difficulty={game.GameCustomization.difficulty}
        version={version}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="crispEdges"
        viewBox="6.5 24.5 43 7"
        style={{
          position: "relative",
          display: "block",
          width: "100%",
          height: "25%",
        }}
      >
        <path
          stroke="#000000"
          d="M9 25h3M27 25h3M44 25h3M8 26h1M12 26h1M26 26h1M30 26h1M43 26h1M47 26h1M7 27h1M13 27h1M25 27h1M31 27h1M42 27h1M48 27h1M7 28h1M13 28h13M31 28h12M48 28h1M7 29h1M13 29h1M25 29h1M31 29h1M42 29h1M48 29h1M8 30h1M12 30h1M26 30h1M30 30h1M43 30h1M47 30h1M9 31h3M27 31h3M44 31h3"
        />
        <path
          stroke={
            currentDifficulty === "easy"
              ? "#fff5a6"
              : mouseHover === "easy"
              ? newShade(baseColor, 50)
              : baseColor
          }
          onMouseEnter={() => {
            setMouseHover("easy");
            playSoundOnHover();
          }}
          onMouseLeave={() => {
            setMouseHover(null);
          }}
          onClick={() => {
            setGame((game: GameType): GameType => {
              return {
                ...game,
                GameCustomization: {
                  ...game.GameCustomization,
                  difficulty: "easy",
                },
              };
            });
            playSoundOnClick();
          }}
          style={{
            cursor: "pointer",
          }}
          name="easy"
          d="M9 26h3M8 27h5M8 28h5M8 29h5M9 30h3"
        />
        <path
          stroke={
            currentDifficulty === "medium"
              ? "#fff5a6"
              : mouseHover === "medium"
              ? newShade(baseColor, 50)
              : baseColor
          }
          onMouseEnter={() => {
            playSoundOnHover();
            setMouseHover("medium");
          }}
          onMouseLeave={() => {
            setMouseHover(null);
          }}
          onClick={() => {
            setGame((game: GameType): GameType => {
              return {
                ...game,
                GameCustomization: {
                  ...game.GameCustomization,
                  difficulty: "medium",
                },
              };
            });
            playSoundOnClick();
          }}
          style={{
            cursor: "pointer",
          }}
          name="medium"
          d="M27 26h3M26 27h5M26 28h5M26 29h5M27 30h3"
        />
        <path
          stroke={
            currentDifficulty === "hard"
              ? "#fff5a6"
              : mouseHover === "hard"
              ? newShade(baseColor, 50)
              : baseColor
          }
          onMouseEnter={() => {
            playSoundOnHover();
            setMouseHover("hard");
          }}
          onMouseLeave={() => {
            setMouseHover(null);
          }}
          onClick={() => {
            setGame((game: GameType): GameType => {
              return {
                ...game,
                GameCustomization: {
                  ...game.GameCustomization,
                  difficulty: "hard",
                },
              };
            });
            playSoundOnClick();
          }}
          style={{
            cursor: "pointer",
          }}
          name="hard"
          d="M44 26h3M43 27h5M43 28h5M43 29h5M44 30h3"
        />
      </svg>
      <Typography
        color={"white"}
        fontSize={"4vh"}
        width={"100%"}
        textAlign={"center"}
        paddingTop={"3%"}
        style={{
          userSelect: "none",
        }}
      >
        {currentDifficulty}
      </Typography>
    </Grid>
  );
};

export default ChooseDifficulty;
