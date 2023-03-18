import folder from '../../assets/Images/folder-filled.svg';
import transaction from '../../assets/Images/transaction.svg'
import { makeStyles } from '@mui/styles';
import Text from '../Shared/Text';
import { COLORS } from '../../assets/styles/Color';

const useStyles = makeStyles(() => ({
    root:{
        display:'flex',
        padding:'4px',
        borderRadius:'3px',
        margin:'3px 0px',
        backgroundColor:'#d0d0d0',
    },
    icon:{
        width:'20px',
        margin:'0px 4px',
    },
    name:{
        flexGrow:1,
        fontWeight:'bold',
        padding:'auto',
        margin:'0px 4px',
        '&:hover':{
            cursor:'pointer',
        }
    },
    amount:{
        flexGrow:1,
        fontWeight:'bold',
        marginRight:'10px',
        textAlign:'right',
    },
    viewDetails:{
        fontWeight:'bold',
    }
}))

const ExpenseItem = ({expenseItem}) => {
    const classes = useStyles()

    const getIcon = () => {
        if(expenseItem.type === "folder")
            return folder
        return transaction
    }

    return (
        <div className={classes.root}>
            <img className={classes.icon} src={getIcon()} alt="icon"/>
            <Text className={classes.name}>{expenseItem.name}</Text>
            {expenseItem.type === 'item' && <>
                <Text className={classes.amount}>{expenseItem.amount}</Text>
                <Text className={classes.viewDetails}>View Details</Text>
            </>}
        </div>
    )
}

export default ExpenseItem;