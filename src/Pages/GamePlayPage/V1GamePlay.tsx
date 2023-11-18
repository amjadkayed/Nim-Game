import { FC, useEffect, useState } from "react";
import PixelButton from "../../components/PixelButton";
import { Grid, Typography } from "@mui/material";
import { GameType } from "../../Game";
// @ts-ignore
import useSound from "use-sound";
import OnMatchstickBurn from "../../Sounds/onMatchBurn.mp3";
import ScoreBoard from "../../components/ScoreBoard";
import { GameStateDefault } from "../../utils";
import GrassBackGround from "../../assets/GrassBackGround";
import StonesHeap from "../../assets/StonesHeap";
import { getV1AIMove } from "../../v1AI";

type V1GamePlayProps = {
  setCurrentPage: (nextPage: string) => void;
  game: GameType;
  setGame: (game: any) => void;
};

const V1GamePlay: FC<V1GamePlayProps> = ({ setCurrentPage, setGame, game }) => {
  const [playMatchstickBurnSound] = useSound(OnMatchstickBurn);
  const playerTwoName = game.GameCustomization.isTwoPlayer ? "Player 2" : "AI";

  const [thereIsWinner, setThereIsWinner] = useState(false);

  const [currentGameArray, setCurrentGameArray] = useState<any>(
    game.GameCustomization.v1InitGameState
  );

  const [selectedHeap, setSelectedHeap] = useState<any>(null);

  const initGame = () => {
    setCurrentGameArray(game.GameCustomization.v1InitGameState);
    setGame(
      (prev: GameType): GameType => ({
        ...prev,
        gameConfig: {
          ...prev.gameConfig,
          v1CurrentGameState: prev.GameCustomization.v1InitGameState,
          currentTurn: "p1",
        },
      })
    );
  };
  function isGameOver(): boolean {
    for (let i = 0; i < currentGameArray.length; i++)
      if (currentGameArray[i] > 2) return false;
    return true;
  }
  useEffect(() => {
    initGame();
  }, []);
  function randomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const selectRandom = () => {
    const arrValid = [];
    for (let i = 0; i < currentGameArray.length; i++) {
      if (currentGameArray[i] > 2) {
        arrValid.push({ index: i, value: currentGameArray[i] });
      }
    }
    const x: any = randomInt(0, arrValid.length);
    let y: any = randomInt(1, arrValid[x].value);
    if (arrValid[x].value % 2 === 0) {
      let z: any = y;
      while (z === arrValid[x].value / 2) {
        z = randomInt(1, arrValid[x].value);
      }
      y = z;
    }
    return { index: arrValid[x].index + 1, numberOfRemoves: y };
  };
  useEffect(() => {
    if (isGameOver()) {
      setThereIsWinner(true);
      return;
    }
    if (game.GameCustomization.isTwoPlayer) {
      return;
    }
    if (game.gameConfig.currentTurn === "p2") {
      let move: any = getV1AIMove(
        game.gameConfig.v1CurrentGameState,
        game.GameCustomization.difficulty
      );
      if (move) {
        if (move.index < 0) {
          move = selectRandom();
        }
      }
      if (move) {
        setSelectedHeap(move?.index - 1);
        setTimeout(function () {
          const newHeaps = [...currentGameArray];
          if (move) {
            newHeaps[move?.index - 1] -= move.numberOfRemoves;
            newHeaps.push(move.numberOfRemoves);
          }
          setGame(
            (prev: GameType): GameType => ({
              ...prev,
              gameConfig: {
                ...prev.gameConfig,
                v1CurrentGameState: newHeaps,
                currentTurn: prev.gameConfig.currentTurn === "p1" ? "p2" : "p1",
              },
            })
          );
          setCurrentGameArray(newHeaps);
          setSelectedHeap((prev: any) => null);
        }, 1000);
      }
    }
  }, [game.gameConfig.currentTurn]);

  const handleOnPlay = () => {
    if (selectedHeap !== null) {
      let different = 0;
      for (let i = 0; i < currentGameArray.length; i++) {
        different +=
          game.gameConfig.v1CurrentGameState[i] - currentGameArray[i];
      }
      const newArr = [...currentGameArray, different];
      setGame(
        (prev: GameType): GameType => ({
          ...prev,
          gameConfig: {
            ...prev.gameConfig,
            v1CurrentGameState: newArr,
            currentTurn: prev.gameConfig.currentTurn === "p1" ? "p2" : "p1",
          },
        })
      );
      setCurrentGameArray(newArr);
      setSelectedHeap(null);
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
      <GrassBackGround
        width="120%"
        zIndex={-15}
        style={{
          pointerEvents: "none",
        }}
      />
      <ScoreBoard
        p1Name="Player 1 "
        p1Points={game.gameConfig.PlayerOnePoints}
        p2Name={playerTwoName}
        p2Points={game.gameConfig.PlayerTwoPoints}
        currentTurn={game.gameConfig.currentTurn}
        winner={thereIsWinner}
      />

      {!thereIsWinner && currentGameArray.length > 0 && (
        <Grid
          container
          alignContent={"center"}
          justifyContent={"center"}
          alignItems={"center"}
          justifyItems={"center"}
          width={"50%"}
          height={`${20 / game.GameCustomization.v1InitGameState.length}%`}
          marginBottom={`1%`}
          flexDirection={"row"}
          gap={"5%"}
        >
          {currentGameArray?.map((value: any, index: any) => {
            return (
              <StonesHeap
                key={`${index}`}
                // height="100%"
                defaultStones={game.gameConfig.v1CurrentGameState[index]}
                width={`15%`}
                selectedHeap={selectedHeap}
                location={index}
                disabled={
                  game.gameConfig.currentTurn === "p2" &&
                  !game.GameCustomization.isTwoPlayer
                }
                setSelectedHeap={setSelectedHeap}
                heapsArray={currentGameArray}
                setHeapsArray={setCurrentGameArray}
              />
            );
          })}
        </Grid>
      )}

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
            {game.gameConfig.currentTurn === "p1" ? playerTwoName : "player 1"}{" "}
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
                  let move = getV1AIMove(
                    game.gameConfig.v1CurrentGameState,
                    "hard"
                  );
                  if (move) {
                    if (move.index < 0) {
                      move = selectRandom();
                    }
                  }
                  if (move) {
                    setSelectedHeap(move?.index - 1);
                    const newHeaps = [...currentGameArray];
                    newHeaps[move?.index - 1] -= move.numberOfRemoves;
                    // newHeaps.push(move.numberOfRemoves);
                    setCurrentGameArray(newHeaps);
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
            {selectedHeap !== null && (
              <PixelButton
                position={"absolute"}
                height="9%"
                bottom={"5%"}
                color="#0000ff"
                textSize="2vh"
                text="reset"
                onClick={() => {
                  setSelectedHeap(null);
                  setCurrentGameArray(game.gameConfig.v1CurrentGameState);
                }}
              />
            )}
          </>
        )}
    </Grid>
  );
};

export default V1GamePlay;
