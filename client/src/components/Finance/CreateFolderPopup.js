import Popup from "../Shared/Popup";
import Button from "../Shared/Button";
import { makeStyles } from "@mui/styles";
import { COLORS } from "../../assets/styles/Color";
import { useState } from "react";
import Text from "../Shared/Text";

const useStyles = makeStyles(() => ({
    folderInput:{
        width:'100%',
        outline:'none',
        fontSize:'18px',
        padding:'2px 4px',
        fontFamily:'Reem kufi',
        marginTop:'10px',
        border:`solid 1px ${COLORS.lightGrey}`,
        boxSizing:'border-box',
    },
    popupBtnBox:{
        display:'flex',
        marginTop:'15px',
        justifyContent:'flex-end',
    }
}))

const FolderPopup = (props) => {
    const classes = useStyles()
    const [errName, setErrName] = useState(false)
    const [folderName, setFolderName] = useState('')

    const updateInput = (event) => {
        setFolderName(event.target.value)
    }

    const createFolder = () => {
        if(folderName.length === 0){
            setErrName(true)
        }else{
            props.createFolder(folderName)
        }
    }
    

    return (
        <Popup open={props.open} onClose={props.closePopup} title="Enter folder name">
            <input className={classes.folderInput} placeholder='Enter folder name' onChange={updateInput}/>
            {errName && <Text>Please enter folder name</Text>}
            <div className={classes.popupBtnBox}>
                <Button variant="secondary" style={{marginRight:'10px'}} onClick={props.closePopup}>Cancel</Button>
                <Button onClick={createFolder}>Create</Button>
            </div>
        </Popup>
    )
}

export default FolderPopup;