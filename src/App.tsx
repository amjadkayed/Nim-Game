import { Grid, ThemeProvider, createTheme } from "@mui/material";
import "./index.css";
import MainMenu from "./Pages/MainMenuPage/MainMenu";
import GamePlay from "./Pages/GamePlayPage/GamePlay";
import { useState } from "react";
import Levels from "./Pages/Levels/Levels"

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: '"Public Pixel", sans-serif;',
    },
  });

  const [currentPage, setCurrentPage] = useState("MainMenu");
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
        {currentPage === "MainMenu" && (
          <MainMenu setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "Levels" && (
          <Levels setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "GamePlay" && (
          <GamePlay setCurrentPage={setCurrentPage} />
        )}
      </Grid>
    </ThemeProvider>
  );
};

export default App;

