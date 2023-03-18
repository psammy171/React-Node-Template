import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { FormProvider, useForm } from "react-hook-form";
import Card from "../Shared/Card";
import Text from "../Shared/Text";
import Input from "../Shared/FormInput";
import Button from "../Shared/Button";
import Link from "../Shared/Link";
import { login as loginApi } from "../../api/AuthApi";
import loginLogo from '../../assets/Images/login.svg';


const useStyles = makeStyles(() => ({
    card:{
        margin:'auto',
        padding:'20px',
        width:'300px',
        marginTop:'200px'
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
    heading:{
        margin:'0px',
        fontWeight:'bold',
        display:'flex'
    },
    logo:{
        width:'30px',
        marginLeft:'10px'
    },
    errMsg:{
        textAlign:'center',
        color:'red',
    }
}))

const Login = () => {
    const classes = useStyles()
    const [loging, setLoging] = useState(false)
    const [loginError, setLoginError] = useState({})
    const formMethods = useForm()
    
    const login = async () => {
        
        const isFormValid = await formMethods.trigger(['email','password'])
        if(isFormValid){
            setLoging(true)
            const {email, password} = formMethods.getValues()
            const rawRes = await loginApi(email,password)
            const res = await rawRes.json()
            if(res.isUserValid){
                console.log("Log in",res)
                localStorage.setItem('name',res.user.name)
                localStorage.setItem('email',res.user.email)
            }else{
                setLoginError({isError:true,message:"Invalid credentials"})
            }
            setLoging(false)
            
        }
    }

    return (
        <Card className={classes.card}>
            <FormProvider {...formMethods}>
                <Text className={classes.heading} variant="sub-heading">Login <img className={classes.logo} src={loginLogo} alt="login"/></Text>
                {loginError.isError && <Text variant='small' className={classes.errMsg}>{loginError.message}</Text> }
                <Input errMsg="Pease enter email" label="Email" type="text" id="email" inputClassName={classes.input} placeholder="Enter email"/>
                <Input errMsg="Please enter password" label="Password" type="password" id="password" inputClassName={classes.input} labelClassName={classes.label} placeholder="Enter password"/>
                <Link link="/auth/forgot-password" className={classes.sideLinks}><Text>Forgot Password?</Text></Link>
                <Button loading={loging} onClick={login} className={classes.loginBtn}>Login</Button>
                <Text className={classes.sideLinks}>New User. . .? <Link link="/auth/signup">Sign up</Link></Text>
            </FormProvider> 
        </Card>
    )
}

export default Login;