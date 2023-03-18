import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { FormProvider, useForm } from "react-hook-form";
import Card from '../Shared/Card';
import Text from '../Shared/Text';
import { useNavigate } from "react-router-dom";
import Input from '../Shared/FormInput';
import { COLORS } from "../../assets/styles/Color";
import Button from '../Shared/Button';

const useStyles = makeStyles(() => ({
    card:{
        width:'300px',
        margin:'auto',
        padding:'20px',
        marginTop:'200px'
    },
    updatePassword:{
        width:'100%',
        marginTop:'20px'
    },
    password:{
        width:'100%',
    },
    text:{
        color:COLORS.grey,
        textAlign:'center',
    },
    heading:{
        fontWeight:700,
    }
}))

const ResetPassword = () => {
    const classes = useStyles()
    const formMethods = useForm()
    const [updated, setUpdated] = useState(false)
    const [updating, setUpdating] = useState(false)
    const navigate = useNavigate()

    const updatePassword = async () => {
        const isFormValid = await formMethods.trigger(['password'])
        if(isFormValid){
            setUpdating(true)
            setTimeout(() => {
                setUpdating(false)
                setUpdated(true)
                setCounter()
            },3000)
        }
    }

    const setCounter = () => {
        setTimeout(() => {
            navigate('/auth/login')
        },5000)
    }

    return (
        <Card className={classes.card}>
            <Text variant="sub-heading" className={classes.heading}>Set New Password</Text>
            {!updated && <FormProvider {...formMethods}>
                <Input
                    criteria={{required:true}} 
                    errMsg="Please enter password" 
                    id="password" 
                    type="password" 
                    inputClassName={classes.password} 
                    placeholder="Enter new password"/>
                <Button loading={updating} className={classes.updatePassword} onClick={updatePassword}>Update Password</Button>
            </FormProvider>}
            {updated && <>
                <Text style={{marginTop:'20px'}} className={classes.text}>Yor password has been updated</Text>
                <Text className={classes.text}>You will be redirected to login page soon</Text>
            </>}
        </Card>
    )
}

export default ResetPassword;