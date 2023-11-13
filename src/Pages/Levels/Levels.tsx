import React, { FC, useState } from "react";
import { Grid } from "@mui/material";
import Moon from "../../assets/Moon";
import Bar from "../../assets/Bar";
import Flame from "../../assets/Flame";
import Choose from "../../assets/Choose";
import "../../assets/MovingCloud.css";
import Point from "../../assets/Point";
import PixelButton from "../../components/PixelButton";
import Flamemu from "../../assets/Flamemu";
import Flamehard from "../../assets/Flamehard";
import Plus from "../../assets/Pluse";
import Minus from "../../assets/Minus";
import { GameType } from "../../Game";
type LevelsProps = {
  setCurrentPage: (nextPage: string) => void;
  game: GameType;
  setGame: (game: GameType) => void;
};
const Levels :FC<LevelsProps> = ({ setCurrentPage, setGame, game }) => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [counter, setCounter] = useState(4);

  const handleLevelClick = (level: string) => {
    setSelectedLevel(level);
  };
  const updateCounter = (number: number) => {
    setCounter((count) => {
      return Math.max(4, Math.min(9, (count + number)));
    });
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
      gap={"2%"}
    >

      <Choose  version={game.version} left={"35%"} top={"6%"} height="30%" position={"absolute"} />
      <Bar version={game.version} left={"2%"} top={"15%"} height="14%" position={"relative"}  />
      {selectedLevel&&(
        <Plus
        left={"55%"}
        top={"79%"}
        height="17%"
        position={"absolute"}
        onClick={() => updateCounter(1)}
        version={game.version}
        style={{ cursor: "pointer" }}
        />
      )}
      {selectedLevel&&(
        <Minus
          left={"43.5%"}
          top={"81%"} 
          height="17%" 
          position={"absolute"}  
          onClick={() => updateCounter(-1)}
          version={game.version}
          style={{ cursor: "pointer" }}
          />
      )}
      {selectedLevel !== "medium"&&(
      <Point
        left={"47%"}
        top={"41.6%"}
        height="16%"
        position={"absolute"}
        onClick={() => handleLevelClick("medium")}
        version={game.version}
        style={{
          cursor: "pointer",
        }}

      />
      )}
      {selectedLevel !== "easy"&&(
      <Point
        left={"34.5%"}
        top={"42%"}
        height="16%"
        position={"absolute"}
        onClick={() => handleLevelClick("easy")}
        version={game.version}
        style={{
          cursor: "pointer",
        }}
      />
      )}
      {selectedLevel !== "hard"&&(
      <Point
        left={"60%"}
        top={"42%"}
        height="16%"
        position={"absolute"}
        cursor={"pointer"}
        onClick={() => handleLevelClick("hard")}
        version={game.version}
        style={{
          cursor: "pointer",
        }}
      />
      )}
      
      {selectedLevel === "easy"&&(
      <Flame 
      left={"48%"} 
      top={"20%"} 
      height="20%"
      position={"absolute"}
      />
      )}

      {selectedLevel === "medium"&&(
      <Flamemu 
      left={"48%"} 
      top={"20%"} 
      height="20%" 
      position={"absolute"} 
      />
      )}
      
      {selectedLevel === "hard"&&(
      <Flamehard 
      left={"46%"} 
      top={"20%"}
      height="20%"
      position={"absolute"}
      />
      )}
      {counter&&selectedLevel&&(
        <div style={{ position: "absolute", top: "75%" ,userSelect: "none"}}>
          <p style={{ fontSize: "40px" , color: "#000"}}>{game.version === "v1"&&counter}</p>
          <p style={{ fontSize: "40px" , color: "#fff"}}>{game.version === "v2"&&counter}</p>
        </div>
      )}
      <PixelButton
        color={"#298D72"}
        right={"-40%"}
        bottom={"-35%"}
        position={"relative"}
        text="Start"
        onClick={() => {
          setCurrentPage("GamePlay");
        }}
      />
      
      <PixelButton
        color={"#99343b"}
        right={"40%"}
        bottom={"-19%"}
        position={"relative"}
        text="Back"
        onClick={() => {
          setCurrentPage("MainMenu");
        }}
      />
      {selectedLevel&&(
      <div style={{ position: "absolute", top: "76%" ,userSelect: "none", left:"25%"}}>
        <p style={{ fontSize: "35px" , color: "#000"}}>{game.version === "v1" && "NO.rows:"}</p>
        <p style={{ fontSize: "35px" , color: "#fff"}}>{game.version === "v2" && "NO.rows:"}</p>
      </div>
      )}
      {selectedLevel && (
        <div style={{ position: "absolute", top: "60%" ,userSelect: "none" }}>
          <p style={{ fontSize: "40px", color: "#000" }}>{selectedLevel === "easy"&&game.version === "v1" && "Easy"}</p>
          <p style={{ fontSize: "40px", color: "#000" }}>{selectedLevel === "medium"&&game.version === "v1" && "Medium"}</p>
          <p style={{ fontSize: "40px", color: "#000" }}>{selectedLevel === "hard"&&game.version === "v1" && "Hard"}</p>
          <p style={{ fontSize: "40px", color: "#fff" }}>{selectedLevel === "easy"&&game.version === "v2" && "Easy"}</p>
          <p style={{ fontSize: "40px", color: "#fff" }}>{selectedLevel === "medium"&&game.version === "v2" && "Medium"}</p>
          <p style={{ fontSize: "40px", color: "#fff" }}>{selectedLevel === "hard"&&game.version === "v2" && "Hard"}</p>
        </div>
      )}
      <Moon version={game.version} height="45%" position={"absolute"} right={"-5%"} top={"-15%"} />
    </Grid>
  );
};

export default Levels;
