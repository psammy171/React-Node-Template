import Text from '../Shared/Text';
import Button from '../Shared/Button';
import { makeStyles } from '@mui/styles';
import { COLORS } from '../../assets/styles/Color';
import Link from '../Shared/Link';
import { useState } from 'react';

const useStyles = makeStyles(() => ({
    root:{
        width:'280px',
        display:'flex',
        alignItems: 'center',
    },
    profilePic:{
        display:'flex',
        width:'40px',
        height:'40px',
        margin:'10px',
        borderRadius:'50%',
        alignItems:'center',
        color:COLORS.white,
        fontSize:'24PX',
        fontWeight:'bold',
        justifyContent:'center',
        backgroundColor:'#11910d',
    },
    name:{
        color:COLORS.primary,
        fontWeight:'bold',
    },
    signOut:{
        width:'100%',
        border:'none',
        marginTop:'20px',
        borderRadius:'7px',
        '&:hover':{
            fontWeight:'bold',
            border:'none',
        }
    },
    
}))

const ProfileDailog = ({email, name, signOut}) => {
    const classes = useStyles()
    const [signingOut, setSigningOut] = useState(false)

    const handleSignOut = () => {
        setSigningOut(true)
        setTimeout(() => {
            signOut()
        },2000)
    }

    return (
        <>
            <div className={classes.root}>
                <div className={classes.profilePic}>S</div>
                <div>
                    <Link link="/auth/profile"><Text className={classes.name}>{name}</Text></Link>
                    <Text variant="small">{email}</Text>
                </div>
            </div>
            <Button variant="secondary" className={classes.signOut} onClick={handleSignOut} loading={signingOut}>Sign out</Button>   
        </>
    )
}

export default ProfileDailog