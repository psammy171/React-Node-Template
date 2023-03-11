import { Link as ReactLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    link:{
        textDecoration:'none',
    }
}))

const Link = (props) => {
    const classes = useStyles()

    return (
        <ReactLink to={props.link} className={`${classes.link} ${props?.className}`} style={props?.style}>
            {props.children}
        </ReactLink>
    )
}

export default Link;