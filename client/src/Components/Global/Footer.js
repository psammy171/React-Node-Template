import { makeStyles } from "@mui/styles";
import Text from "../Shared/Text";
import { COLORS } from "../../assets/styles/Color";

const useStyles = makeStyles(() => ({
    footer:{
        position:'fixed',
        bottom:'0px',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        height:'20px',
        backgroundColor:COLORS.primary,
    },
    footerText:{
        color:COLORS.white,
    }
}))

const Footer = () => {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Text variant="small" className={classes.footerText}>www.unacero.com</Text>
        </footer>
    )
}

export default Footer;