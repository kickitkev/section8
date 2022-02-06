import React from "react";
import { Button } from "@mui/material";

const StandardButton = (props) => {
  return (
    <Button
      variant={props.variant}
      size={props.variant}
      onClick={props.onClick}
      fullWidth={props.fullWidth}
      type={props.type}
    >
      {props.children}
    </Button>
  );
};

export default StandardButton;
