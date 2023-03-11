import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { FormProvider, useForm } from "react-hook-form";
import Card from "../Shared/Card";
import Text from "../Shared/Text";
import Input from "../Shared/Input";
import Button from "../Shared/Button";
import Link from "../Shared/Link";
import { signin } from "../../api/AuthApi";
import signupLogo from '../../assets/Images/signup3.svg';
import { COLORS } from "../../assets/styles/Color";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
    signup:{
        margin:'auto',
        padding:'20px',
        width:'300px',
        marginTop:'200px',
    },
    sideLinks:{
        textAlign:'right',
    },
    loginBtn:{
        display:'block',
        width:'100%',
        marginTop:'20px'
    },
    input:{
        width:'100%',
    },
    label:{
        marginTop:'15px',
    },
    logo:{
        width:'33px',
        marginLeft:'5px'
    },
    heading:{
        margin:'0px',
        fontWeight:'bold',
        display:'flex'
    },
    notification:{
        position:'absolute',
        top:'0px',
        right:'0px',
        margin:'auto',
        textAlign:'center',
        padding:'10px',
        backgroundColor:COLORS.lightGrey,
    }
}))

const Signup = () => {
    const classes = useStyles()
    const formMethods = useForm()
    const navigate = useNavigate()
    const [signingError, setSigningError] = useState({})
    const [signedIn, setSignedIn] = useState(false)
    const [signing, setSigning] = useState(false)
    
    const signup = async () => {
        const isFormValid = await formMethods.trigger(['name','dob','email','password'])
        if(isFormValid){
            setSigning(true)
            const {name,email,dob,password} = formMethods.getValues()
            signin(name,email,dob,password).then((res) =>{
                if(res.ok)
                    return res.json()   
                else{
                    setSigningError({error:true,message:'Something went wrong'})
                }
            }).then(data => {
                if(data.signedUp){
                    setSignedIn(true)
                    setTimeout(() => {
                        navigate('/auth/login')
                    },1000)
                    
                }else{
                    setSigningError({error:true,message:'Something went wrong'})
                }
            }).catch(err => {
                setSigningError({error:true,message:'Something went wrong'})
            }).finally(() => {
                setSigning(false) 
            }) 
        }
    }

    return (
        <>
            {!signedIn && <Card className={classes.signup}>
                <FormProvider {...formMethods}>
                    <Text className={classes.heading} variant="sub-heading">Sign up <img className={classes.logo} src={signupLogo} alt="signup"/></Text>
                    {signingError.error && <Text>{signingError.message}</Text>}
                    <Input criteria={{required:true}} errMsg="Please enter name" label="Name" type="text" id="name" inputClassName={classes.input} placeholder="Enter name"/>
                    <Input criteria={{required:true}} errMsg="Please select dob" label="Date of birth" type="date" id="dob" inputClassName={classes.input} labelClassName={classes.label} placeholder="Select date"/>
                    <Input criteria={{required:true}} errMsg="Please enter email" label="Email" type="email" id="email" inputClassName={classes.input} labelClassName={classes.label} placeholder="Enter email"/>
                    <Input criteria={{required:true}} errMsg="Please enter password" label="Password " type="password" id="password" inputClassName={classes.input} labelClassName={classes.label} placeholder="Enter password"/>
                    <Button loading={signing} onClick={signup} className={classes.loginBtn}>Sign up</Button>
                    <Text className={classes.sideLinks}>Already User. . .? <Link link="/auth/login">Login</Link></Text>
                </FormProvider>
            </Card>}
            {signedIn && <div>
                <Text>Signed Up successfuly. Please login to proceed</Text>
            </div>}
        </>
    )
}

export default Signup;