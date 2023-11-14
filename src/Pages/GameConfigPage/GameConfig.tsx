import { FC, useState } from "react";
import { Grid, Typography } from "@mui/material";
import Moon from "../../assets/Moon";
import "../../assets/MovingCloud.css";
import PixelButton from "../../components/PixelButton";
import { GameType } from "../../Game";
import GrassBackGround from "../../assets/GrassBackGround";
import ChooseDifficulty from "../../components/ChooseDifficulty";
import Counter from "../../components/Counter";
import CheckBox from "../../components/CheckBox";

type GameConfigProps = {
  setCurrentPage: (nextPage: string) => void;
  game: GameType;
  setGame: (game: GameType) => void;
};

const GameConfig: FC<GameConfigProps> = ({ setCurrentPage, setGame, game }) => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>("easy");

  const handleLevelClick = (level: string) => {
    setSelectedLevel(level);
  };

  return (
    <Grid
      container
      alignContent={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      justifyItems={"center"}
      width={"100%"}
      height={"100%"}
      flexDirection={"column"}
      gap={"2%"}
    >
      {game.version === "v1" && <GrassBackGround width="110%" zIndex={-5} />}

      <Grid
        container
        position={"absolute"}
        height={"90%"}
        width={"57%"}
        zIndex={-3}
        bgcolor={"rgba(0,0,0,0.5)"}
        borderRadius={"3%"}
      ></Grid>

      <Typography
        top={"6%"}
        fontSize={"3vh"}
        style={{
          userSelect: "none",
          filter: "drop-shadow(1vh 1vh rgba(0, 0, 0))",
        }}
        color={"white"}
        position={"absolute"}
      >
        choose difficulty
      </Typography>

      <ChooseDifficulty
        version={game.version}
        setDifficulty={(hello: string) => {}}
        height="8%"
        top={"-16%"}
        position={"relative"}
      />

      <Counter
        version={game.version}
        height="15%"
        position={"relative"}
        top={"12%"}
      />

      <CheckBox
        version={game.version}
        position="relative"
        height="6%"
        top={"7%"}
        text="enable hints"
      />

      <CheckBox
        version={game.version}
        position="relative"
        height="6%"
        top={"7%"}
        text="enable redo"
      />

      <PixelButton
        color={"#298D72"}
        right={"5%"}
        bottom={"5%"}
        position={"absolute"}
        text="Start"
        onClick={() => {
          setCurrentPage("GamePlay");
        }}
      />
      <PixelButton
        color={"#99343b"}
        left={"5%"}
        bottom={"5%"}
        position={"absolute"}
        text="Back"
        onClick={() => {
          setCurrentPage("MainMenu");
        }}
      />
      {game.version === "v2" && (
        <Moon
          version={game.version}
          height="45%"
          position={"absolute"}
          right={"-5%"}
          top={"-15%"}
        />
      )}
    </Grid>
  );
};

export default GameConfig;
