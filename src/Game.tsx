import { Grid, ThemeProvider, createTheme } from "@mui/material";
import "./index.css";
import MainMenu from "./Pages/MainMenuPage/MainMenu";
import GamePlay from "./Pages/GamePlayPage/GamePlay";
import { useEffect, useState } from "react";
import ChooseVersion from "./Pages/ChooseVersionPage/ChooseVersion";
import GameConfig from "./Pages/GameConfigPage/GameConfig";

export type GameType = {
  version: string | null;
  gameConfig: {
    currentTurn: any;
    PlayerOnePoints: number;
    PlayerTwoPoints: number;
    currentGameState: any;
  };
  Settings: {
    masterVolume: number;
    musicVolume: number;
    SFXVolume: number;
  };
  GameCustomization: {
    numberOfRows: number;
    isTwoPlayer: boolean;
    isHintEnabled: boolean;
  };
};

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: '"Public Pixel", sans-serif;',
    },
  });

  const [currentPage, setCurrentPage] = useState("ChooseVersion");
  const [game, setGame] = useState<GameType>({
    version: null,
    gameConfig: {
      currentTurn: null,
      PlayerOnePoints: 0,
      PlayerTwoPoints: 0,
      currentGameState: null,
    },
    Settings: {
      masterVolume: 100,
      musicVolume: 100,
      SFXVolume: 100,
    },
    GameCustomization: {
      numberOfRows: 0,
      isTwoPlayer: false,
      isHintEnabled: false,
    },
  });

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
        {currentPage === "GamePlay" && (
          <GamePlay
            setCurrentPage={setCurrentPage}
            setGame={setGame}
            game={game}
          />
        )}
      </Grid>
    </ThemeProvider>
  );
};

export default App;
