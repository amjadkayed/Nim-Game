import { Grid, Typography } from "@mui/material";
import V1Image from "../../assets/V1Image";
import V2Image from "../../assets/V2Image";
import Splitter from "../../assets/Splitter";
import { FC } from "react";
import { GameType } from "../../Game";

type ChooseVersionProps = {
  setCurrentPage: (nextPage: string) => void;
  game: GameType;
  setGame: (game: GameType) => void;
};

const ChooseVersion: FC<ChooseVersionProps> = ({
  setCurrentPage,
  setGame,
  game,
}) => {
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
    >
      <V1Image
        width="50%"
        left={"-0.5%"}
        onClick={() => {
          setGame({ ...game, version: "v1" });
          setCurrentPage("MainMenu");
        }}
      />
      <V2Image
        width="50%"
        right={"-0.5%"}
        onClick={() => {
          setGame({ ...game, version: "v2" });
          setCurrentPage("MainMenu");
        }}
      />
      <Splitter width="15%" position={"relative"} left={"2%"} />
      <Typography
        position={"absolute"}
        fontSize={"7vh"}
        fontWeight={"bold"}
        color={"white"}
        style={{
          textShadow: "2vh 2vh  #000000",
          zIndex: 10,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        choose version
      </Typography>
    </Grid>
  );
};

export default ChooseVersion;
