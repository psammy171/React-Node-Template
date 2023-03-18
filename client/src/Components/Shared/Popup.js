import React from "react";
import Text from "./Text";
import Card from "./Card";
import { makeStyles } from "@mui/styles";
import close from "../../assets/Images/close.svg";
import { COLORS } from "../../assets/styles/Color";

const useStyles = makeStyles(() => ({
  root: {
    top: "0px",
    zIndex: -1,
    left: "0px",
    right: "0px",
    bottom: "0px",
    position: "fixed",
    backgroundColor: "#000000b3",
  },
  popUp: {
    margin: "auto",
    padding: "7px",
    marginTop: "10%",
    minWidth: "400px",
    borderRadius: "3px",
    position: "relative",
    width: "fit-content",
    backgroundColor: COLORS.white,
  },
  closeIcon: {
    top: "3px",
    right: "3px",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    position: "absolute",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: COLORS.lightGrey,
    },
  },
  open: {
    opacity: 1,
    zIndex:2,
  },
  close: {
    opacity: 0,
  },
  title:{
    fontWeight:'bold',
    fontSize:'26px',
  }
}));

const Popup = (props) => {
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${props.open ? classes.open : classes.close}`}>
      <Card className={`${classes.popUp} ${props?.className}`} style={props?.style}>
        <Text className={classes.title} variant="sub-heading">{props.title}</Text>
        <img
          className={classes.closeIcon}
          src={close}
          alt={close}
          onClick={props.onClose}
        />
        {props.children}
      </Card>
    </div>
  );
};

export default Popup;
