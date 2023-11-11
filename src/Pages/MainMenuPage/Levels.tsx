import React, { useState } from "react";
import { Grid } from "@mui/material";
import Cloud1 from "../../assets/Cloud1";
import Cloud2 from "../../assets/Cloud2";
import Moon from "../../assets/Moon";
import Bar from "../../assets/Bar";
import Flame from "../../assets/Flame";
import Choose from "../../assets/Choose";
import "../../assets/MovingCloud.css";
import Point from "../../assets/Point";
import PixelButton from "../../components/PixelButton";
import Flamemu from "../../assets/Flamemu";
import Flamehard from "../../assets/Flamehard";

const Levels = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

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
      flexDirection={"column"}
      gap={"2%"}
    >

      <Cloud1 height="20%" position={"absolute"} right={"10%"} bottom={"20%"} />
      <Cloud2 height="20%" position={"absolute"} left={"15%"} />
      <Cloud1 height="20%" position={"absolute"} right={"10%"} bottom={"20%"} />
      <Cloud2 height="20%" position={"absolute"} left={"50%"} />
      <Cloud2 height="20%" position={"absolute"} left={"50%"} />
      <Cloud1 height="20%" position={"absolute"} right={"50%"} bottom={"20%"} />
      <Choose left={"35%"} top={"12%"} height="30%" position={"absolute"} />
      <Bar left={"2%"} top={"25%"} height="17%" position={"relative"}  />
      
      <Point
        left={"46.9%"}
        top={"51%"}
        height="18%"
        position={"absolute"}
        onClick={() => handleLevelClick("medium")}
        style={{
          cursor: "pointer",
          display: selectedLevel === "medium" ? "none" : "block",
        }}

      />
      
      {selectedLevel !== "easy"&&(
      <Point
        left={"31.2%"}
        top={"51%"}
        height="18%"
        position={"absolute"}
        onClick={() => handleLevelClick("easy")}
        style={{
          cursor: "pointer",
        }}
      />
      )}
      <Point
        left={"61.7%"}
        top={"51%"}
        height="18%"
        position={"absolute"}
        cursor={"pointer"}
        onClick={() => handleLevelClick("hard")}
        style={{
          cursor: "pointer",
          display: selectedLevel === "hard" ? "none" : "block",
        }}

      />
      
      <Flame 
      left={"49%"} 
      top={"30%"} 
      height="20%"
      position={"absolute"}
      style={{
        display: selectedLevel !== "easy" ? "none" : "block",
      }}
      />
      
      <Flamemu 
      left={"48%"} 
      top={"30%"} 
      height="20%" 
      position={"absolute"} 
      style={{
        display: selectedLevel !== "medium" ? "none" : "block",
      }}
      />
      

      <Flamehard 
      left={"47%"} 
      top={"30%"}
      height="20%"
      position={"absolute"}
      style={{
        display: selectedLevel !== "hard" ? "none" : "block",
      }}
      />



      <PixelButton
        color={"#298D72"}
        right={"-40%"}
        bottom={"-35%"}
        // top={"13%"}
        position={"relative"}
        text="Start"
      />
      
      <PixelButton
        color={"#99343b"}
        right={"40%"}
        bottom={"-19%"}
        position={"relative"}
        text="Back"
      />
      {selectedLevel && (
        <div style={{ position: "absolute", top: "75%", color: "#fff" }}>
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
