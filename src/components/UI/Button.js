import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({ variant, onClick, fullWidth, type, label }) => {
  return (
    <MuiButton
      variant={variant}
      onClick={onClick}
      fullWidth={fullWidth}
      type={type}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
