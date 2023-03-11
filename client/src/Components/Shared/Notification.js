import Card from "./Card"
import Text from "./Text"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
    default:{
        height:'50px',
        width:'300px',
        position:'absolute',
        top:'0px',
        right:'0px',
        borderRadius:'3px',
    },
    msg:{
        fontSize:'20px',
        margin:'auto 10px',
    },
    err:{
        borderLeft:'red 3px solid'
    },
    info:{
        borderLeft:'blue 3px solid'
    },
    success:{
        borderLeft:'green 3px solid'
    }
}))

const Notification = ({type,msg}) => {
    const classes = useStyles()

    const getTypeStyle = () => {
        switch(type){
            case 'err' : return classes.err
            case 'success' : return classes.success
            default : return classes.info
        }
    }

    const getFontColor = () => {
        switch (type) {
            case 'err' : return {color:'red'}
            case 'success' : return {color:'green'}
            default : return {color:'blue'}
        }
    }

    return (
        <Card className={`${classes.default} ${getTypeStyle()}`}>
            <Text className={classes.msg} style={getFontColor()}>{msg}</Text>
        </Card>
    )
}

export default Notification;