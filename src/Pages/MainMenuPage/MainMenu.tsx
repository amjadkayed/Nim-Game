import { Grid } from "@mui/material";
import Cloud1 from "../../assets/Cloud1";
import NimGameTitle from "../../assets/NimGameTitle";
import PixelButton from "../../components/PixelButton";
import Cloud2 from "../../assets/Cloud2";
import Moon from "../../assets/Moon";
import { FC } from "react";

type MainMenuProps = {
  setCurrentPage: (nextPage: string) => void;
};

const MainMenu: FC<MainMenuProps> = ({ setCurrentPage }) => {
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
      <NimGameTitle top={"10%"} height="15%" position={"relative"} />
      <PixelButton
        color={"#298D72"}
        top={"13%"}
        position={"relative"}
        text="play"
        onClick={() => {
          setCurrentPage("GamePlay");
        }}
      />
      <PixelButton
        color={"#99343b"}
        top={"13%"}
        position={"relative"}
        text="help"
      />
      <PixelButton
        color={"#9E9E9E"}
        top={"13%"}
        position={"relative"}
        text="settings"
      />
      <Cloud1 height="20%" position={"absolute"} right={"10%"} bottom={"20%"} />
      <Cloud2 height="20%" position={"absolute"} left={"15%"} />
      <Moon height="45%" position={"absolute"} left={"-5%"} top={"-15%"} />
    </Grid>
  );
};

export default MainMenu;
