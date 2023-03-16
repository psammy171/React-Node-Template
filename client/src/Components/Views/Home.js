import React from "react";
import Text from "../Shared/Text";
import home from '../../assets/Images/home.svg';
import { makeStyles } from "@mui/styles";
import Button from '../Shared/Button';
import { Link } from "react-router-dom";
import rightDir from '../../assets/Images/hand-point-right.svg';

const useStyles = makeStyles(() => ({
    root:{
        display:'flex',
    },
    imgBox:{
        width:'50%',
        margin:'0px 7%',
    },
    msgBox:{
        display:'flex',
        flexDirection:'column',
        width:'50%',
    },
    msg:{
        fontSize:'50px',
        fontWeight:'bold',
        whiteSpace:'pre-line',
        margin:'0px 50px 0px 100px',
        marginTop:'30%',
    },
    subMsg:{
        fontSize:'20px',
        margin:'0px 50px 0px 100px',
    },
    btnBox:{
        display:'flex',
        margin:'0px 50px 0px 100px',
        marginTop:'40px',
    },
    btn:{
        minWidth:'200px',
        marginRight:'30px',
        fontSize:'26px',
        borderRadius:'4px',
    },
    startImg:{
        marginLeft:'10px',
        width:'20px',
    },
    finLink:{
        marginLeft:'100px',
        display:'flex',
    }
}))

const Home = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.imgBox}>
                <img src={home} alt="img"/>
            </div>
            <div className={classes.msgBox}>
                <Text className={classes.msg}>{`Let's track your \n EXPENSES . . . !`}</Text>
                <Text className={classes.subMsg} style={{width:'50%'}}>You can set financial goals, create financial plan, track expenses and view your expenses over a period of time and many more</Text>
                {/* <div className={classes.btnBox}>
                    <Link to="/auth/login"><Button className={classes.btn}>Login</Button></Link>
                    <Link to="/auth/signup"><Button className={classes.btn} variant="secondary">Sign up</Button></Link>
                </div> */}
                <div className={classes.btnBox}>
                    <Link to="/finance">
                        <Button className={classes.btn}>
                            Start 
                            <img className={classes.startImg} src={rightDir} alt="start"/>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;