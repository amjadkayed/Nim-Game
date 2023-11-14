import { Grid } from "@mui/material";
import { FC } from "react";

type Cloud2Props = {
  height?: string;
  width?: string;
  [key: string]: unknown;
};

const Cloud2: FC<Cloud2Props> = ({
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
      // className="cloud-animation"
      position={"absolute"}
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="crispEdges"
        viewBox="23.5 60.5 51 26"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      >
        <path
          stroke="#170715"
          d="M44 61h13M42 62h2M57 62h1M41 63h1M58 63h1M41 64h1M59 64h1M40 65h1M59 65h1M39 66h1M60 66h1M39 67h1M60 67h1M31 68h8M60 68h1M30 69h1M61 69h1M29 70h1M61 70h1M28 71h1M62 71h1M27 72h1M63 72h8M27 73h1M71 73h1M27 74h1M72 74h1M27 75h1M73 75h1M27 76h1M73 76h1M26 77h1M73 77h1M26 78h1M73 78h1M26 79h1M73 79h1M27 80h1M72 80h1M25 81h2M28 81h1M52 81h6M70 81h2M24 82h1M27 82h1M29 82h3M38 82h3M51 82h1M58 82h4M69 82h1M25 83h2M28 83h2M32 83h6M41 83h2M50 83h1M62 83h7M25 84h1M27 84h1M30 84h1M43 84h2M49 84h1M25 85h1M27 85h3M45 85h4M26 86h1"
        />
        <path
          stroke="#a5a5a5"
          d="M44 62h13M44 63h14M43 64h16M43 65h16M42 66h18M42 67h18M39 68h1M42 68h18M36 69h4M42 69h18M30 70h1M36 70h5M43 70h16M37 71h5M44 71h6M53 71h5M38 72h5M45 72h5M43 73h6M43 74h5M44 75h3M25 82h1M26 84h1M28 84h1"
        />
        <path
          stroke="#7f7e92"
          d="M42 63h2M42 64h1M41 65h2M40 66h2M40 67h2M40 68h2M40 69h2M31 70h1M41 70h2M29 71h3M42 71h2M28 72h3M43 72h2M61 72h1M28 73h3M61 73h1M28 74h4M60 74h3M71 74h1M28 75h5M60 75h4M70 75h3M28 76h6M41 76h1M52 76h2M59 76h14M27 77h15M51 77h22M27 78h16M50 78h23M27 79h16M49 79h24M28 80h44M29 81h23M58 81h12M32 82h6M41 82h10M62 82h7M43 83h7M45 84h4"
        />
        <path
          stroke="#94949d"
          d="M31 69h5M60 69h1M32 70h4M59 70h2M32 71h5M50 71h3M58 71h4M31 72h7M50 72h11M62 72h1M31 73h12M49 73h12M62 73h9M32 74h11M48 74h12M63 74h8M33 75h11M47 75h13M64 75h6M34 76h7M42 76h10M54 76h5M42 77h9M43 78h7M43 79h6"
        />
        <path stroke="#706f8b" d="M26 82h1M29 84h1M26 85h1" />
      </svg>
    </Grid>
  );
};

export default Cloud2;
