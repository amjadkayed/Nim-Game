import { Grid } from "@mui/material";
import NimGameTitle from "./assets/NimGameTitle";

function App() {
  return (
    <Grid
      container
      alignContent={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      justifyItems={"center"}
      width={"100%"}
      height={"100%"}
    >
      <NimGameTitle height="50px" />
    </Grid>
  );
}

export default App;
