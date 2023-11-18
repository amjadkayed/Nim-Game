import { Grid, ThemeProvider, createTheme } from "@mui/material";
import "./index.css";
import MainMenu from "./Pages/MainMenuPage/MainMenu";
import V2GamePlay from "./Pages/GamePlayPage/V2GamePlay";
import { useEffect, useState } from "react";
import ChooseVersion from "./Pages/ChooseVersionPage/ChooseVersion";
import GameConfig from "./Pages/GameConfigPage/GameConfig";
import { GameStateDefault } from "./utils";
import V1GamePlay from "./Pages/GamePlayPage/V1GamePlay";

export type GameType = {
  version: string | null;
  gameConfig: {
    currentTurn: any;
    PlayerOnePoints: number;
    PlayerTwoPoints: number;
    v1CurrentGameState: number[];
    v2CurrentGameState: number[];
  };
  Settings: {
    masterVolume: number;
    musicVolume: number;
    SFXVolume: number;
  };
  GameCustomization: {
    v1InitGameState: number[];
    v2NumberOfRows: number;
    isTwoPlayer: boolean;
    isHintEnabled: boolean;
    isTakeBackEnabled: boolean;
    difficulty: string;
  };
};

const Game = () => {
  const theme = createTheme({
    typography: {
      fontFamily: '"Public Pixel", sans-serif;',
    },
  });

  const [currentPage, setCurrentPage] = useState("ChooseVersion");

  const [game, setGame] = useState<GameType>(GameStateDefault);

  useEffect(() => {
    if (game.version === "v1") {
      if (currentPage === "GameConfig") {
        document.body.style.backgroundColor = "#4b632a";
      } else document.body.style.backgroundColor = "#27F2DB";
    } else if (game.version === "v2") {
      document.body.style.backgroundColor = "#1b0c3b";
    } else {
      document.body.style.backgroundColor = "#000000";
    }
  }, [currentPage]);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        alignContent={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        justifyItems={"center"}
        width={"100%"}
        height={"100%"}
        position={"relative"}
      >
        {currentPage === "ChooseVersion" && (
          <ChooseVersion
            setGame={setGame}
            game={game}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === "MainMenu" && (
          <MainMenu
            setCurrentPage={setCurrentPage}
            setGame={setGame}
            game={game}
          />
        )}
        {currentPage === "GameConfig" && (
          <GameConfig
            setCurrentPage={setCurrentPage}
            setGame={setGame}
            game={game}
          />
        )}
        {currentPage === "V2GamePlay" && (
          <V2GamePlay
            setCurrentPage={setCurrentPage}
            setGame={setGame}
            game={game}
          />
        )}
        {currentPage === "V1GamePlay" && (
          <V1GamePlay
            setCurrentPage={setCurrentPage}
            setGame={setGame}
            game={game}
          />
        )}
      </Grid>
    </ThemeProvider>
  );
};

export default Game;
