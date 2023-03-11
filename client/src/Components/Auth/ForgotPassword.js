import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { FormProvider, useForm } from "react-hook-form";
import Card from "../Shared/Card";
import Text from "../Shared/Text";
import Input from "../Shared/Input";
import Button from "../Shared/Button";
import Link from "../Shared/Link";


const useStyles = makeStyles(() => ({
    card:{
        padding:'20px',
        margin:'auto',
        marginTop:'200px',
        width:'400px',
        textAlign:'center'
    },
    form:{
        width:'300px',
        margin:'auto'
    },
    heading:{
        fontWeight:700
    },
    login:{
        width:'100%',
        marginTop:'20px'
    },
    send:{
        width:'100%',
        marginTop:'20px'
    },
    input:{
        width:'100%',
    }
}))

const ForgotPassword = () => {
    const classes = useStyles()
    const [sent, setSent] = useState(false)
    const formMethods = useForm()
    const [sending, setSending] = useState(false)
    

    const sendOTP = async () => {
        const isFormValid = await formMethods.trigger(['email'])
        if(isFormValid){
            setSent(false)
            setSending(true)
            setTimeout(() => {
                setSending(false)
                setSent(true)
            },3000)
        }
    }

    return (
        <Card className={classes.card}>
            <Text variant="sub-heading" className={classes.heading}>Forgot Password. . .? </Text>
            {!sent && <FormProvider {...formMethods}>
                <Text>No Problem! Enter your email below and we will send you an email with instruction to reset your password.</Text>
                <div className={classes.form} >
                    <Input criteria={{required:true}} errMsg="Please enter email" id="email" placeholder="Enter email" inputClassName={classes.input}/>
                    <Button className={classes.send} loading={sending} onClick={sendOTP}>Send Reset Link</Button>
                </div>
            </FormProvider>}
            {sent && <>
                <Text>If provided email is a registered email ID, you will receive an email with further instructions on how to reset your password. In case you didn't receive this email, you need to create a new account <Link link='/auth/signup'>here</Link></Text>
                <Link link='/auth/login' ><Button className={classes.login}>Login</Button></Link>
            </>}
        </Card>
    )
}

export default ForgotPassword;