import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({ variant, onClick, fullWidth, type, children }) => {
  return (
    <MuiButton
      variant={variant}
      onClick={onClick}
      fullWidth={fullWidth}
      type={type}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
