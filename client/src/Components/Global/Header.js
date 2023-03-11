import { useState } from 'react';
import { makeStyles } from "@mui/styles";
import { COLORS } from "../../assets/styles/Color";
import ProfileDailog from "./ProfileDailog";
import Card from '../Shared/Card';
import Text from '../Shared/Text';
import Link from '../Shared/Link';
import hamburger from '../../assets/Images/hamburger.svg';
import Drawer from './Dawer';



const useStyles = makeStyles((props) => ({
    header:{
        position:'sticky',
        top:'0px',
        height:'40px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:COLORS.primary,
    },
    rightSec:{
        display: 'flex',
        alignItems:'center',
    },
    profilePic:{
        width:'25px',
        height:'25px',
        margin:'0px 10px',
        borderRadius:'50%',
        textAlign:'center',
        fontWeight:'bold',
        color:COLORS.primary,
        backgroundColor:COLORS.lightGrey,
        '&:hover':{
            cursor:'pointer',
        }
    },
    profile:{
        backgroundColor:COLORS.lightGrey,
        padding:'10px',
        position: 'absolute',
        borderRadius:'5px',
        top:'40px',
        right:'0px',
    },
    hide:{
        display:'none',
    },
    email:{
        color:COLORS.white,
    },
    login:{
        color:COLORS.white,
        marginRight:'10px',
    },
    hamburger:{
        position:'relative',
        height:'30px',
        marginLeft:'10px',
        '&:hover':{
            cursor:'pointer',
        }
    },
    back:{
        width:'18px',
        height:'18px',
        margin:'5px 5px 0px 0px',
        '&:hover':{
            cursor:'pointer',
        }
    },
    hamburgerHeader:{
        display:'flex',
        alignItems: 'center',
    },
}))

const Header = () => {
    const email = localStorage.getItem('email')
    const name = localStorage.getItem('name')
    const [isLoggedIn, setIsLoggedIn] = useState((email !== null && email !== undefined) )
    const [hideProfile, setHideProfile] = useState(true)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [drawerDisplay, setDrawerDisplay] = useState('hidden')
    const classes = useStyles({open:drawerOpen,drawerDisplay})

    const toggleProfile = () => {
        setHideProfile(prevVal => !prevVal)
    }

    const openDrawer = () => {
        setDrawerDisplay('visible')
        setDrawerOpen(true)
    }

    const closeDrawer = () => {
        setDrawerOpen(false)
        setTimeout(() => {
            setDrawerDisplay('hidden')
        },300)
    }

    const signOut = () => {
        localStorage.removeItem('email')
        setIsLoggedIn(false)
        setHideProfile(true)
    }

    return (
        <header className={classes.header}>
            <div>
                <div className={classes.hamburgerHeader}>
                    <img className={classes.hamburger} src={hamburger} alt="hamburger" onClick={openDrawer}/>
                    <Text style={{color:'white'}}>lOGO</Text>
                </div>
                <Drawer closeDrawer={closeDrawer} open={drawerOpen} drawerDisplay={drawerDisplay}/>
            </div>
            <div className={classes.rightSec}>
                {isLoggedIn === false && <Link link='/auth/login'><Text className={classes.login}>Login</Text></Link>}
                {isLoggedIn && 
                <>
                    <Text className={classes.email}>{name}</Text>
                    <div className={classes.profilePic} onClick={toggleProfile}>S</div>
                </>}
                <Card className={`${classes.profile} ${hideProfile ? classes.hide : ''}`}>
                    <ProfileDailog email={email} name={name} signOut={signOut}/>
                </Card>
            </div>
        </header>
    )
}

export default Header;