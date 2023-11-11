import { Grid } from "@mui/material";
import { FC } from "react";

type FlameProps = {
  height?: string;
  width?: string;
  [key: string]: unknown;
};

const Flame: FC<FlameProps> = ({
  height = "auto",
  width = "auto",
  ...rest
}) => {
  return (
    <Grid
      item
      height={height}
      width={width}
      display={"block"}
      zIndex={"20"}
      position={"absolute"}
      {...rest}
    >
      <svg xmlns="http://www.w3.org/2000/svg" 
      shape-rendering="crispEdges"
       viewBox="1.5 3.5 14 22"
       style={{
        display: "block",
        width: "100%",
        height: "100%",
     }}
       >
        <path stroke="#ff9800" d="M6 4h1M9 4h1M8 5h1M10 5h1M8 6h1M10 6h1M10 7h1M2 8h1M14 8h1M11 9h1M14 9h1M10 10h1M12 11h2M2 12h1M13 12h1M2 13h1M13 13h1M2 14h1M10 14h1M13 14h1M8 15h1M10 15h1M12 15h1M2 16h2M10 16h1M2 17h1M13 17h1M13 18h2"></path> 
        <path stroke="#ffce26" d="M9 5h1M12 12h1M9 15h1"></path>
         <path stroke="#f86123" d="M7 6h1M7 16h1"></path>
          <path stroke="#ffeb3b" d="M9 6h1M6 7h1M9 8h2M8 10h1M4 14h1"></path> 
          <path stroke="#ffb74d" d="M5 7h1M3 9h1M6 10h1M2 11h1M10 11h1M3 12h1M5 12h2M10 12h2M6 13h1M10 13h2M11 14h1M12 16h1M9 17h1"></path>
           <path stroke="#f44537" d="M7 7h1"></path> 
           <path stroke="#fff176" d="M8 7h2M10 9h1M9 12h1"></path>
            <path stroke="#ffd941" d="M4 8h1"></path>
             <path stroke="#ffd452" d="M5 8h2M5 9h1M4 10h1"></path>
              <path stroke="#f44538" d="M7 8h1"></path>
               <path stroke="#f87e38" d="M8 8h1M8 9h1M4 15h1"></path>
                <path stroke="#ffe343" d="M4 9h1"></path>
                 <path stroke="#ffdca8" d="M6 9h1M5 11h1"></path> 
                 <path stroke="#f6543f" d="M7 9h1"></path> 
                 <path stroke="#f8815b" d="M9 9h1"></path> 
                 <path stroke="rgba(255,255,255,0.33725490196078434)" d="M2 10h1"></path>
                  <path stroke="#f9a49d" d="M3 10h1"></path>
                   <path stroke="#ffc107" d="M5 10h1"></path>
                    <path stroke="#f87351" d="M7 10h1"></path>
                     <path stroke="#f85c47" d="M9 10h1"></path> 
                     <path stroke="#ffcd83" d="M3 11h1M6 11h1"></path>
                      <path stroke="#c9b18d" d="M4 11h1"></path> 
                      <path stroke="#f5d536" d="M7 11h1"></path> 
                      <path stroke="#ffad94" d="M8 11h1"></path> 
                      <path stroke="#fff8bc" d="M9 11h1"></path> 
                      <path stroke="#a4814d" d="M4 12h1"></path> 
                      <path stroke="#efd336" d="M7 12h1"></path> 
                      <path stroke="#b23d18" d="M8 12h1M8 13h1M9 16h1"></path>
                       <path stroke="#aa2f26" d="M3 13h1"></path> 
                       <path stroke="#b2a429" d="M4 13h1M5 15h1"></path>
                        <path stroke="#b28036" d="M5 13h1"></path>
                         <path stroke="#7c2b11" d="M7 13h1"></path> 
                         <path stroke="#ffed50" d="M9 13h1"></path> 
                         <path stroke="#ffe054" d="M12 13h1"></path>
                          <path stroke="#b26a00" d="M3 14h1M6 14h1M3 15h1M4 17h1M6 18h1M7 19h2M8 20h1"></path> 
                          <path stroke="#7c4a00" d="M5 14h1"></path> <path stroke="#573400" d="M7 14h1"></path>
                           <path stroke="#ac5750" d="M8 14h1M11 16h1M11 17h1M10 18h1"></path> 
                           <path stroke="#f5db33" d="M9 14h1"></path> <path stroke="#f77c73" d="M12 14h1"></path> 
                           <path stroke="#ca532d" d="M6 15h1"></path> <path stroke="#b43823" d="M7 15h1"></path>
                            <path stroke="#f44336" d="M11 15h1M11 18h1"></path> <path stroke="#dd5023" d="M4 16h1M5 17h1"></path> 
                            <path stroke="#dd6531" d="M5 16h1"></path> <path stroke="#e06832" d="M6 16h1"></path> 
                            <path stroke="#f87430" d="M8 16h1"></path> <path stroke="#c4aa26" d="M6 17h1M7 18h1"></path> 
                            <path stroke="#d1b226" d="M7 17h1"></path> <path stroke="#f65434" d="M8 17h1"></path>
                             <path stroke="#ae726e" d="M10 17h1"></path> <path stroke="#ca4a30" d="M8 18h1"></path> 
                             <path stroke="#b28f5b" d="M9 18h1"></path> <path stroke="#7a5749" d="M7 20h1"></path>
                              <path stroke="#7b594a" d="M7 21h1"></path> <path stroke="#6b655c" d="M8 21h1M8 22h1"></path>
                               <path stroke="#7b623e" d="M7 22h1"></path> <path stroke="#715340" d="M7 23h1"></path>
                                <path stroke="#3e3220" d="M8 23h1M7 25h1"></path> <path stroke="#644939" d="M7 24h1"></path>
                                 <path stroke="#4e3e28" d="M8 24h1"></path>
       <path stroke="#282015" d="M8 25h1"></path> </svg>
    </Grid>
  );
};

export default Flame;
