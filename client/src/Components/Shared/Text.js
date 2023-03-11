import React from "react";
import { makeStyles } from "@mui/styles";
import { COLORS } from "../../assets/styles/Color";

const useStyles = makeStyles(() => ({
  default: {
    margin: "0px",
    fontSize: "16px",
  },
  small:{
    fontSize:'13px',
  },
  subHeading: {
    fontSize: "22px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bolder",
    color: COLORS.primary,
  },
}));

const Text = (props) => {
  const classes = useStyles();

  const getVariantStyle = () => {
    switch (props.variant) {
      case "heading":
        return classes.heading;
      case "sub-heading":
        return classes.subHeading;
      case "small":
        return classes.small
      default:
        return;
    }
  };

  return (
    <p className={`${classes.default} ${getVariantStyle()} ${props?.className}`} style={props?.style}>
      {props.children}
    </p>
  );
};

export default Text;
