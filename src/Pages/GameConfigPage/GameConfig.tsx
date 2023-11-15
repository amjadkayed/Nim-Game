import { FC, useState } from "react";
import { Grid, Typography } from "@mui/material";
import Moon from "../../assets/Moon";
import "../../assets/MovingCloud.css";
import PixelButton from "../../components/PixelButton";
import { GameType } from "../../Game";
import GrassBackGround from "../../assets/GrassBackGround";
import ChooseDifficulty from "../../components/ChooseDifficulty";
import Counter from "../../components/Counter";
import CheckBox from "../../components/CheckBox";
import HeapCustomization from "../../components/HeapCustomization";

type GameConfigProps = {
  setCurrentPage: (nextPage: string) => void;
  game: GameType;
  setGame: (game: GameType) => void;
};

const GameConfig: FC<GameConfigProps> = ({ setCurrentPage, setGame, game }) => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>("easy");

  const handleLevelClick = (level: string) => {
    setSelectedLevel(level);
  };

  return (
    <Grid
      container
      alignContent={"center"}
      justifyContent={"center"}
      alignItems={"center"}
      justifyItems={"center"}
      width={"100%"}
      height={"100%"}
      flexDirection={"row"}
      // gap={"2%"}
    >
      {game.version === "v1" && (
        <GrassBackGround
          width="110%"
          zIndex={-15}
          style={{
            pointerEvents: "none",
          }}
        />
      )}

      <Grid
        container
        alignContent={"center"}
        justifyContent={"center"}
        alignItems={"center"}
        justifyItems={"center"}
        // position={"absolute"}
        height={"90%"}
        width={"57%"}
        padding={"4%"}
        // zIndex={-3}
        bgcolor={"rgba(0,0,0,0.5)"}
        borderRadius={"3%"}
      >
        <Grid
          container
          alignContent={"center"}
          justifyContent={"center"}
          alignItems={"center"}
          justifyItems={"center"}
          height={"100%"}
          width={"100%"}
        >
          {!game.GameCustomization.isTwoPlayer && (
            <>
              <Typography
                textAlign={"center"}
                height={"10%"}
                width={"100%"}
                fontSize={"3vh"}
                style={{
                  userSelect: "none",
                  filter: "drop-shadow(1vh 1vh rgba(0, 0, 0))",
                }}
                color={"white"}
              >
                choose difficulty
              </Typography>
              <ChooseDifficulty
                version={game.version}
                setDifficulty={(hello: string) => {}}
                height="40%"
              />
            </>
          )}

          {game.version === "v1" && (
            <HeapCustomization height="13%" width='100%' position={"relative"} />
          )}
          {game.version === "v2" && (
            <Counter version={game.version} height="15%" />
          )}

          <CheckBox
            version={game.version}
            position="relative"
            height="6%"
            marginBottom={"4%"}
            text="enable hints"
          />

          <CheckBox
            version={game.version}
            position="relative"
            height="6%"
            marginBottom={"4%"}
            text="enable takeback"
          />

          <PixelButton
            color={"#298D72"}
            right={"5%"}
            bottom={"5%"}
            position={"absolute"}
            text="Start"
            onClick={() => {
              setCurrentPage("GamePlay");
            }}
          />
          <PixelButton
            color={"#99343b"}
            left={"5%"}
            bottom={"5%"}
            position={"absolute"}
            text="Back"
            onClick={() => {
              setCurrentPage("MainMenu");
            }}
          />
          {game.version === "v2" && (
            <Moon
              version={game.version}
              height="45%"
              position={"absolute"}
              right={"-5%"}
              top={"-15%"}
            />
          )}
        </Grid>
        <Grid
          container
          width={"100%"}
          marginBottom={"5%"}
          justifyContent={"center"}
          gap={"5%"}
        >
          <PixelButton
            color={"#1037b5"}
            position={"relative"}
            text={
              game.GameCustomization.isTwoPlayer ? "One Player" : "two Players"
            }
            width="28%"
            onClick={() => {
              setGame({
                ...game,
                GameCustomization: {
                  ...game.GameCustomization,
                  isTwoPlayer: !game.GameCustomization.isTwoPlayer,
                },
              });
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GameConfig;
