import { Grid } from "@mui/material";
import { FC } from "react";

type HeapCustomizationProps = {
  height?: string;
  width?: string;
  number?: number;
  index: number;
  isDeleteAvailable?: boolean;
  handleHeapDelete: (index: number) => void;
  addValueToHeap: (index: number, num: number) => void;
  [key: string]: unknown;
};

const HeapCustomization: FC<HeapCustomizationProps> = ({
  height = "auto",
  width = "auto",
  isDeleteAvailable = false,
  version,
  number,
  index,
  handleHeapDelete,
  addValueToHeap,
  ...rest
}) => {
  return (
    <Grid
      container
      height={height}
      width={width}
      zIndex={20}
      {...rest}
      justifyContent={"center"}
      alignContent={"center"}
      alignItems={"center"}
      position={"relative"}
      justifyItems={"center"}
    >
      <Grid
        container
        position={"absolute"}
        style={{ userSelect: "none" }}
        height={"20%"}
        width={"5%"}
        zIndex={30}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
        justifyItems={"center"}
        fontSize={"2vh"}
      >
        {number}
      </Grid>
      <Grid
        position={"absolute"}
        height={"80%"}
        left={"5%"}
        width={"20%"}
        zIndex={30}
        style={{ cursor: "pointer" }}
        onClick={() => {
          addValueToHeap(index, -1);
        }}
      />
      <Grid
        position={"absolute"}
        height={"80%"}
        right={"5%"}
        width={"20%"}
        zIndex={30}
        style={{ cursor: "pointer" }}
        onClick={() => {
          addValueToHeap(index, 1);
        }}
      />
      {isDeleteAvailable && (
        <Grid
          position={"absolute"}
          height={"30%"}
          right={"-8%"}
          top={"0%"}
          width={"30%"}
          zIndex={30}
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleHeapDelete(index);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="crispEdges"
            viewBox="67.5 4.5 12 11"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
            }}
          >
            <path
              stroke="#000000"
              d="M71 5h5M70 6h1M76 6h1M69 7h2M76 7h2M68 8h1M71 8h1M75 8h1M78 8h1M68 9h1M72 9h1M74 9h1M78 9h1M68 10h1M73 10h1M78 10h1M68 11h1M72 11h1M74 11h1M78 11h1M68 12h1M71 12h1M75 12h1M78 12h1M69 13h2M76 13h2M70 14h1M76 14h1M71 15h5"
            />
            <path
              stroke="#ff0000"
              d="M71 6h5M71 7h5M69 8h2M72 8h3M76 8h2M69 9h3M73 9h1M75 9h3M69 10h4M74 10h4M69 11h3M73 11h1M75 11h3M69 12h2M72 12h3M76 12h2M71 13h5M71 14h5"
            />
          </svg>
        </Grid>
      )}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="crispEdges"
        viewBox="27.5 8.5 48 32"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      >
        <path
          stroke="#000000"
          d="M28 9h8M37 9h38M28 10h2M38 10h1M64 10h2M74 10h1M28 11h1M38 11h1M64 11h2M74 11h1M28 12h1M38 12h1M64 12h1M74 12h1M28 13h2M31 13h4M38 13h1M64 13h1M74 13h1M28 14h1M32 14h4M38 14h1M64 14h1M68 14h3M74 14h1M28 15h1M32 15h4M38 15h1M64 15h1M67 15h5M74 15h1M28 16h1M32 16h4M38 16h1M64 16h1M67 16h5M74 16h1M28 17h1M31 17h5M38 17h1M64 17h1M66 17h6M74 17h1M28 18h1M32 18h7M64 18h8M74 18h1M28 19h1M31 19h8M64 19h8M74 19h1M28 20h1M31 20h8M64 20h8M74 20h1M28 21h1M31 21h8M64 21h9M74 21h1M28 22h1M31 22h8M64 22h9M74 22h1M28 23h1M30 23h9M64 23h5M70 23h5M28 24h1M30 24h9M64 24h5M70 24h5M28 25h3M36 25h3M64 25h3M72 25h3M28 26h4M36 26h3M64 26h5M72 26h3M28 27h11M64 27h5M71 27h4M28 28h11M64 28h1M66 28h4M71 28h2M74 28h1M28 29h11M64 29h1M68 29h4M74 29h1M28 30h1M30 30h9M64 30h1M68 30h3M74 30h1M28 31h1M32 31h7M64 31h1M68 31h3M74 31h1M33 32h2M36 32h3M64 32h1M74 32h1M34 33h1M37 33h2M64 33h1M74 33h1M28 34h1M37 34h2M64 34h1M74 34h1M28 35h1M37 35h2M64 35h1M74 35h1M28 36h1M37 36h2M64 36h1M74 36h1M28 37h1M37 37h2M64 37h1M74 37h1M28 38h1M37 38h2M64 38h1M74 38h1M28 39h2M36 39h3M64 39h1M66 39h9M28 40h47"
        ></path>
        <path
          stroke="#4d4d4d"
          d="M36 9h1M30 10h1M32 10h2M37 10h1M66 10h8M35 11h3M66 11h2M73 11h1M32 12h1M34 12h4M65 12h2M70 12h1M73 12h1M35 13h3M66 13h1M68 13h3M31 14h1M36 14h1M65 14h3M31 15h1M36 15h1M65 15h2M29 16h3M36 16h1M65 16h2M30 17h1M36 17h1M65 17h1M30 18h2M29 19h2M72 19h1M29 20h2M72 20h1M29 21h2M30 22h1M29 24h1M65 28h1M73 28h1M65 29h3M73 29h1M29 30h1M65 30h1M67 30h1M71 30h1M73 30h1M29 31h3M65 31h1M67 31h1M71 31h1M28 32h1M31 32h2M35 32h1M65 32h1M67 32h3M28 33h1M31 33h3M35 33h2M67 33h2M32 34h5M65 34h1M68 34h1M31 35h3M65 35h1M69 35h2M65 36h1M71 36h1M33 37h1M65 37h2M29 38h1M65 38h3M73 38h1M30 39h2M65 39h1"
        ></path>
        <path
          stroke="#828282"
          d="M31 10h1M34 10h3M34 11h1M68 11h5M30 12h1M67 12h3M72 12h1M30 13h1M65 13h1M67 13h1M71 13h2M29 14h2M37 14h1M71 14h1M29 15h2M37 15h1M72 15h2M37 16h1M72 16h2M29 17h1M37 17h1M72 17h2M29 18h1M72 18h2M73 19h1M73 20h1M73 21h1M29 22h1M73 22h1M29 23h1M72 29h1M66 30h1M72 30h1M66 31h1M72 31h2M29 32h2M66 32h1M70 32h4M29 33h2M65 33h2M69 33h5M29 34h3M67 34h1M69 34h4M34 35h3M67 35h2M72 35h1M32 36h4M66 36h1M69 36h2M29 37h1M32 37h1M67 37h1M69 37h1M68 38h2M71 38h2"
        ></path>
        <path
          stroke="#7c7c7c"
          d="M39 10h8M57 10h2M61 10h3M39 11h6M61 11h3M39 12h2M61 12h1M61 37h2M39 38h1M60 38h2M39 39h2"
        ></path>
        <path
          stroke="#b2b2b2"
          d="M47 10h10M45 11h16M41 12h5M58 12h3M63 12h1M39 13h4M60 13h4M39 14h2M62 14h2M39 36h1M62 36h2M39 37h3M57 37h4M40 38h20M41 39h20"
        ></path>
        <path stroke="#565656" d="M59 10h2M62 12h1M63 37h1M61 39h1"></path>
        <path
          stroke="#353535"
          d="M29 11h2M33 11h1M29 12h1M33 12h1M32 26h3M70 26h2M70 27h1M70 28h1M36 36h1M34 37h3M70 37h3M34 38h3M32 39h4"
        ></path>
        <path stroke="#747474" d="M31 11h1M29 35h1M30 36h1M31 38h1"></path>
        <path
          stroke="#5a5a5a"
          d="M32 11h1M73 34h1M73 35h1M29 36h1M72 36h2M30 37h1M73 37h1M30 38h1M70 38h1"
        ></path>
        <path
          stroke="#a7a7a7"
          d="M31 12h1M71 12h1M73 14h1M66 34h1M30 35h1M66 35h1M31 36h1M68 36h1M31 37h1M68 37h1"
        ></path>
        <path
          stroke="#ffffff"
          d="M46 12h12M43 13h17M41 14h21M39 15h25M39 16h25M39 17h25M39 18h25M39 19h25M39 20h25M39 21h25M39 22h25M39 23h25M69 23h1M39 24h25M69 24h1M31 25h5M39 25h25M67 25h5M39 26h25M69 26h1M39 27h25M69 27h1M39 28h25M39 29h25M39 30h25M39 31h25M39 32h25M39 33h25M39 34h25M39 35h25M40 36h22M42 37h15"
        ></path>
        <path stroke="#c1c1c1" d="M73 13h1M72 14h1M71 35h1M67 36h1"></path>
        <path stroke="#252525" d="M35 26h1"></path>
        <path stroke="#616161" d="M32 38h1"></path>
        <path stroke="#727272" d="M33 38h1"></path>
        <path stroke="#3c3c3c" d="M62 38h2M62 39h2"></path>
      </svg>
    </Grid>
  );
};

export default HeapCustomization;
