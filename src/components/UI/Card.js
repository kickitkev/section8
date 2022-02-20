import { Card as MuiCard } from "@mui/material";
import { CardContent } from "@mui/material";

const Card = ({ variant, children }) => {
  return (
    <MuiCard variant={variant}>
      <CardContent>{children}</CardContent>
    </MuiCard>
  );
};

export default Card;
