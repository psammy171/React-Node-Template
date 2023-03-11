import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  card: {
    margin: "10px",
    width: "fit-content",
    backgroundColor:'#fff',
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
}));

const Card = (props) => {
  const classes = useStyles();

  return (
    <div className={`${classes.card} ${props?.className}`} style={props?.style}>{props.children}</div>
  );
};

export default Card;
