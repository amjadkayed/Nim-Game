import { Grid } from "@mui/material";
import { FC } from "react";
import Heap from "./Heap";
import PixelButton from "./PixelButton";
import { GameType } from "../Game";

type HeapCustomizationProps = {
  height?: string;
  width?: string;
  gameHeaps: number[];
  setGame: (game: any) => void;
  [key: string]: unknown;
};

const HeapCustomization: FC<HeapCustomizationProps> = ({
  height = "auto",
  width = "auto",
  setGame,
  version,
  gameHeaps,
  text,
  ...rest
}) => {
  const handleHeapDelete = (index: number) => {
    const newGameHeaps = [...gameHeaps];
    newGameHeaps.splice(index, 1);
    setGame((game: GameType): GameType => {
      return {
        ...game,
        GameCustomization: {
          ...game.GameCustomization,
          v1InitGameState: newGameHeaps,
        },
      };
    });
  };

  const addHeap = () => {
    if (gameHeaps.length < 7)
      setGame((game: GameType): GameType => {
        return {
          ...game,
          GameCustomization: {
            ...game.GameCustomization,
            v1InitGameState: [...game.GameCustomization.v1InitGameState, 1],
          },
        };
      });
  };

  const addValueToHeap = (index: number, num: number) => {
    const newGameHeaps = [...gameHeaps];
    if (newGameHeaps[index] + num < 1 || newGameHeaps[index] + num > 9) return;
    newGameHeaps[index] += num;
    setGame((game: GameType): GameType => {
      return {
        ...game,
        GameCustomization: {
          ...game.GameCustomization,
          v1InitGameState: newGameHeaps,
        },
      };
    });
  };

  const isDeleteAvailable = gameHeaps.length > 1;
  return (
    <Grid
      container
      height={height}
      width={width}
      zIndex={20}
      marginBottom={"2%"}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
      justifyItems={"center"}
      {...rest}
    >
      <Grid
        container
        height={"50%"}
        width={"100%"}
        zIndex={20}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
        justifyItems={"center"}
        gap={"3%"}
      >
        {gameHeaps.map((value: number, index: number) => (
          <Heap
            key={index}
            index={index}
            handleHeapDelete={handleHeapDelete}
            addValueToHeap={addValueToHeap}
            width="10%"
            height="100%"
            number={value}
            isDeleteAvailable={isDeleteAvailable}
          />
        ))}
      </Grid>

      <PixelButton
        height="40%"
        textSize="1.5vh"
        text="add heap"
        color="#ff0000"
        onClick={() => {
          addHeap();
        }}
      />
    </Grid>
  );
};

export default HeapCustomization;
