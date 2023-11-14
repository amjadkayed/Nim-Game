import { Grid } from "@mui/material";
import { FC } from "react";

type SunProps = {
  height?: string;
  width?: string;
  [key: string]: unknown;
};

const Sun: FC<SunProps> = ({ height = "auto", width = "auto", ...rest }) => {
  return (
    <Grid
      item
      height={height}
      width={width}
      display={"block"}
      position={"absolute"}
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        shape-rendering="crispEdges"
        viewBox="34.5 10.5 21 20"
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      >
        <path
          stroke="#ffff00"
          d="M42 11h6M42 12h6M39 13h3M48 13h3M38 14h1M51 14h1M37 15h1M52 15h1M37 16h1M52 16h1M37 17h1M52 17h1M35 18h2M53 18h2M35 19h2M53 19h2M35 20h2M53 20h2M35 21h2M53 21h2M35 22h2M53 22h2M35 23h2M53 23h2M37 24h1M52 24h1M37 25h1M52 25h1M37 26h1M52 26h1M38 27h1M51 27h1M39 28h3M48 28h3M42 29h6M42 30h6"
        />
        <path
          stroke="#ffff8d"
          d="M42 13h6M39 14h3M48 14h3M38 15h3M50 15h2M38 16h1M51 16h1M38 17h1M51 17h1M37 18h1M52 18h1M37 19h1M52 19h1M37 20h1M52 20h1M37 21h1M52 21h1M37 22h1M52 22h1M37 23h1M52 23h1M38 24h1M51 24h1M38 25h1M51 25h1M38 26h3M50 26h2M39 27h3M48 27h3M42 28h6"
        />
        <path
          stroke="#ffeb3b"
          d="M42 14h6M41 15h9M39 16h12M39 17h12M38 18h14M38 19h14M38 20h14M38 21h14M38 22h14M38 23h14M39 24h12M39 25h12M41 26h9M42 27h6"
        />
      </svg>
    </Grid>
  );
};

export default Sun;
