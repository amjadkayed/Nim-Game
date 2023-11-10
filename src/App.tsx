import { Grid, ThemeProvider, createTheme } from "@mui/material";
import NimGameTitle from "./assets/NimGameTitle";
import Cloud1 from "./assets/Cloud1";
import PixelButton from "./components/PixelButton";
import "./index.css";

function App() {
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
        <PixelButton
          height="70px"
          color={"#99343b"}
          top={"300px"}
          position={"relative"}
          text="hello"
        />
        <NimGameTitle height="100px" />
        <Cloud1 height="50px" />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
