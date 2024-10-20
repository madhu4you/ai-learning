/* eslint-disable react/prop-types */
import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

export const PageLoader = (props) => {
  return (
    <Backdrop
      sx={{
        color: (theme) => theme.palette.background.paper,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={props.openState}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

PageLoader.defaultProps = {
  openState: false,
};
