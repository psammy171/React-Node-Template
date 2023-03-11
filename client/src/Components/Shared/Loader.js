import React from "react";
import { makeStyles } from "@mui/styles";
import { COLORS } from "../../assets/styles/Color";

const useStyles = makeStyles({
    '@keyframes spin': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      loader:{
        border: props => `3px solid ${props?.color ? props.color : COLORS.primary}`,
        borderTop:'3px solid transparent !important',
        borderRadius: '50%',
        width: props => props.size,
        height: props => props.size,
        animation: '$spin 1s linear infinite',
      },
      loaderRoot: {
        display: 'flex',
        justifyContent: 'center',
      },
      show:{
        display:'flex'
      },
      hide:{
        display:'none !important',
      }
})

const Loader = (props) => {
    const classes = useStyles(props)

    return (
      <div className={`${classes.loaderRoot} ${props.show ? classes.show : classes.hide} ${props?.className}`} style={props?.style}>
        <div className={classes.loader}></div>
      </div>
    )
}

export default Loader;