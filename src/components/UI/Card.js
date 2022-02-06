import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import styles from "./Card.module.css";

const BasicCard = (props) => {
  return (
    <Card className={styles.UserFormCard} variant={props.variant}>
      <CardContent className={styles.FormContent}>{props.children}</CardContent>
    </Card>
  );
};

export default BasicCard;
