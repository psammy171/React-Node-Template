import Text from '../Shared/Text';
import { makeStyles } from "@mui/styles";
import { COLORS } from '../../assets/styles/Color';
import add from '../../assets/Images/add.svg';
import addFolder from '../../assets/Images/add-folder.svg';
import { useState } from 'react';
import empty from '../../assets/Images/empty.svg';
import folder from '../../assets/Images/folder.svg';
import Button from '../Shared/Button';
import Popup from '../Shared/Popup';
import FolderPopup from './CreateFolderPopup';
import ExpenseItem from './ExpenseItem';

const useStyles = makeStyles(() => ({
    root:{
        marginTop:'10px',
        borderRadius:'3px',
        padding:'7px',
        backgroundColor:COLORS.lightGrey,
    },
    createFolder:{
        width:'30px',
        height:'30px',
        margin:'0px 5px',
        borderRadius:'4px',
        '&:hover':{
            cursor:'pointer',
            backgroundColor:COLORS.mediumGrey,
        }
    },
    createFolderIcon:{
        width:'24px',
        margin:'3px',
    },
    header:{
        display:'flex',
        alignItems:'center',
        borderRadius:'5px',
        backgroundColor:COLORS.lightGrey,
        justifyContent:'space-between',
    },
    path:{
        display:'flex',
        alignItems:'center',
        padding:'0px 6px',
        borderRadius:'3px',
        flexGrow:1,
        backgroundColor:COLORS.white,
    },
    folderIcon:{
        height:'20px',
        margin:'0px 3px 0px 0px',
    },
    list:{
        display:'flex',
        marginTop:'20px',
        flexDirection:'column',
    },
    emptyIcon:{
        width:'50%',
        margin:'auto',
    },
    emptyMsg:{
        textAlign:'center',
        color:COLORS.primary,
        fontWeight:'bold',
    },
}))

const ExpenseList = () => {
    const classes = useStyles()
    const [expenses, setExpenses] = useState([{type:'item',name:'test',amount:15600}])
    const [path, setPath] = useState(['root'])
    const [folderPopup, setFolderPopup] = useState(false)

    const closeFolderPopup = () => {
        setFolderPopup(false)
    }

    const openFolderPopup = () => {
        setFolderPopup(true)
    }

    const createFolder = (folderName) => {
        setExpenses(prevVal => [{type:'folder',name:folderName},...prevVal])
        closeFolderPopup()
    }

    return (
        <div className={classes.root}>
            <Text variant="heading">Expenses</Text>   
            <div className={classes.header}>
                <Text className={classes.path}><img className={classes.folderIcon} src={folder} alt="folder"/> { path}</Text>
                <div className={classes.createFolder} title="Create expense item">
                     <img className={classes.createFolderIcon} src={add} alt="creat folder"/>
                </div>
                <div className={classes.createFolder} title="Create folder" onClick={openFolderPopup}>
                    <img className={classes.createFolderIcon} src={addFolder} alt="creat folder"/>
                </div>  
            </div>
            <div className={classes.list}>
                {expenses.length != 0 && <>
                    {expenses.map((expense,index) =>
                        <ExpenseItem key={index} expenseItem={expense}/>
                    )} 
                </>}
                {expenses.length === 0 && <>
                    <img className={classes.emptyIcon} src={empty} alt="no iexpenses"/>
                    <Text className={classes.emptyMsg} variant="sub-heading">No items in the current folder</Text>
                </>}
            </div>
            <FolderPopup open={folderPopup} closePopup={closeFolderPopup} createFolder={createFolder}/>
        </div>
    )
}

export default ExpenseList;