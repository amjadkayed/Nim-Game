import { Grid } from "@mui/material";
import Cloud1 from "../../assets/Cloud1";
import NimGameTitle from "../../assets/NimGameTitle";
import PixelButton from "../../components/PixelButton";
import Cloud2 from "../../assets/Cloud2";
import Moon from "../../assets/Moon";
import { FC, useEffect, useState, version } from "react";
import { GameType } from "../../Game";
import V1Background from "../../assets/V1Background";
import Sun from "../../assets/sun";
import Cloud3 from "../../assets/Cloud3";
import HelpModel from "../../components/Helpmodel";

type MainMenuProps = {
  setCurrentPage: (nextPage: string) => void;
  game: GameType;
  setGame: (game: GameType) => void;
};

const MainMenu: FC<MainMenuProps> = ({ setCurrentPage, setGame, game }) => {
  const [modalOpen, setModalOpen] = useState(false);

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
      {/* <Cloud1 height="20%" position={"absolute"} right={"10%"} bottom={"20%"} />
      <Cloud2 height="20%" position={"absolute"} left={"15%"} />
      <Cloud1 height="20%" position={"absolute"} right={"10%"} bottom={"20%"} />
      <Cloud2 height="20%" position={"absolute"} left={"50%"} />
      <Cloud2 height="20%" position={"absolute"} left={"50%"} />
      <Cloud1 height="20%" position={"absolute"} right={"50%"} bottom={"20%"} /> */}

      <NimGameTitle
        top={game.version === "v1" ? "10%" : "10%"}
        height={game.version === "v1" ? "20%" : "15%"}
        position={"relative"}
        version={game.version}
      />
      <PixelButton
        color={"#ff0000"}
        left={"5%"}
        bottom={"5%"}
        position={"absolute"}
        text="Choose Version"
        onClick={() => {
          setCurrentPage("ChooseVersion");
          setGame({ ...game, version: null });
        }}
      />
      <PixelButton
        color={"#298D72"}
        top={"13%"}
        position={"relative"}
        text="play"
        onClick={() => {
          setCurrentPage("GameConfig");
        }}
      />
      <PixelButton
        color={"#99343b"}
        top={"13%"}
        position={"relative"}
        text="help"
        onClick={() => {
          setModalOpen(true);
        }}
      />
      {modalOpen && <HelpModel setOpenModal={setModalOpen} version={game.version} />}
      <PixelButton
        color={"#9E9E9E"}
        top={"13%"}
        position={"relative"}
        text="settings"
      />
      {game.version === "v1" && (
        <>
          <V1Background width="110%" position={"absolute"} bottom={"-25%"} />
          <Sun height="45%" position={"absolute"} left={"-5%"} top={"-15%"} />
          <Cloud3 height="20%" position={"absolute"} top={"8%"} right={"10%"} />
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
          <Moon
            version={game.version}
            height="45%"
            position={"absolute"}
            left={"-5%"}
            top={"-15%"}
          />
        </>
      )}
    </Grid>
  );
};

export default MainMenu;
