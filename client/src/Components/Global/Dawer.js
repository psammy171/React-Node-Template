import { makeStyles } from "@mui/styles";
import Text from '../Shared/Text';
import { NavLink } from 'react-router-dom';
import { COLORS } from "../../assets/styles/Color";
import hamburger from '../../assets/Images/hamburger.svg';

const drawerWidth = '240px'

const useStyles = makeStyles((props) => ({
    drawer:{
        position:'absolute',
        top:'0px',
        left:(props) => props.open ? '0px' : `-${drawerWidth}`,
        width:drawerWidth,
        height:'100vh',
        zIndex:200,
        backgroundColor:COLORS.primary,
        transition:'left 0.3s ease-out',
    },
    drawerBg:{
        position:'absolute',
        width:'100%',
        height:'100vh',
        top:'0px',
        bottom:'0px',
        left:'0px',
        right:'0px',
        opacity:(props) => props.open === true ? 1 : 0 ,
        visibility:(props) => props.drawerDisplay,
        backgroundColor:'rgba(0,0,0,0.5)',
        transition:'opacity 0.3s',
    },
    drawerHeader:{
        height:'40px',
        display:'flex',
        paddingBottom:'10px',
        alignItems: 'center',
    },
    hamburger:{
        position:'relative',
        height:'30px',
        marginLeft:'10px',
        '&:hover':{
            cursor:'pointer',
        }
    },
    tab:{
        display:'block',
        width:'90px !important',
        padding:'5px',
        fontSize:'20px',
        margin:'0px 8px',
        color:COLORS.lightGrey,
        textDecoration:'none',
        '&:hover':{
            cursor:'pointer',
            fontWeight:'bold',
            color:COLORS.white,
        }
    },
    active:{
        color:COLORS.white,
        fontWeight:'bold',
    },
}))

const Drawer = ({closeDrawer,open,drawerDisplay}) => {
    const classes = useStyles({open,drawerDisplay})

    return (
        <div className={classes.drawerBg} onClick={closeDrawer}>
            <div className={classes.drawer}>
                <div  className={classes.drawerHeader}>
                    <img className={classes.hamburger} src={hamburger} alt="hamburger" onClick={closeDrawer}/>
                    <Text style={{color:'white'}}>lOGO</Text>
                </div>
                <NavLink to="/" className={({isActive}) => (`${classes.tab} ${isActive ? classes.active : ''}`)} onClick={closeDrawer}>Home</NavLink>
                <NavLink to="/products" className={({isActive}) => (`${classes.tab} ${isActive ? classes.active : ''}`)} onClick={closeDrawer}>Products</NavLink>
                <NavLink to="services" className={({isActive}) => (`${classes.tab} ${isActive ? classes.active : ''}`)} onClick={closeDrawer}>Services</NavLink>
            </div>
        </div>
    )
}

export default Drawer;