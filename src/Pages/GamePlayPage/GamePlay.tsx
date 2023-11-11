import { FC, useEffect, useState } from "react";
import PixelButton from "../../components/PixelButton";
import Matchstick from "../../assets/Matchstick";
import { Grid } from "@mui/material";

type GamePlayProps = {
  setCurrentPage: (nextPage: string) => void;
};

const GamePlay: FC<GamePlayProps> = ({ setCurrentPage }) => {
  const [numberOffRows, setNumberOffRows] = useState(4);
  const [rows, setRows] = useState<any>([]);

  useEffect(() => {
    const newRows = [];
    let prev = -1;
    for (let i = 0; i < numberOffRows; i++) {
      newRows.push(prev + 2);
      prev += 2;
    }
    setRows([...newRows]);
  }, [numberOffRows]);

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
      {rows.length > 0 &&
        rows?.map((value: any, index: any) => {
          const matchstickRow = [];
          for (let i = 0; i < value; i++) {
            matchstickRow.push(
              <Matchstick
                key={`${index} and ${value} and ${i}`}
                width={`${15 / numberOffRows}%`}
                // position={"relative"}
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
              height={"10%"}
              key={index}
              marginBottom={`0.5%`}
              flexDirection={"row"}
            >
              {matchstickRow}
            </Grid>
          );
        })}
      <PixelButton
        position={"absolute"}
        height="13%"
        left={"5%"}
        top={"30%"}
        text="increase"
        color="#0000ff"
        onClick={() => {
          setNumberOffRows((prev: any) => Math.min(prev + 1, 9));
        }}
      />
      <PixelButton
        position={"absolute"}
        height="13%"
        left={"5%"}
        top={"50%"}
        text="decrease"
        color="#ff0000"
        onClick={() => {
          setNumberOffRows((prev: any) => Math.max(prev - 1, 4));
        }}
      />
      <PixelButton
        position={"absolute"}
        height="13%"
        left={"5%"}
        top={"70%"}
        text="Back"
        color="#00ff00"
        onClick={() => {
          setCurrentPage("MainMenu");
        }}
      />
    </Grid>
  );
};

export default GamePlay;
