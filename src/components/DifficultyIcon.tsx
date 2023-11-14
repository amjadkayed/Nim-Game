import { Grid } from "@mui/material";
import { FC } from "react";

type DifficultyIconProps = {
  height?: string;
  width?: string;
  version: string | null;
  difficulty: string;
  [key: string]: unknown;
};

const DifficultyIcon: FC<DifficultyIconProps> = ({
  height = "auto",
  width = "auto",
  version,
  difficulty,
  ...rest
}) => {
  if (version === "v1") {
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
        {difficulty === "easy" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="crispEdges"
            viewBox="22.5 30.5 23 14"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
            }}
          >
            <path
              stroke="#000000"
              d="M28 31h12M40 32h1M27 33h1M40 33h1M27 34h1M40 34h1M25 35h1M42 35h1M25 36h1M42 36h1M25 37h1M42 37h1M25 38h1M42 38h1M25 39h1M42 39h1M24 40h2M42 40h2M23 41h1M44 41h1M23 42h1M44 42h1M23 43h1M44 43h1M24 44h20"
            ></path>
            <path
              stroke="#686868"
              d="M28 32h12M28 33h12M28 34h12M26 35h2M40 35h2M26 36h2M40 36h2M26 37h2M40 37h2M24 41h2M42 41h2M24 42h2M42 42h2M24 43h2M42 43h2"
            ></path>
            <path
              stroke="#828282"
              d="M28 35h12M28 36h12M28 37h12M26 38h16M26 39h16M26 40h16"
            ></path>
            <path stroke="#9b9b9b" d="M26 41h16M26 42h16M26 43h16"></path>
          </svg>
        )}
        {difficulty === "medium" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="crispEdges"
            viewBox="20.5 28.5 28 17"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
            }}
          >
            <path
              stroke="#000000"
              d="M28 29h14M26 30h1M42 30h1M26 31h1M30 31h1M42 31h1M26 32h1M31 32h2M35 32h1M41 32h2M25 33h2M32 33h1M34 33h2M38 33h3M42 33h2M24 34h2M32 34h3M36 34h3M44 34h1M24 35h1M26 35h4M32 35h2M36 35h1M44 35h1M24 36h1M31 36h1M44 36h1M24 37h1M30 37h2M44 37h1M24 38h1M26 38h3M32 38h1M44 38h1M24 39h2M32 39h1M40 39h1M44 39h1M22 40h4M31 40h2M40 40h1M44 40h3M21 41h1M24 41h1M31 41h1M41 41h2M47 41h1M21 42h1M23 42h2M31 42h1M42 42h2M47 42h1M21 43h3M31 43h1M43 43h2M47 43h1M22 44h1M30 44h2M44 44h2M47 44h1M23 45h24"
            ></path>
            <path
              stroke="#242424"
              d="M27 30h1M27 31h1M27 32h1M27 33h1M31 33h1M32 43h1M32 44h1"
            ></path>
            <path
              stroke="#333333"
              d="M28 30h2M33 30h3M28 31h2M33 31h3M41 33h1"
            ></path>
            <path
              stroke="#494949"
              d="M30 30h3M41 30h1M31 31h2M41 31h1M33 32h2M39 32h2M33 33h1M37 33h1M26 34h1M25 35h1M44 41h1M44 42h1M24 43h1M45 43h2M23 44h2M46 44h1"
            ></path>
            <path
              stroke="#686868"
              d="M36 30h5M36 31h5M36 32h3M36 33h1M42 34h2M42 35h2M25 36h2M42 36h2M25 37h2M42 37h2M22 41h2M45 41h2M22 42h1M45 42h2"
            ></path>
            <path stroke="#191919" d="M28 32h3M28 33h3"></path>
            <path
              stroke="#5b5b5b"
              d="M27 34h5M35 34h1M41 34h1M30 35h2M41 35h1M35 36h2M36 37h1M35 38h3M41 38h1M31 39h1M34 39h1M41 39h2M34 40h1M41 40h2"
            ></path>
            <path
              stroke="#404040"
              d="M39 34h2M35 35h1M38 35h3M37 36h1M34 37h1M37 37h1M30 38h1M26 39h1M33 39h1M26 40h1M33 40h1"
            ></path>
            <path
              stroke="#828282"
              d="M34 35h1M37 35h1M27 36h4M32 36h3M39 36h3M27 37h3M32 37h2M35 37h1M39 37h3M25 38h1M29 38h1M38 38h3M42 38h2M35 39h5M43 39h1M35 40h5M43 40h1"
            ></path>
            <path
              stroke="#2d2d2d"
              d="M38 36h1M38 37h1M31 38h1M34 38h1M27 39h4M27 40h4"
            ></path>
            <path stroke="#1f1f1f" d="M33 38h1"></path>
            <path
              stroke="#4b4b4b"
              d="M25 41h1M27 41h1M34 41h1M39 41h2M25 42h1M27 42h1M34 42h1M39 42h3M26 43h1M33 43h1M26 44h1M33 44h1"
            ></path>
            <path
              stroke="#343434"
              d="M26 41h1M33 41h1M26 42h1M33 42h1M41 43h2M41 44h2"
            ></path>
            <path
              stroke="#9b9b9b"
              d="M28 41h2M32 41h1M37 41h1M28 42h3M37 42h1M27 43h4M35 43h1M37 43h4M27 44h3M35 44h1M37 44h4"
            ></path>
            <path
              stroke="#6c6c6c"
              d="M30 41h1M35 41h2M38 41h1M43 41h1M32 42h1M35 42h2M38 42h1M25 43h1M34 43h1M36 43h1M25 44h1M34 44h1M36 44h1M43 44h1"
            ></path>
          </svg>
        )}
        {difficulty === "hard" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="crispEdges"
            viewBox="14.5 28.5 40 20"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
            }}
          >
            <path
              stroke="#000000"
              d="M30 29h9M37 30h2M30 31h1M38 31h2M26 32h2M31 32h2M35 32h1M40 32h2M25 33h4M32 33h1M34 33h2M38 33h4M24 34h2M28 34h1M32 34h3M36 34h3M41 34h4M24 35h1M26 35h4M32 35h2M36 35h2M44 35h2M24 36h2M29 36h1M31 36h1M37 36h1M43 36h2M19 37h3M25 37h1M29 37h3M37 37h1M41 37h2M18 38h1M21 38h1M25 38h4M30 38h1M32 38h1M37 38h1M41 38h1M18 39h4M25 39h1M30 39h1M32 39h1M37 39h1M40 39h4M22 40h4M29 40h1M31 40h2M37 40h2M40 40h1M44 40h3M21 41h1M24 41h1M29 41h1M31 41h1M38 41h1M41 41h2M47 41h1M21 42h1M23 42h2M28 42h1M31 42h1M38 42h1M42 42h2M47 42h1M21 43h3M27 43h2M31 43h1M37 43h2M43 43h2M47 43h1M16 44h3M22 44h1M26 44h2M30 44h2M37 44h1M44 44h2M47 44h1M15 45h1M19 45h1M23 45h24M15 46h5M48 46h5M48 47h1M53 47h1M48 48h5"
            />
            <path
              stroke="#494949"
              d="M30 30h3M31 31h2M33 32h2M33 33h1M37 33h1M26 34h1M25 35h1M44 41h1M44 42h1M24 43h1M45 43h2M23 44h2M46 44h1"
            />
            <path stroke="#333333" d="M33 30h3M28 31h2M33 31h3" />
            <path
              stroke="#686868"
              d="M36 30h1M36 31h2M36 32h3M36 33h1M42 35h2M26 36h1M42 36h1M26 37h1M22 41h2M45 41h2M22 42h1M45 42h2"
            />
            <path stroke="#191919" d="M28 32h3M29 33h2" />
            <path stroke="#242424" d="M31 33h1M32 43h1M32 44h1" />
            <path
              stroke="#5b5b5b"
              d="M27 34h1M29 34h3M35 34h1M30 35h2M41 35h1M35 36h2M36 37h1M35 38h2M31 39h1M34 39h1M34 40h1M41 40h2"
            />
            <path
              stroke="#404040"
              d="M39 34h2M35 35h1M38 35h3M34 37h1M26 39h1M33 39h1M26 40h1M33 40h1"
            />
            <path
              stroke="#828282"
              d="M34 35h1M27 36h2M30 36h1M32 36h3M39 36h3M27 37h2M32 37h2M35 37h1M39 37h2M29 38h1M38 38h3M35 39h2M38 39h2M35 40h2M39 40h1M43 40h1M16 45h3M49 47h4"
            />
            <path
              stroke="#2d2d2d"
              d="M38 36h1M38 37h1M31 38h1M34 38h1M27 39h3M27 40h2M30 40h1"
            />
            <path
              stroke="#343434"
              d="M19 38h2M26 41h1M33 41h1M26 42h1M33 42h1M41 43h2M41 44h2"
            />
            <path stroke="#1f1f1f" d="M33 38h1" />
            <path
              stroke="#4b4b4b"
              d="M25 41h1M27 41h1M34 41h1M39 41h2M25 42h1M27 42h1M34 42h1M39 42h3M26 43h1M33 43h1M33 44h1"
            />
            <path
              stroke="#9b9b9b"
              d="M28 41h1M32 41h1M37 41h1M29 42h2M37 42h1M29 43h2M35 43h1M39 43h2M28 44h2M35 44h1M38 44h3"
            />
            <path
              stroke="#6c6c6c"
              d="M30 41h1M35 41h2M43 41h1M32 42h1M35 42h2M25 43h1M34 43h1M36 43h1M25 44h1M34 44h1M36 44h1M43 44h1"
            />
          </svg>
        )}
      </Grid>
    );
  }

  if (version === "v2") {
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
        {difficulty === "easy" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="crispEdges"
            viewBox="3.5 -0.5 7 16"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
            }}
          >
            <path stroke="#ffeb3b" d="M6 0h3M6 1h1M8 1h1M8 2h1M6 7h1" />
            <path stroke="#b2a429" d="M4 1h1M9 4h1M4 5h1M5 7h1M6 8h1" />
            <path stroke="#b2a852" d="M5 1h1M4 2h1" />
            <path stroke="#f77c73" d="M7 1h1" />
            <path stroke="#ffb74d" d="M5 2h1M5 4h1" />
            <path stroke="#ffcd83" d="M6 2h1M5 3h1" />
            <path stroke="#ff8a65" d="M7 2h1" />
            <path stroke="#ff9800" d="M4 3h1" />
            <path stroke="#b23d18" d="M6 3h1M7 4h1M8 6h1" />
            <path stroke="#ff5722" d="M7 3h1" />
            <path stroke="#fff176" d="M8 3h1M8 4h1" />
            <path stroke="#b26a00" d="M4 4h1M5 5h1M8 5h1" />
            <path stroke="#7c2b11" d="M6 4h1M8 7h1" />
            <path stroke="#573400" d="M6 5h1M7 6h1" />
            <path stroke="#ac5750" d="M7 5h1" />
            <path stroke="#7c721d" d="M9 5h1M5 6h1" />
            <path stroke="#3d2400" d="M6 6h1" />
            <path stroke="#2b0f06" d="M7 7h1" />
            <path stroke="#624e32" d="M7 8h1M7 9h1M6 13h1" />
            <path stroke="#9a7b4d" d="M6 9h1M6 10h1" />
            <path stroke="#4e3e28" d="M7 10h1M7 14h1" />
            <path stroke="#7b623e" d="M6 11h1M6 12h1" />
            <path stroke="#3e3220" d="M7 11h1M7 12h1M7 13h1M6 14h1M6 15h1" />
            <path stroke="#282015" d="M7 15h1" />
          </svg>
        )}
        {difficulty === "medium" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="crispEdges"
            viewBox="1.5 3.5 14 22"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
            }}
          >
            <path
              stroke="#ff9800"
              d="M6 4h1M9 4h1M8 5h1M10 5h1M8 6h1M10 6h1M10 7h1M2 8h1M14 8h1M11 9h1M14 9h1M10 10h1M12 11h2M2 12h1M13 12h1M2 13h1M13 13h1M2 14h1M10 14h1M13 14h1M8 15h1M10 15h1M12 15h1M2 16h2M10 16h1M2 17h1M13 17h1M13 18h2"
            ></path>
            <path stroke="#ffce26" d="M9 5h1M12 12h1M9 15h1"></path>
            <path stroke="#f86123" d="M7 6h1M7 16h1"></path>
            <path stroke="#ffeb3b" d="M9 6h1M6 7h1M9 8h2M8 10h1M4 14h1"></path>
            <path
              stroke="#ffb74d"
              d="M5 7h1M3 9h1M6 10h1M2 11h1M10 11h1M3 12h1M5 12h2M10 12h2M6 13h1M10 13h2M11 14h1M12 16h1M9 17h1"
            ></path>
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
            <path
              stroke="rgba(255,255,255,0.33725490196078434)"
              d="M2 10h1"
            ></path>
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
            <path
              stroke="#b26a00"
              d="M3 14h1M6 14h1M3 15h1M4 17h1M6 18h1M7 19h2M8 20h1"
            ></path>
            <path stroke="#7c4a00" d="M5 14h1"></path>{" "}
            <path stroke="#573400" d="M7 14h1"></path>
            <path stroke="#ac5750" d="M8 14h1M11 16h1M11 17h1M10 18h1"></path>
            <path stroke="#f5db33" d="M9 14h1"></path>{" "}
            <path stroke="#f77c73" d="M12 14h1"></path>
            <path stroke="#ca532d" d="M6 15h1"></path>{" "}
            <path stroke="#b43823" d="M7 15h1"></path>
            <path stroke="#f44336" d="M11 15h1M11 18h1"></path>{" "}
            <path stroke="#dd5023" d="M4 16h1M5 17h1"></path>
            <path stroke="#dd6531" d="M5 16h1"></path>{" "}
            <path stroke="#e06832" d="M6 16h1"></path>
            <path stroke="#f87430" d="M8 16h1"></path>{" "}
            <path stroke="#c4aa26" d="M6 17h1M7 18h1"></path>
            <path stroke="#d1b226" d="M7 17h1"></path>{" "}
            <path stroke="#f65434" d="M8 17h1"></path>
            <path stroke="#ae726e" d="M10 17h1"></path>{" "}
            <path stroke="#ca4a30" d="M8 18h1"></path>
            <path stroke="#b28f5b" d="M9 18h1"></path>{" "}
            <path stroke="#7a5749" d="M7 20h1"></path>
            <path stroke="#7b594a" d="M7 21h1"></path>{" "}
            <path stroke="#6b655c" d="M8 21h1M8 22h1"></path>
            <path stroke="#7b623e" d="M7 22h1"></path>{" "}
            <path stroke="#715340" d="M7 23h1"></path>
            <path stroke="#3e3220" d="M8 23h1M7 25h1"></path>{" "}
            <path stroke="#644939" d="M7 24h1"></path>
            <path stroke="#4e3e28" d="M8 24h1"></path>
            <path stroke="#282015" d="M8 25h1"></path>{" "}
          </svg>
        )}
        {difficulty === "hard" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="crispEdges"
            viewBox="-0.5 0.5 31 33"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
            }}
          >
            <path
              stroke="#ffc107"
              d="M6 1h1M6 2h1M18 2h1M24 2h1M5 4h1M5 7h1M10 13h1"
            ></path>
            <path stroke="#ffc71f" d="M16 1h1"></path>
            <path
              stroke="rgba(255,235,60,0.5019607843137255)"
              d="M17 1h1M10 2h1M9 3h1M26 5h1M24 6h2M24 9h1M2 13h1M29 13h1M0 15h1M0 23h1M29 25h1M5 26h1M4 27h2M4 28h1M21 28h1M23 28h1M25 28h1M6 29h1M19 29h1M4 30h1M6 30h1M11 30h1M23 30h2M7 31h1"
            ></path>
            <path stroke="#ffd621" d="M25 1h1M17 2h1M5 6h1"></path>
            <path stroke="#ffe12f" d="M7 2h1M8 27h1M10 29h1"></path>
            <path
              stroke="rgba(255,207,40,0.7529411764705882)"
              d="M8 2h1M1 13h1M7 27h1"
            ></path>
            <path
              stroke="rgba(255,235,59,0.8784313725490196)"
              d="M9 2h1M7 3h1M0 14h1M24 28h1M7 30h1"
            ></path>
            <path stroke="#ffa12f" d="M19 2h1M23 6h1M23 7h1M20 9h1"></path>
            <path stroke="rgba(255,190,27,0.984313725490196)" d="M8 3h1"></path>
            <path stroke="#ffcd39" d="M10 3h1"></path>
            <path stroke="#ff8827" d="M17 3h1"></path>
            <path
              stroke="rgba(255,235,62,0.9529411764705882)"
              d="M18 3h1"
            ></path>
            <path
              stroke="rgba(255,235,60,0.7529411764705882)"
              d="M6 4h1M29 5h1M27 22h1M6 28h1M22 29h2"
            ></path>
            <path stroke="#ff7711" d="M7 4h1"></path>
            <path
              stroke="rgba(255,211,42,0.8784313725490196)"
              d="M8 4h1"
            ></path>
            <path
              stroke="rgba(255,255,255,0.10196078431372549)"
              d="M9 4h1"
            ></path>
            <path stroke="#fa7725" d="M10 4h1"></path>
            <path
              stroke="#ff9800"
              d="M11 4h2M16 4h1M14 5h2M17 5h2M11 6h2M14 6h2M17 6h2M8 7h1M12 7h1M14 7h2M17 7h2M17 8h2M17 9h2M21 9h1M5 10h2M19 10h1M23 10h2M19 11h1M23 11h2M4 12h1M19 12h1M22 12h3M17 13h2M20 13h1M22 13h1M4 14h1M20 14h3M20 15h3M4 16h3M22 16h1M4 17h3M22 17h2M5 18h2M22 18h1M5 19h2M17 19h2M22 19h1M14 20h2M17 20h2M20 20h2M14 21h2M17 21h2M20 21h2M5 22h3M17 22h2M5 23h2M22 23h1M5 24h3M22 24h1M10 25h1M22 25h3M8 26h4M11 27h1M20 27h1M11 28h1M16 28h2"
            ></path>
            <path stroke="#ffda32" d="M15 4h1"></path>
            <path
              stroke="rgba(255,239,103,0.6431372549019608)"
              d="M17 4h1"
            ></path>
            <path stroke="#ffc720" d="M18 4h1"></path>
            <path stroke="#ffd938" d="M5 5h1"></path>
            <path stroke="#ffa11d" d="M6 5h1"></path>
            <path stroke="#ffc827" d="M7 5h1"></path>
            <path
              stroke="rgba(255,176,20,0.8901960784313725)"
              d="M8 5h1"
            ></path>
            <path
              stroke="rgba(255,148,56,0.8431372549019608)"
              d="M9 5h1"
            ></path>
            <path stroke="#f29708" d="M10 5h1"></path>
            <path stroke="#ffd731" d="M11 5h1"></path>
            <path stroke="#ffb526" d="M12 5h1"></path>
            <path stroke="#fc9545" d="M13 5h1"></path>
            <path
              stroke="#ffce26"
              d="M16 5h1M16 6h1M20 16h2M16 20h1M16 21h1"
            ></path>
            <path
              stroke="rgba(255,255,255,0.2823529411764706)"
              d="M19 5h1"
            ></path>
            <path
              stroke="rgba(136,127,54,0.7725490196078432)"
              d="M20 5h1M20 6h1"
            ></path>
            <path stroke="#ccb02e" d="M21 5h1"></path>
            <path stroke="#ffef62" d="M22 5h1M1 10h1M1 11h1"></path>
            <path stroke="#ffe83a" d="M23 5h1"></path>
            <path stroke="rgba(255,236,71,0.8)" d="M24 5h1"></path>
            <path stroke="rgba(255,238,92,0.6)" d="M25 5h1M22 8h1"></path>
            <path stroke="#ff5722" d="M4 6h1"></path>
            <path stroke="#fecf32" d="M6 6h1"></path>
            <path stroke="#ffb126" d="M7 6h1M22 10h1M24 15h1"></path>
            <path
              stroke="rgba(255,166,20,0.9019607843137255)"
              d="M8 6h1"
            ></path>
            <path stroke="#ffcf31" d="M9 6h1"></path>
            <path stroke="#ffd289" d="M10 6h1"></path>
            <path stroke="#ffd031" d="M13 6h1"></path>
            <path stroke="#f2db3c" d="M19 6h1"></path>
            <path stroke="#f9e33a" d="M21 6h1"></path>
            <path stroke="#ff6839" d="M22 6h1"></path>
            <path stroke="#cc8126" d="M6 7h1"></path>
            <path stroke="#ffdf39" d="M7 7h1"></path>
            <path
              stroke="#ffc21e"
              d="M9 7h1M5 9h2M20 12h2M21 24h1M9 25h1M21 25h1M21 26h1M10 27h1"
            ></path>
            <path stroke="#ffc9a0" d="M10 7h1M9 9h1"></path>
            <path stroke="#ffd699" d="M11 7h1M9 8h1"></path>
            <path stroke="#f86123" d="M13 7h1M13 22h1"></path>
            <path
              stroke="#ffeb3b"
              d="M16 7h1M22 7h1M11 8h2M11 9h2M0 10h1M16 10h3M14 13h2M8 19h2"
            ></path>
            <path stroke="#ccb833" d="M19 7h1"></path>
            <path stroke="#f2d840" d="M20 7h1"></path>
            <path stroke="#ffdc36" d="M21 7h1"></path>
            <path
              stroke="rgba(255,218,50,0.9529411764705882)"
              d="M3 8h1"
            ></path>
            <path stroke="#ffcf2c" d="M4 8h1"></path>
            <path stroke="#ffda38" d="M5 8h1"></path>
            <path stroke="#fc9704" d="M6 8h1"></path>
            <path stroke="#ffdd36" d="M7 8h1M25 17h1"></path>
            <path stroke="#ffc384" d="M8 8h1"></path>
            <path
              stroke="#ffb74d"
              d="M10 8h1M10 9h1M7 11h1M7 12h1M11 13h2M5 14h2M17 14h2M5 15h2M17 15h2M7 16h1M10 16h3M17 16h3M11 17h2M17 17h3M11 18h2M17 18h3M19 19h1M20 22h2M16 23h1M16 24h1"
            ></path>
            <path stroke="#f44537" d="M13 8h1M13 9h1"></path>
            <path
              stroke="#fff176"
              d="M14 8h3M14 9h3M17 11h2M17 12h2M16 16h1"
            ></path>
            <path
              stroke="rgba(194,166,52,0.8392156862745098)"
              d="M19 8h1"
            ></path>
            <path stroke="#ffdc3a" d="M20 8h1"></path>
            <path stroke="#ffb12a" d="M21 8h1"></path>
            <path
              stroke="rgba(255,181,43,0.8784313725490196)"
              d="M23 8h1"
            ></path>
            <path stroke="#f29b0b" d="M3 9h1"></path>
            <path stroke="#f3bd2c" d="M4 9h1"></path>
            <path stroke="#ff6819" d="M7 9h1M23 16h1"></path>
            <path stroke="#ffe7a5" d="M8 9h1"></path>
            <path
              stroke="rgba(255,186,57,0.9019607843137255)"
              d="M19 9h1"
            ></path>
            <path
              stroke="#ffd72d"
              d="M22 9h1M26 18h1M7 25h1M12 27h1M21 27h1"
            ></path>
            <path stroke="#ff9520" d="M23 9h1"></path>
            <path stroke="#ffc11d" d="M25 9h1M4 20h1M5 21h1"></path>
            <path stroke="#cca623" d="M2 10h1"></path>
            <path stroke="#fce135" d="M3 10h1"></path>
            <path stroke="#ff9a07" d="M4 10h1"></path>
            <path
              stroke="#ffb226"
              d="M7 10h1M21 11h1M25 18h1M17 27h1M13 29h1"
            ></path>
            <path stroke="#ffd941" d="M8 10h2"></path>
            <path stroke="#ffd452" d="M10 10h3M10 11h1M10 12h1M8 13h2"></path>
            <path stroke="#f44538" d="M13 10h1"></path>
            <path
              stroke="#f87e38"
              d="M14 10h2M14 11h2M14 12h2M8 20h2M8 21h2"
            ></path>
            <path stroke="#ffda3b" d="M20 10h1"></path>
            <path stroke="#ff7811" d="M21 10h1M21 13h1M18 27h1M12 28h1"></path>
            <path stroke="rgba(213,197,50,0.6)" d="M25 10h1"></path>
            <path
              stroke="rgba(255,255,255,0.3607843137254902)"
              d="M0 11h1"
            ></path>
            <path stroke="#cc7a03" d="M2 11h1"></path>
            <path
              stroke="rgba(252,213,49,0.9803921568627451)"
              d="M3 11h1"
            ></path>
            <path stroke="#ffad0f" d="M4 11h1M4 15h1"></path>
            <path stroke="#e6b31e" d="M5 11h1"></path>
            <path stroke="#ffb716" d="M6 11h1M19 28h1"></path>
            <path stroke="#ffe343" d="M8 11h2M8 12h2"></path>
            <path stroke="#ffdca8" d="M11 11h2M11 12h2M10 14h1M10 15h1"></path>
            <path stroke="#f6543f" d="M13 11h1M13 12h1"></path>
            <path stroke="#f8815b" d="M16 11h1M16 12h1"></path>
            <path stroke="#ffa93b" d="M20 11h1"></path>
            <path stroke="#ff6719" d="M22 11h1"></path>
            <path stroke="#f39e0f" d="M25 11h1"></path>
            <path stroke="#ffc331" d="M26 11h1"></path>
            <path stroke="rgba(255,255,255,0.2)" d="M0 12h1"></path>
            <path stroke="rgba(255,210,52,0.8)" d="M1 12h1"></path>
            <path
              stroke="rgba(255,154,7,0.9019607843137255)"
              d="M2 12h1"
            ></path>
            <path
              stroke="rgba(217,138,13,0.9411764705882353)"
              d="M3 12h1"
            ></path>
            <path stroke="#f99e07" d="M5 12h1"></path>
            <path stroke="#e67c07" d="M6 12h1M7 23h1"></path>
            <path stroke="#f76a1e" d="M25 12h1"></path>
            <path
              stroke="rgba(255,151,0,0.7529411764705882)"
              d="M0 13h1M2 15h1M3 16h1M25 24h1"
            ></path>
            <path
              stroke="rgba(194,170,39,0.9215686274509803)"
              d="M3 13h1"
            ></path>
            <path stroke="#ffa207" d="M4 13h1"></path>
            <path stroke="#ffb35a" d="M5 13h1"></path>
            <path stroke="#dda756" d="M6 13h1"></path>
            <path stroke="#f9a49d" d="M7 13h1"></path>
            <path stroke="#f87351" d="M13 13h1"></path>
            <path stroke="#f85c47" d="M16 13h1"></path>
            <path stroke="#ccc267" d="M19 13h1"></path>
            <path stroke="#cc8a02" d="M23 13h1"></path>
            <path
              stroke="rgba(255,151,0,0.5019607843137255)"
              d="M2 14h1M25 19h2M5 25h1M22 26h1"
            ></path>
            <path stroke="rgba(240,143,0,0.8)" d="M3 14h1"></path>
            <path stroke="#ffcd83" d="M7 14h1M11 14h2M7 15h1M11 15h2"></path>
            <path stroke="#c9b18d" d="M8 14h2M8 15h2"></path>
            <path stroke="#f5d536" d="M13 14h1M13 15h1"></path>
            <path stroke="#ffad94" d="M14 14h2M14 15h2"></path>
            <path stroke="#fff8bc" d="M16 14h1M16 15h1"></path>
            <path stroke="#cc7a00" d="M19 14h1M19 15h1M14 29h1"></path>
            <path stroke="#ca6211" d="M23 14h1"></path>
            <path stroke="#ffd62c" d="M1 15h1M1 16h1"></path>
            <path
              stroke="rgba(198,118,0,0.9019607843137255)"
              d="M3 15h1"
            ></path>
            <path stroke="#cb5315" d="M23 15h1"></path>
            <path stroke="#a4814d" d="M8 16h2"></path>
            <path stroke="#efd336" d="M13 16h1"></path>
            <path stroke="#b23d18" d="M14 16h2M14 17h2M14 18h2M16 22h1"></path>
            <path stroke="#ffae20" d="M24 16h1"></path>
            <path stroke="#ffd832" d="M25 16h1"></path>
            <path stroke="#aa2f26" d="M7 17h1M7 18h1"></path>
            <path stroke="#b2a429" d="M8 17h2M8 18h2M10 20h1M10 21h1"></path>
            <path stroke="#b28036" d="M10 17h1M10 18h1"></path>
            <path stroke="#7c2b11" d="M13 17h1M13 18h1"></path>
            <path stroke="#ffed50" d="M16 17h1M16 18h1"></path>
            <path stroke="#ffe054" d="M20 17h2M20 18h2"></path>
            <path stroke="#ffcb44" d="M24 17h1"></path>
            <path stroke="#ccb32a" d="M26 17h1"></path>
            <path stroke="#ccbc2f" d="M29 17h1"></path>
            <path stroke="#ffa51a" d="M23 18h1"></path>
            <path stroke="#f9741c" d="M24 18h1"></path>
            <path stroke="#e6cf33" d="M27 18h1"></path>
            <path stroke="#a39526" d="M28 18h1"></path>
            <path stroke="#e0cf38" d="M29 18h1"></path>
            <path
              stroke="#b26a00"
              d="M7 19h1M11 19h2M7 20h1M7 21h1M8 23h2M8 24h2M11 25h2M13 26h3M9 27h1M13 27h3M12 29h1"
            ></path>
            <path stroke="#7c4a00" d="M10 19h1"></path>
            <path stroke="#573400" d="M13 19h1"></path>
            <path
              stroke="#ac5750"
              d="M14 19h2M19 22h1M19 23h1M19 24h1M17 25h2"
            ></path>
            <path stroke="#f5db33" d="M16 19h1"></path>
            <path stroke="#f77c73" d="M20 19h2"></path>
            <path stroke="#ff9c0b" d="M23 19h1"></path>
            <path stroke="#ffaa2a" d="M24 19h1M20 25h1M12 26h1"></path>
            <path stroke="#ffec45" d="M29 19h1"></path>
            <path
              stroke="rgba(255,157,1,0.8784313725490196)"
              d="M5 20h1"
            ></path>
            <path stroke="#df960e" d="M6 20h1"></path>
            <path stroke="#ca532d" d="M11 20h2M11 21h2"></path>
            <path stroke="#b43823" d="M13 20h1M13 21h1"></path>
            <path stroke="#f44336" d="M19 20h1M19 21h1M19 25h1"></path>
            <path stroke="#ff8f0e" d="M22 20h1"></path>
            <path stroke="#fea52e" d="M23 20h1"></path>
            <path stroke="#ff790f" d="M24 20h1"></path>
            <path
              stroke="rgba(255,151,0,0.8784313725490196)"
              d="M4 21h1"
            ></path>
            <path
              stroke="rgba(228,127,30,0.9215686274509803)"
              d="M6 21h1"
            ></path>
            <path
              stroke="#ff8808"
              d="M22 21h1M21 23h1M23 23h1M25 23h1M20 26h1"
            ></path>
            <path stroke="#ff800c" d="M23 21h1"></path>
            <path stroke="#e0790c" d="M24 21h1"></path>
            <path stroke="#ffe535" d="M27 21h1"></path>
            <path stroke="#dd5023" d="M8 22h2M10 23h1M10 24h1"></path>
            <path stroke="#dd6531" d="M10 22h1"></path>
            <path stroke="#e06832" d="M11 22h2"></path>
            <path stroke="#f87430" d="M14 22h2"></path>
            <path stroke="#ff7c0e" d="M22 22h1"></path>
            <path stroke="#eb8f05" d="M23 22h1"></path>
            <path stroke="#f2980d" d="M24 22h1"></path>
            <path stroke="#ca4a19" d="M25 22h1"></path>
            <path stroke="#ff8c14" d="M26 22h1"></path>
            <path stroke="#c4aa26" d="M11 23h2M11 24h2M13 25h1"></path>
            <path stroke="#d1b226" d="M13 23h1M13 24h1"></path>
            <path stroke="#f65434" d="M14 23h2M14 24h2"></path>
            <path stroke="#ae726e" d="M17 23h2M17 24h2"></path>
            <path stroke="#f3a50f" d="M20 23h1"></path>
            <path stroke="#f39f12" d="M24 23h1"></path>
            <path stroke="rgba(253,207,58,0.6)" d="M26 23h1"></path>
            <path stroke="#ff9004" d="M20 24h1"></path>
            <path stroke="#e68e11" d="M23 24h1"></path>
            <path stroke="#e68900" d="M24 24h1M18 28h1"></path>
            <path
              stroke="rgba(255,165,3,0.7529411764705882)"
              d="M6 25h1"
            ></path>
            <path stroke="#cc9b18" d="M8 25h1M15 29h1"></path>
            <path stroke="#ca4a30" d="M14 25h2"></path>
            <path stroke="#b28f5b" d="M16 25h1"></path>
            <path
              stroke="rgba(255,229,54,0.9686274509803922)"
              d="M7 26h1"
            ></path>
            <path stroke="#ccac24" d="M16 26h1M15 28h1"></path>
            <path stroke="#cc4d17" d="M17 26h1"></path>
            <path stroke="#ffd62d" d="M18 26h1"></path>
            <path stroke="#ffa513" d="M19 26h1"></path>
            <path stroke="#ccb42a" d="M16 27h1"></path>
            <path stroke="#ffa70b" d="M19 27h1"></path>
            <path stroke="#d9c832" d="M9 28h1"></path>
            <path stroke="#c67e13" d="M10 28h1"></path>
            <path stroke="#ffcb33" d="M13 28h1"></path>
            <path stroke="#a39525" d="M14 28h1"></path>
            <path
              stroke="rgba(255,186,50,0.7529411764705882)"
              d="M22 28h1"
            ></path>
            <path stroke="#ecb207" d="M11 29h1"></path>
            <path stroke="#cc5314" d="M16 29h1"></path>
            <path stroke="#f29c09" d="M17 29h1"></path>
            <path stroke="rgba(170,157,40,0.6)" d="M18 29h1"></path>
            <path stroke="#ffe036" d="M13 30h1"></path>
            <path stroke="#f2cf2d" d="M14 30h1"></path>
            <path stroke="#f6c931" d="M15 30h1"></path>
            <path stroke="#af540e" d="M16 30h1M15 31h1"></path>
            <path stroke="#ffd230" d="M14 31h1"></path>
            <path stroke="#795548" d="M14 32h1"></path>
            <path stroke="#3c2a24" d="M15 32h1M14 33h1"></path>
            <path stroke="#5e5552" d="M15 33h1"></path>
          </svg>
        )}
      </Grid>
    );
  }
};

export default DifficultyIcon;
