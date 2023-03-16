import notFound from '../../assets/Images/404.svg';
import { makeStyles } from '@mui/styles';
import Button from '../Shared/Button';
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
    root:{
        display:'flex',
        height:'100%',
        alignItems:'center',
        flexDirection:'column',
    },
    img:{
        paddingTop:'100px',
        margin:'auto',
        width:'30%'
    },
    button:{
        fontSize:'24px',
        borderRadius:'4px',
    }
}))

const Error = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <img className={classes.img} src={notFound} alt="page not found"/>
            <Link to="/"><Button className={classes.button}>Go to Home Page</Button></Link>
        </div>
    )
}

export default Error;