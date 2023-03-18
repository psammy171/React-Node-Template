import React from "react";
import Text from "./Text";
import { makeStyles } from "@mui/styles";
import { COLORS } from "../../assets/styles/Color";
import close from '../../assets/Images/formClose.svg';
import { useFormContext } from "react-hook-form";

const useStyles = makeStyles(() => ({
    label:{
        display:'block',
        fontSize:'14px',
        fontWeight:'bold',
        marginTop:'5px',
        paddingLeft:'0px',
        color:COLORS.grey,
        fontFamily:'Reem kufi, sans-serif',
    },
    input:{
        margin:'0px',
        height:'40px',
        padding:'6px 6px',
        outline:'none',
        fontSize:'16px',
        border:`solid 1px ${COLORS.lightGrey}`,
        boxSizing:'border-box',
        fontFamily:'Reem kufi, sans-serif',
        borderRadius:'0px',
        position:'relative',
        transition:'box-shadow 0.3s ease-out',
        '&:focus':{
            border:'none',
            boxShadow:'3px 3px 5px rgba(0,0,0,0.4), -1px -1px 5px rgba(0,0,0,0.4)',
            borderRadius:'2px',
        }
    },
    closeIconRoot:{
        height:'100%',
        display:'flex',
        position: 'absolute',
        margin: 'auto',
        top: '0px',
        right: '5px',
        bottom: '0px',
        alignItems:'center',
    },
    closeIcon:{
        display:'flex',
        width:'20px',
        height:'20px',
        borderRadius:'50%',
        justifyContent:'center',
        alignItems:'center',
        '&:hover':{
            cursor:'pointer',
            backgroundColor:COLORS.lightGrey,
        }
    },
    icon:{
        width:'15px',
        height:'15px',
    },
    errMsg:{
        color:'red',
        textAlign:'right'
    }
}))

const Input = (props) => {
    const classes = useStyles()
    const { label, labelClassName, inputClassName, labelStyle, inputStyle, criteria, errMsg, ...inputProps} = props
    const { register, setValue, clearErrors, getValues, watch, formState:{errors}} = useFormContext()

    const onFocus = () => {
        clearErrors(props.id)
    }

    const clearInput = () => {
        setValue(props.id,'') 
    }

    return (
        <>
            <label htmlFor={props.id} className={`${classes.label} ${labelClassName}`} style={labelStyle}>{label}</label>
            <div style={{position:'relative'}}>
                <input {...register(props.id, {required:true})} {...inputProps} className={`${classes.input} ${inputClassName}`} style={inputStyle} onFocus={onFocus}/>
                {errors[props.id] && <Text variant="small" className={classes.errMsg}>{errMsg}</Text>}
                {props.type !== "date" && props.type !== "number" && props.type !== "password" && watch(props.id) && getValues(props.id) !== '' &&
                <div className={classes.closeIconRoot}>
                    <div className={classes.closeIcon} onClick={clearInput}>
                        <img className={classes.icon} src={close} alt="clear"/>
                    </div>
                </div>}
            </div>  
        </>
    )
}

export default Input;