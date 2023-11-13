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
type LevelsProps = {
  setCurrentPage: (nextPage: string) => void;
};
const Levels :FC<LevelsProps> = ({ setCurrentPage }) => {
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

      <Choose left={"35%"} top={"6%"} height="30%" position={"absolute"} />
      <Bar left={"2%"} top={"15%"} height="14%" position={"relative"}  />
      {selectedLevel&&(
        <Plus
        left={"55%"}
        top={"79%"}
        height="17%"
        position={"absolute"}
        onClick={() => updateCounter(1)}
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
        <div style={{ position: "absolute", top: "75%", color: "#fff" ,userSelect: "none"}}>
          <p style={{ fontSize: "40px" }}>{counter}</p>
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
      <div style={{ position: "absolute", top: "76%", color: "#fff" ,userSelect: "none", left:"25%"}}>
        <p style={{ fontSize: "35px" }}>NO.rows:</p>
      </div>
      )}
      {selectedLevel && (
        <div style={{ position: "absolute", top: "60%", color: "#fff" ,userSelect: "none" }}>
          <p style={{ fontSize: "40px" }}>{selectedLevel === "easy" && "Easy"}</p>
          <p style={{ fontSize: "40px" }}>{selectedLevel === "medium" && "Medium"}</p>
          <p style={{ fontSize: "40px" }}>{selectedLevel === "hard" && "Hard"}</p>
        </div>
      )}
      <Moon height="45%" position={"absolute"} right={"-5%"} top={"-15%"} />
    </Grid>
  );
};

export default Levels;
