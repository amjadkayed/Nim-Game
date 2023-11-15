import { Grid } from "@mui/material";
import { FC } from "react";

type HeapCustomizationProps = {
  height?: string;
  width?: string;
  [key: string]: unknown;
};

const HeapCustomization: FC<HeapCustomizationProps> = ({
  height = "auto",
  width = "auto",
  version,
  text,
  ...rest
}) => {
  return (
    <Grid
      item
      height={height}
      width={width}
      zIndex={20}
      marginY={'1%'}
      {...rest}
      // bgcolor={"RED"}
    ></Grid>
  );
};

export default HeapCustomization;
