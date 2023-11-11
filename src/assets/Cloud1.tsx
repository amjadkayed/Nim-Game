import { Grid } from "@mui/material";
import { FC, useEffect, useState } from "react";
import "./MovingCloud.css"

type Cloud1Props = {
  height?: string;
  width?: string;
  [key: string]: unknown;
};

const Cloud1: FC<Cloud1Props> = ({
  height = "auto",
  width = "auto",
  ...rest
}) => {
  const initialPosition = parseInt(localStorage.getItem("cloudPosition") || "0", 10);
  const [position, setPosition] = useState<number>(initialPosition || window.innerWidth);

  const [direction, setDirection] = useState<number>(-1);

  useEffect(() => {
    const moveCloud = () => {
      setPosition((prevPosition) => prevPosition + direction);
    };

    const interval = setInterval(moveCloud, 1000);

    return () => clearInterval(interval);
  }, [direction]);

  useEffect(() => {
    localStorage.setItem("cloudPosition", position.toString());
  }, [position]);

  useEffect(() => {
    if (position <= -50) {
      setDirection(1);
    } else if (position >= window.innerWidth - 50) {
      setDirection(-1);
    }
  }, [position]);


  return (
    <Grid
      item
      height={height}
      width={width}
      display={"block"}
      position={"absolute"}
      className="cloud-animation"
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="crispEdges"
        viewBox="158.5 85.5 83 30"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      >
        <path
          stroke="#000000"
          d="M213 86h4M212 87h1M217 87h1M211 88h1M218 88h1M210 89h1M219 89h1M209 90h1M220 90h1M209 91h1M221 91h1M229 91h4M208 92h1M221 92h1M228 92h1M233 92h2M207 93h1M222 93h1M226 93h2M235 93h1M180 94h5M195 94h4M206 94h1M222 94h1M225 94h1M235 94h2M179 95h1M185 95h3M193 95h2M199 95h1M206 95h1M223 95h2M237 95h1M178 96h1M188 96h1M192 96h1M199 96h1M205 96h1M223 96h1M237 96h1M178 97h1M189 97h1M191 97h1M200 97h1M204 97h1M238 97h1M177 98h1M190 98h1M200 98h1M202 98h2M239 98h1M177 99h1M200 99h2M239 99h1M176 100h1M240 100h1M176 101h1M240 101h1M175 102h1M240 102h1M175 103h1M240 103h1M174 104h1M240 104h1M174 105h1M240 105h1M174 106h1M239 106h1M174 107h1M239 107h1M174 108h1M237 108h2M174 109h1M236 109h1M168 110h1M174 110h1M235 110h1M166 111h2M169 111h1M171 111h4M217 111h1M234 111h1M165 112h1M169 112h2M174 112h2M215 112h2M218 112h1M232 112h2M160 113h2M164 113h1M168 113h2M174 113h1M176 113h1M186 113h5M212 113h3M219 113h13M159 114h1M162 114h1M164 114h1M168 114h1M170 114h4M177 114h2M182 114h4M191 114h3M207 114h5M160 115h2M165 115h3M179 115h3M194 115h13"
        />
        <path
          stroke="#837e93"
          d="M213 87h3M215 88h3M217 89h2M218 90h2M218 91h2M219 92h2M220 93h1M234 93h1M220 94h2M234 94h1M220 95h3M234 95h3M221 96h2M234 96h3M221 97h2M234 97h4M221 98h2M234 98h5M220 99h3M234 99h5M220 100h1M233 100h7M233 101h7M176 102h1M232 102h8M176 103h1M191 103h3M216 103h2M231 103h9M175 104h2M188 104h4M216 104h2M231 104h9M175 105h3M186 105h6M215 105h5M229 105h11M175 106h3M184 106h7M214 106h8M228 106h11M175 107h3M183 107h8M213 107h11M226 107h13M175 108h3M182 108h10M212 108h25M175 109h17M211 109h25M175 110h18M207 110h28M175 111h19M203 111h14M218 111h16M176 112h39M219 112h13M177 113h9M191 113h21M179 114h3M194 114h13"
        />
        <path
          stroke="#a5a5a5"
          d="M216 87h1M212 88h3M211 89h6M210 90h8M210 91h8M220 91h1M209 92h10M208 93h12M221 93h1M207 94h13M181 95h4M195 95h4M207 95h13M181 96h7M193 96h6M206 96h8M215 96h6M181 97h8M192 97h8M205 97h9M217 97h4M181 98h9M191 98h9M204 98h10M218 98h3M181 99h19M202 99h12M181 100h10M198 100h16M183 101h4M198 101h15M198 102h15M197 103h15M197 104h15M197 105h14M197 106h13M197 107h10"
        />
        <path
          stroke="#96949d"
          d="M229 92h4M228 93h6M226 94h8M180 95h1M225 95h9M179 96h2M214 96h1M224 96h10M179 97h2M214 97h3M223 97h11M178 98h3M214 98h4M223 98h11M178 99h3M214 99h6M223 99h11M177 100h4M191 100h7M214 100h6M221 100h12M177 101h6M187 101h11M213 101h20M177 102h21M213 102h19M177 103h14M194 103h3M212 103h4M218 103h13M177 104h11M192 104h5M212 104h4M218 104h13M178 105h8M192 105h5M211 105h4M220 105h9M178 106h6M191 106h6M210 106h4M222 106h6M178 107h5M191 107h6M207 107h6M224 107h2M178 108h4M192 108h20M192 109h19M193 110h14M194 111h9"
        />
        <path
          stroke="#a0a0a0"
          d="M168 111h1M166 112h3M171 112h2M165 113h2M170 113h2M160 114h1M165 114h1"
        />
        <path
          stroke="#76708c"
          d="M173 112h1M167 113h1M172 113h2M161 114h1M166 114h2"
        />
      </svg>
    </Grid>
  );
};

export default Cloud1;
