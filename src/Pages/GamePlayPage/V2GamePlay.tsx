import { FC, useEffect, useState } from "react";
import PixelButton from "../../components/PixelButton";
import Matchstick from "../../assets/Matchstick";
import { Grid } from "@mui/material";
import { GameType } from "../../Game";
// @ts-ignore
import useSound from "use-sound";
import OnMatchstickBurn from "../../Sounds/onMatchBurn.mp3";
import ScoreBoard from "../../components/ScoreBoard";
import { GameStateDefault } from "../../utils";

type V2GamePlayProps = {
  setCurrentPage: (nextPage: string) => void;
  game: GameType;
  setGame: (game: any) => void;
};

const V2GamePlay: FC<V2GamePlayProps> = ({ setCurrentPage, setGame, game }) => {
  const [playMatchstickBurnSound] = useSound(OnMatchstickBurn);
  const numberOffRows = game.GameCustomization.v2NumberOfRows + 1;

  const [matchstickRows, setMatchstickRows] = useState<any>([]);
  const [availableMatchstickRows, setAvailableMatchstickRows] = useState<
    { row: number; index: number }[]
  >([]);
  const [selectedMatchsticks, setSelectedMatchsticks] = useState<
    { row: number; index: number }[]
  >([]);

  useEffect(() => {
    const newRows = [];
    let prev = -1;
    const availableMatchstickRow: { row: number; index: number }[] = [];
    for (let i = 0; i < numberOffRows; i++, prev += 2) {
      newRows.push(prev);
      for (let q = 0; q < prev; q++) {
        availableMatchstickRow.push({ row: i, index: q });
      }
    }
    setAvailableMatchstickRows([...availableMatchstickRow]);
    setMatchstickRows([...newRows]);
  }, []);

  useEffect(() => {
    if (availableMatchstickRows.length === 1) {
      setGame(
        (prev: GameType): GameType => ({
          ...prev,
          gameConfig: {
            ...prev.gameConfig,
            PlayerOnePoints:
              prev.gameConfig.PlayerOnePoints +
              (prev.gameConfig.currentTurn !== "p1" ? 1 : 0),

            PlayerTwoPoints:
              prev.gameConfig.PlayerTwoPoints +
              (prev.gameConfig.currentTurn !== "p2" ? 1 : 0),
          },
        })
      );
      // winner
      console.log(
        "winner is ",
        game.gameConfig.currentTurn === "p2" ? "p1" : "p2"
      );
    }
  }, [availableMatchstickRows.length]);

  useEffect(() => {
    if (game.GameCustomization.isTwoPlayer) {
      return;

      // ai and delays and disabling buttons should be here
    }
  }, [game.gameConfig.currentTurn]);

  const isMatchBurnt = (rowNumber: number, index: number): boolean => {
    for (let i = 0; i < availableMatchstickRows.length; i++) {
      if (
        availableMatchstickRows[i].row === rowNumber &&
        availableMatchstickRows[i].index === index
      ) {
        return false;
      }
    }
    return true;
  };

  const handleOnPlay = () => {
    if (selectedMatchsticks.length > 0) {
      setAvailableMatchstickRows((prev: any) => [
        ...prev.filter((item: any) => {
          for (let i = 0; i < selectedMatchsticks.length; i++) {
            if (
              selectedMatchsticks[i].row === item.row &&
              selectedMatchsticks[i].index === item.index
            ) {
              return false;
            }
          }
          return true;
        }),
      ]);
      setGame(
        (prev: GameType): GameType => ({
          ...prev,
          gameConfig: {
            ...prev.gameConfig,
            currentTurn: prev.gameConfig.currentTurn === "p1" ? "p2" : "p1",
          },
        })
      );
      setSelectedMatchsticks([]);
      playMatchstickBurnSound();
    }
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
      flexDirection={"column"}
    >
      <ScoreBoard
        p1Name="Player 1 "
        p1Points={game.gameConfig.PlayerOnePoints}
        p2Name="player 2"
        p2Points={game.gameConfig.PlayerTwoPoints}
        currentTurn={game.gameConfig.currentTurn}
      />

      {matchstickRows.length > 0 &&
        matchstickRows?.map((value: any, index: any) => {
          const matchstickRow = [];
          for (let i = 0; i < value; i++) {
            matchstickRow.push(
              <Matchstick
                key={`${index},${i}`}
                height="100%"
                width={`${20 / numberOffRows}%`}
                location={{ row: index, index: i }}
                selectedMatchsticks={selectedMatchsticks}
                setSelectedMatchsticks={setSelectedMatchsticks}
                isBurnt={isMatchBurnt(index, i)}
              />
            );
          }
          return (
            <Grid
              container
              alignContent={"center"}
              justifyContent={"center"}
              alignItems={"center"}
              justifyItems={"center"}
              width={"100%"}
              height={`${80 / numberOffRows}%`}
              key={index}
              marginBottom={`1%`}
              flexDirection={"row"}
            >
              {matchstickRow}
            </Grid>
          );
        })}
      <PixelButton
        position={"absolute"}
        height="13%"
        left={"2%"}
        top={"43%"}
        text="exit"
        color="#ff0000"
        onClick={() => {
          setGame((prev: any) => ({
            ...prev,
            gameConfig: {
              ...GameStateDefault.gameConfig,
            },
          }));
          setCurrentPage("GameConfig");
        }}
      />
      <PixelButton
        position={"absolute"}
        height="13%"
        right={"5%"}
        bottom={"5%"}
        text="play"
        color="#298D72"
        onClick={() => {
          handleOnPlay();
        }}
      />
      <PixelButton
        position={"absolute"}
        height="13%"
        right={"5%"}
        bottom={"20%"}
        text="hint"
        onClick={() => {
          handleOnPlay();
        }}
      />
      <PixelButton
        position={"absolute"}
        height="13%"
        right={"5%"}
        bottom={"35%"}
        text="tackback"
        onClick={() => {
          handleOnPlay();
        }}
      />
    </Grid>
  );
};

export default V2GamePlay;
