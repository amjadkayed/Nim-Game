import { FC, useEffect, useState } from "react";
import PixelButton from "../../components/PixelButton";
import Matchstick from "../../assets/Matchstick";
import { Grid, Typography } from "@mui/material";
import { GameType } from "../../Game";
// @ts-ignore
import useSound from "use-sound";
import OnMatchstickBurn from "../../Sounds/onMatchBurn.mp3";
import ScoreBoard from "../../components/ScoreBoard";
import { GameStateDefault } from "../../utils";
import { getV2AIMove } from "../../v2AI";

type V2GamePlayProps = {
  setCurrentPage: (nextPage: string) => void;
  game: GameType;
  setGame: (game: any) => void;
};

const V2GamePlay: FC<V2GamePlayProps> = ({ setCurrentPage, setGame, game }) => {
  const [playMatchstickBurnSound] = useSound(OnMatchstickBurn);
  const playerTwoName = game.GameCustomization.isTwoPlayer ? "Player 2" : "AI";
  const [thereIsWinner, setThereIsWinner] = useState(false);

  const numberOffRows = game.GameCustomization.v2NumberOfRows + 1;

  const [matchstickRows, setMatchstickRows] = useState<any>([]);
  const [availableMatchstickRows, setAvailableMatchstickRows] =
    useState<{ row: number; index: number }[]>();
  const [selectedMatchsticks, setSelectedMatchsticks] = useState<
    { row: number; index: number }[]
  >([]);

  const delay = (delayInms: number) => {
    return new Promise((resolve) => setTimeout(resolve, delayInms));
  };

  const initGame = () => {
    const newRows = [];
    let prev = -1;
    const availableMatchstickRow: { row: number; index: number }[] = [];
    for (let i = 0; i < numberOffRows; i++, prev += 2) {
      newRows.push(prev);
      for (let q = 0; q < prev; q++) {
        availableMatchstickRow.push({ row: i, index: q });
      }
    }

    const gameState: number[] = [];
    for (let i = 0; i < numberOffRows - 1; i++) {
      gameState.push(0);
    }
    availableMatchstickRow?.map((value: any) => {
      gameState[value.row - 1]++;
    });

    setGame(
      (prev: GameType): GameType => ({
        ...prev,
        gameConfig: {
          ...prev.gameConfig,
          v2CurrentGameState: [...gameState],
          currentTurn: "p1",
        },
      })
    );
    setAvailableMatchstickRows([...availableMatchstickRow]);
    setMatchstickRows([...newRows]);
  };

  useEffect(() => {
    initGame();
  }, []);

  useEffect(() => {
    if (availableMatchstickRows && availableMatchstickRows?.length === 0) {
      setGame(
        (prev: GameType): GameType => ({
          ...prev,
          gameConfig: {
            ...prev.gameConfig,
            PlayerOnePoints:
              prev.gameConfig.PlayerOnePoints +
              (prev.gameConfig.currentTurn === "p1" ? 1 : 0),

            PlayerTwoPoints:
              prev.gameConfig.PlayerTwoPoints +
              (prev.gameConfig.currentTurn === "p2" ? 1 : 0),
          },
        })
      );
      // winner
      setThereIsWinner(true);
    }
  }, [availableMatchstickRows]);
  function randomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const selectRandom = () => {
    const arrValid = [];
    for (let i = 0; i < game.gameConfig.v2CurrentGameState.length; i++) {
      if (game.gameConfig.v2CurrentGameState[i] > 0) {
        arrValid.push({
          index: i,
          value: game.gameConfig.v2CurrentGameState[i],
        });
      }
    }
    const x: any = randomInt(0, arrValid.length - 1);
    const y: any = randomInt(1, arrValid[x].value);
    return { row: arrValid[x].index + 1, numberOfRemoves: y };
  };
  function isGameOver(): boolean {
    for (let i = 0; i < game.gameConfig.v2CurrentGameState.length; i++)
      if (game.gameConfig.v2CurrentGameState[i] != 0) return false;
    return true;
  }

  useEffect(() => {
    if (isGameOver()) {
      return;
    }
    if (game.GameCustomization.isTwoPlayer) {
      return;
    }
    if (game.gameConfig.currentTurn === "p2") {
      let move: any = getV2AIMove(
        game.gameConfig.v2CurrentGameState,
        game.GameCustomization.difficulty,
        game.GameCustomization.v2NumberOfRows
      );
      if (move.row === -1) {
        move = selectRandom();
      }
      const newSelected: any = [];
      setTimeout(function () {
        if (availableMatchstickRows && move) {
          for (let i = 0; i < availableMatchstickRows.length; i++) {
            if (availableMatchstickRows[i].row === move.row) {
              newSelected.push(availableMatchstickRows[i]);
              if (newSelected.length === move.numberOfRemoves) break;
            }
          }
          setSelectedMatchsticks(newSelected);
          setTimeout(function () {
            if (newSelected.length > 0) {
              const newAvailable = [
                ...availableMatchstickRows.filter((item: any) => {
                  for (let i = 0; i < newSelected.length; i++) {
                    if (
                      newSelected[i].row === item.row &&
                      newSelected[i].index === item.index
                    ) {
                      return false;
                    }
                  }
                  return true;
                }),
              ];
              setAvailableMatchstickRows(newAvailable);
              setSelectedMatchsticks([]);
              playMatchstickBurnSound();

              const gameState: number[] = [];
              for (let i = 0; i < numberOffRows - 1; i++) {
                gameState.push(0);
              }
              newAvailable?.map((value: any) => {
                gameState[value.row - 1]++;
              });

              setGame(
                (prev: GameType): GameType => ({
                  ...prev,
                  gameConfig: {
                    ...prev.gameConfig,
                    currentTurn:
                      prev.gameConfig.currentTurn === "p1" ? "p2" : "p1",
                    v2CurrentGameState: [...gameState],
                  },
                })
              );
            }
          }, 1000);
        }
      }, 1000);
    }
  }, [game.gameConfig.currentTurn]);

  const isMatchBurnt = (rowNumber: number, index: number): boolean => {
    if (availableMatchstickRows)
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
      if (availableMatchstickRows) {
        const newAvailable = [
          ...availableMatchstickRows.filter((item: any) => {
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
        ];

        const gameState: number[] = [];
        for (let i = 0; i < numberOffRows - 1; i++) {
          gameState.push(0);
        }
        newAvailable?.map((value: any) => {
          gameState[value.row - 1]++;
        });

        setGame(
          (prev: GameType): GameType => ({
            ...prev,
            gameConfig: {
              ...prev.gameConfig,
              currentTurn: prev.gameConfig.currentTurn === "p1" ? "p2" : "p1",
              v2CurrentGameState: [...gameState],
            },
          })
        );

        setSelectedMatchsticks([]);
        setAvailableMatchstickRows(newAvailable);
        playMatchstickBurnSound();
      }
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
        p2Name={playerTwoName}
        p2Points={game.gameConfig.PlayerTwoPoints}
        currentTurn={game.gameConfig.currentTurn}
        winner={thereIsWinner}
      />

      {!thereIsWinner &&
        matchstickRows.length > 0 &&
        matchstickRows?.map((value: any, index: any) => {
          if (!availableMatchstickRows) return;
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
                numberOfAvailable={availableMatchstickRows.length}
                notEnabled={
                  game.gameConfig.currentTurn === "p2" &&
                  !game.GameCustomization.isTwoPlayer
                }
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

      {thereIsWinner && (
        <Grid
          bgcolor={"rgba(0,0,0,0.5)"}
          height={"70%"}
          width={"40%"}
          container
          alignContent={"center"}
          justifyContent={"center"}
          alignItems={"center"}
          justifyItems={"center"}
          gap={"5%"}
        >
          <Typography
            textAlign={"center"}
            width={"100%"}
            color={"white"}
            style={{ userSelect: "none" }}
          >
            {game.gameConfig.currentTurn === "p1" ? "player 1" : playerTwoName}{" "}
            {"is the winner"}
          </Typography>
          <PixelButton
            height="12%"
            left={"5%"}
            bottom={"5%"}
            text="play again"
            textSize="1.5vh"
            color="#298D72"
            onClick={() => {
              setThereIsWinner(false);
              initGame();
              // setGame(GameStateDefault);
            }}
          />
          <PixelButton
            height="12%"
            left={"5%"}
            bottom={"5%"}
            text="choose version"
            textSize="1.5vh"
            color="#ffcd33"
            onClick={() => {
              setGame(GameStateDefault);
              setCurrentPage("ChooseVersion");
            }}
          />
        </Grid>
      )}
      <PixelButton
        position={"absolute"}
        height="13%"
        left={"5%"}
        bottom={"5%"}
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
        left={"5%"}
        bottom={"20%"}
        text="settings"
        color="#9E9E9E"
        onClick={() => {
          setCurrentPage("GameConfig");
        }}
      />
      {!thereIsWinner &&
        !(
          game.gameConfig.currentTurn === "p2" &&
          !game.GameCustomization.isTwoPlayer
        ) && (
          <>
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
            {game.GameCustomization.isHintEnabled && (
              <PixelButton
                position={"absolute"}
                height="13%"
                right={"5%"}
                bottom={"20%"}
                text="hint"
                onClick={() => {
                  const move = getV2AIMove(
                    game.gameConfig.v2CurrentGameState,
                    "hard",
                    game.GameCustomization.v2NumberOfRows
                  );
                  const newSelected: any = [];
                  if (availableMatchstickRows && move) {
                    for (let i = 0; i < availableMatchstickRows.length; i++) {
                      if (availableMatchstickRows[i].row === move.row) {
                        newSelected.push(availableMatchstickRows[i]);
                        if (newSelected.length === move.numberOfRemoves) break;
                      }
                    }
                    setSelectedMatchsticks(newSelected);
                  }
                }}
              />
            )}
            {game.GameCustomization.isTakeBackEnabled && (
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
            )}
          </>
        )}
    </Grid>
  );
};

export default V2GamePlay;
