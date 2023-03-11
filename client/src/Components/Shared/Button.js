import React from "react";
import Loader from "./Loader";
import { makeStyles } from "@mui/styles";
import { COLORS } from "../../assets/styles/Color";

const useStyles = makeStyles(() => ({
  default: {
    minHeight:'35px',
    minWidth:'100px',
    fontSize: "18px",
    fontFamily: "Reem kufi, sans0serif",
    "&:hover": {
      cursor: "pointer",
    },
  },
  secondary: {
    fontWeight: "bold",
    color: COLORS.primary,
    backgroundColor: COLORS.white,
    border: `solid 2px ${COLORS.primary}`,
  },
  secondaryHover:{
    "&:hover": {
      color: COLORS.primaryDark,
      border: `solid 2px ${COLORS.primaryDark}`,
    },
  },
  primary: {
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    border: `solid 2px ${COLORS.primary}`,
  },
  primaryHover:{
    "&:hover": {
      backgroundColor: COLORS.primaryDark,
      border: `solid 2px ${COLORS.primaryDark}`,
    },
  },
  loading:{
    "&:hover":{
      cursor:'not-allowed',
    }
  },
  disabledPrimary:{
    color:COLORS.disabledPrimary,
    '&:hover':{
      backgroundColor:`${COLORS.primary} !important`,
      border:`solid 2px ${COLORS.primary} `,
      cursor:'not-allowed',
    }
  },
  disabledSecondary:{
    color:COLORS.disabledSecondary,
    border:`solid 2px ${COLORS.disabledSecondary}`,
    '&:hover':{
      cursor:'not-allowed',
      color:COLORS.disabledSecondary,
      border:`solid 2px ${COLORS.disabledSecondary}`,
    }
  },
  loader:{
    position:'relative',
  }
}));

const Button = (props) => {
  const classes = useStyles();

  const onClick = () => {
    if(!props.loading && props.onClick){
      props?.onClick()
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${classes.default} ${
        props.variant === "secondary" ? classes.secondary : classes.primary
      } ${props.disabled ? (props.variant === "secondary" ? classes.disabledSecondary : classes.disabledPrimary ): ''} ${props?.className}
      ${props.loading ? classes.loading : props.variant === "secondary" ? classes.secondaryHover : classes.primaryHover}`}
      style={props?.style}
    >
      {!props.loading && props.children}
      {props.loading && <Loader color={props.variant === "secondary" ? COLORS.primary :'#fff'} show={true} className={classes.loader} size="14px"/>}
    </button>
  );
};

export default Button;
