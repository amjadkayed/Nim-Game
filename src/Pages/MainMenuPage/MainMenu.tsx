import { Grid } from "@mui/material";
import Cloud1 from "../../assets/Cloud1";
import NimGameTitle from "../../assets/NimGameTitle";
import PixelButton from "../../components/PixelButton";
import Cloud2 from "../../assets/Cloud2";
import Moon from "../../assets/Moon";
import { FC, useEffect } from "react";
import { GameType } from "../../Game";
import V1Background from "../../assets/V1Background";

type MainMenuProps = {
  setCurrentPage: (nextPage: string) => void;
  game: GameType;
  setGame: (game: GameType) => void;
};

const MainMenu: FC<MainMenuProps> = ({ setCurrentPage, setGame, game }) => {
  useEffect(() => {
    if (game.version === "v1") {
      document.body.style.backgroundColor = "#27F2DB";
    } else if (game.version === "v2") {
      document.body.style.backgroundColor = "#1b0c3b";
    }
  }, []);

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
      <Cloud1 height="20%" position={"absolute"} right={"10%"} bottom={"20%"} />
      <Cloud2 height="20%" position={"absolute"} left={"15%"} />
      <Cloud1 height="20%" position={"absolute"} right={"10%"} bottom={"20%"} />
      <Cloud2 height="20%" position={"absolute"} left={"50%"} />
      <Cloud2 height="20%" position={"absolute"} left={"50%"} />
      <Cloud1 height="20%" position={"absolute"} right={"50%"} bottom={"20%"} />

      <NimGameTitle
        top={game.version === "v1" ? "10%" : "10%"}
        height={game.version === "v1" ? "20%" : "15%"}
        position={"relative"}
        version={game.version}
      />

      <PixelButton
        color={"#298D72"}
        top={"13%"}
        position={"relative"}
        text="play"
        onClick={() => {
          setCurrentPage("Levels");
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
      {game.version === "v1" && (
        <>
          <V1Background width="110%" position={"absolute"} bottom={"-25%"} />
        </>
      )}
      {game.version === "v2" && (
        <>
          <Cloud1
            height="20%"
            position={"absolute"}
            right={"10%"}
            bottom={"20%"}
          />
          <Cloud2 height="20%" position={"absolute"} left={"15%"} />
          <Moon height="45%" position={"absolute"} left={"-5%"} top={"-15%"} />
        </>
      )}
    </Grid>
  );
};

export default MainMenu;
