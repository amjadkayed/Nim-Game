import { Grid, ThemeProvider, createTheme } from "@mui/material";
import "./index.css";
import MainMenu from "./Pages/MainMenuPage/MainMenu";
import Levels from "./Pages/MainMenuPage/Levels"

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: '"Public Pixel", sans-serif;',
    },
  });

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
        {/* <MainMenu /> */}
        <Levels/>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
