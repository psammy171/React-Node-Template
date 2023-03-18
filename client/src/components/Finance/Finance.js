import ExpenseList from "./ExpenseList"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
    root:{
        width:'60%',
        margin:'0px auto',
    },
    
}))

const Finance = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ExpenseList/>
        </div>
    )
}

export default Finance;